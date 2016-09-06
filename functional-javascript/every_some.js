// Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser){
      return goodUsers.some(function(user){
        return user.id === submittedUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;


/** OR ES6 */

// module.exports = (goodUsers) =>
//   (submittedUsers) =>
//   submittedUsers.every((submittedUser) =>
//   goodUsers.some((goodUser) =>
//  goodUser.id === submittedUser.id));
