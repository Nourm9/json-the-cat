const request = require("request");


const fetchBreedDescription = function (breedName, callback) {
  let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    console.log(data);
    const objectLoc = data[0].description;
    return callback(null, objectLoc);
  });
};

module.exports = { fetchBreedDescription };
