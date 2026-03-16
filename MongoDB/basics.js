const { Schema, default: mongoose } = require("mongoose");
const {connection} = require("./connectionDB.js");  // A syntax error occured here because we should either use import or require in both the files and differently in each file.

connection()
  .then(() => {
    console.log("Conneciton established...");
  })
  .catch((err) => console.log("Error in connection ", err));


  // Creating a schema
  const userSchema = new Schema({
    name : String,
    email : String,
    age : Number,
    isActive : Boolean,
    tags : [String],
    createdAt : {type : Date , default : Date.now()}
  })

  // Creating a model that will be interacting with the database for us using the schema we created
  const User = mongoose.model("User", userSchema);


  // ___________________________________________________________________________________________
  // Now creating a function that will run some example queries for us in the database
  async function executeCreateQuery(){
    try{

      const newUsers = await User.insertMany([
    { name: "Alice Johnson",   email: "alice@gmail.com",   age: 28, isActive: true,  tags: ["developer", "react"],        createdAt: new Date() },
    { name: "Bob Smith",       email: "bob@gmail.com",     age: 34, isActive: false, tags: ["designer", "figma"],         createdAt: new Date() },
    { name: "Clara Davis",     email: "clara@gmail.com",   age: 22, isActive: true,  tags: ["student", "python"],         createdAt: new Date() },
    { name: "David Lee",       email: "david@gmail.com",   age: 45, isActive: true,  tags: ["manager", "agile"],          createdAt: new Date() },
    { name: "Eva Martinez",    email: "eva@gmail.com",     age: 30, isActive: false, tags: ["marketing", "seo"],          createdAt: new Date() },
    { name: "Frank Wilson",    email: "frank@gmail.com",   age: 27, isActive: true,  tags: ["backend", "nodejs"],         createdAt: new Date() },
    { name: "Grace Kim",       email: "grace@gmail.com",   age: 25, isActive: true,  tags: ["fullstack", "mongodb"],      createdAt: new Date() },
    { name: "Henry Brown",     email: "henry@gmail.com",   age: 38, isActive: false, tags: ["devops", "docker"],          createdAt: new Date() },
    { name: "Isla Turner",     email: "isla@gmail.com",    age: 31, isActive: true,  tags: ["tester", "automation"],      createdAt: new Date() },
    { name: "James White",     email: "james@gmail.com",   age: 29, isActive: true,  tags: ["developer", "typescript"],   createdAt: new Date() },
]);
      console.log(newUsers);

    }catch(e){
      console.log( `Error : ${e}` );
    }finally{
      await mongoose.connection.close();
    }
  }

  // ___________________________________________________________________________________________
  // Creating a function to get all the users
  async function executeGetUsersQuery(){
    try{
        const UsersFromDB = await User.find({});
        console.log(UsersFromDB);
    }catch(e){
      console.log(`Error : ${e}`);
    }finally{
      mongoose.connection.close();
    }
  }
  
  // ___________________________________________________________________________________________
  // Create a function to get User by ID
  async function getUserByID(id){
    try{
      const userFound = await User.findById(id);
      console.log(userFound);
    }catch(e){
      console.log(`Error : ${e}`);
    }finally{
      mongoose.connection.close();
    }
  }
  
  // ___________________________________________________________________________________________
  // Get selective fields from the data
  async function selectiveUsers(){
    try{
      // const selectFields = await User.find({},{"name" : 1 , "email" : 1 , '_id' : 0});
      const selectFields = await User.find({}).select(["name", "email", "-_id"]);
      console.log(selectFields);
    }catch(e){
      console.log(`Error : ${e}`);
    }finally{
      mongoose.connection.close();
    }
  }
  
  // ___________________________________________________________________________________________
  // Apply Pagination or Skiping users
  async function paginationUsers(){
    try{
      const paginationUser = await User.find({}).select(["name", "email", "-_id"]).limit(5).skip(1);   // Limit is for the pagination and skip will be used depending on which page the user is for eg : skip (page * limit);
      console.log(paginationUser);
    }catch(e){
      console.log(`Error : ${e}`);
    }finally{
      mongoose.connection.close();
    }
  }
  
  // ___________________________________________________________________________________________
  // Applying sorting
  async function sortedUsers(){
    try{
      const sortedUser = await User.find({}).select(["name", "email", "-_id"]).sort({"age" : -1});  // Descending order of age
      console.log(sortedUser);
    }catch(e){
      console.log(`Error : ${e}`);
    }finally{
      mongoose.connection.close();
    }
  }

  // ___________________________________________________________________________________________
  // Counting the documents where age is less than 30
  async function lessThan30(){
    try{
      const lessThan30Users = await User.find({}).select("name -_id").where({"age" : {$lt : 30}}).countDocuments();
      console.log("lessThan30Users : ", lessThan30Users);
    }catch(e){
      console.log(`Error : ${e}`);
    }finally{
      mongoose.connection.close();
    }
  }

  // ___________________________________________________________________________________________
  // Deleting user by ID
  async function delUserByID(id){
    try{
      const delUser = await User.findByIdAndDelete(id);
      console.log("Deleted User : ", delUser);
    }catch(e){
      console.log(`Error : ${e}`);
    }finally{
      mongoose.connection.close();
    }
  }
  
  // ___________________________________________________________________________________________
  // Updating user by ID
  async function updateUserByID(id){
    try{
      const updateUser = await User.findByIdAndUpdate(id, {$set : {"name" : "Kuwaiti Ronaldo", age : 7}}, {new : true});
      console.log("Updated User : ", updateUser);
    }catch(e){
      console.log(`Error : ${e}`);
    }finally{
      mongoose.connection.close();
    }
  }
  
  // executeCreateQuery();
  // executeGetUsersQuery();
  // getUserByID("69b8308253a13b3b9ca1cd14");
  // selectiveUsers();
  // paginationUsers();
  // sortedUsers();
  // lessThan30();
  // delUserByID("69b83df032e9e69f222ed003");
  updateUserByID("69b8308253a13b3b9ca1cd14");


   
  