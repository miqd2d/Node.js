// The task is to read the content of the file and from that data modify it and write it back, then append another data and finally print back the file for the last time using callback functions

const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error : ", err.message);
    return;
  }
  console.log("\n*************\nData : ", data, "\n*************\n");

  // Now write entirely new things in the file
  let content = "This is the eniterly new content updated in the file";
  fs.writeFile("input.txt", content, (err) => {
    if (err) {
      console.log("\nAn error occured while writting the file\n");
      return;
    } else {
      console.log("\n********\nFile successfully written\n********\n");

      // Now append to it
      let appendData = "\nThis is the appended data";
      fs.appendFile("input.txt", appendData, (err) => {
        if (err) {
          console.log("\nAn error occured while appending the file\n");
          return;
        } else {
          console.log("\n********\nFile successfully appended\n********\n");

          // Now finally read it for the last time
          fs.readFile("input.txt", "utf8", (err, data) => {
            if (err) {
              console.log("error : ", err.message);
              return;
            }
            console.log("\n*************\nData : ", data, "\n*************\n");
          });
        }
      });
    }
  });
});
