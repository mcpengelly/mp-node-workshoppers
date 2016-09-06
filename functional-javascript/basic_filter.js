// Use Array#filter to write a function called getShortMessages.
// getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

function getShortMessages(arr){
  if(arr){
    // var result = [];
    return arr.filter(function(elem){
      return elem.message.length < 50;
    }).map(function(val){
      return val.message;
    });
  }
}

module.exports = getShortMessages;







