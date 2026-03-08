// Promises are a better way to handle asynchronous code

// Now if we were to perform the same task that we did in the callback => Read => Write => Append => Read

const fs = require("fs");

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(`Error occured : ${err.message}`);
      }
      resolve(`Data : ${data}`);
    });
  });
}

function writeFilePromise(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) {
        reject(`Error occured : ${err.message}`);
      }
      resolve(`Content Written`);
    });
  });
}

function appendFilePromise(path, content) {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, content, (err) => {
      if (err) {
        reject(`Error occured : ${err.message}`);
      }
      resolve(`Content Appended`);
    });
  });
}

readFilePromise("input.txt")
  .then((result) => {
    console.log("\n************\nRead Successful\n************\n");

    // Now writing
    writeFilePromise("input.txt", "New content")
      .then((result) => {
        console.log("\n************\nWrite Successful\n************\n");

        // Now Appending
        appendFilePromise("input.txt", "\nAppended Content")
          .then((result) => {
            console.log("\n************\nAppend Successful\n************\n");

            //Now finally Reading
            readFilePromise("input.txt")
              .then((result) => {
                console.log("\n************\nRead Successful\n************\n");
              })
              .catch((e) => {
                console.log(
                  "\n************\nWrite Unsuccessful\n************\n",
                );
              });
          })
          .catch((e) => {
            console.log("\n************\nAppend Unsuccessful\n************\n");
          });
      })
      .catch((e) => {
        console.log("\n************\nWrite Unsuccessful\n************\n");
      });
  })
  .catch((e) => {
    console.log("\n************\nRead Unsuccessful\n************\n");
  });
