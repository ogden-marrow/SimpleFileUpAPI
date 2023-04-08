// This only works with LocalHost:3000
// To change the post address change it in line 
const axios = require('axios');
const fs = require('fs');


const sendFiles = async () => {
  // Object s
  const myFiles = fs.readFileSync('testFile.txt');

  const formData = {
    name: "ItWorked.txt",
    body: myFiles
  };

  const response = await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData
  });

  const json = await response.json();

  console.log(json);
};

sendFiles();