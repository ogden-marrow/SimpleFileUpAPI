function requestHandle() { 
  let testB = {
    "name": "test",
    "age": "18",
    "game": "csgo",
    "timeOfRequest": getTime()
  };
  return testB;
}

// make a function that returns the current date
// Language: javascript
function getTime() {
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return time;
}

module.exports = {
  requestHandle
};