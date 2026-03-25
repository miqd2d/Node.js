// Import the 2 necessary modules of apolloserver
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Import typeDefs
import {typeDefs} from "./schema.js"

// Import data
import db from "./_db.js"

const resolvers = {
    Query : {
        games(){
            return db.games;
        },
        game(_,args){
            return db.games.find((game)=> game.id === args.id);
        },
        reviews(){
            return db.reviews;
        },
        review(_,args){
            return db.reviews.find((review)=> review.id === args.id);
        },
        authors(){
            return db.authors;
        },
        author(_,args){
            return db.authors.find((author) => author.id === args.id)
        }
    },
    Game : {
        reviews(parent) {
            return db.reviews.filter((r)=> r.game_id === parent.id);
        }
    },
    Review : {
        author(parent) {
            return db.authors.find((author) => parent.author_id === author.id );
        },
        game(parent) {
            return db.games.find((game) => parent.game_id === game.id );
        }
    },
    Author : {
        reviews(parent){
            return db.reviews.filter((r) => parent.id === r.author_id )
        }
    },
    Mutation : {
        // For deleting a game
        deleteGame(_,args){
            db.games = db.games.filter((g)=> g.id !== args.id);
            return db.games;
        },
        // For adding a game
        addGame(_,args){
            let game = {
                ...args.game,
                id : Math.floor(Math.random() * 10000),
            }
            db.games.push(game);
            return game;
        },
        // To update the game
        updateGame(_,args){
            db.games = db.games.map((game)=>{
                if(game.id === args.id){
                    return {
                        ...game,
                        ...args.edit
                    }
                }
                return game;
            })

            // To return the single to the request
            return db.games.find((g)=> g.id === args.id);
        }
    }
}

// Create a server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Getting the url back from the standaloneserver after giving it the server instance

const { url } = await startStandaloneServer(server, {
  listen: { port: 4509 },
});
console.log(`Server running at ${url}`);
