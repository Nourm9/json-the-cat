const request = require("request");

const arr = process.argv;
const cat = String(arr[2]);
let url = "https://api.thecatapi.com/v1/breeds/search?q=" + cat;
console.log(url);



request(url, (error, response, body) => {
  console.log("error:", error);
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});
