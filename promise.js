/* The task is used to perform a promise activity... in the one after one
1. register user
2. send email to the user
3. login user
4. get data of the user
5. list data of the user
*/

// We make all the function as a promise so it's still in the pending state it's not resolved;

const registerUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User register successfully, 1");
      resolve();
    }, 2000);
  });
};

const sendEmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("email send successfully, 2");
      resolve();
    }, 3000);
  });
};

const loginUser = (callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user login successfully, 3");
      resolve();
    }, 4000);
  });
};

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Get user successfully, 4");
      resolve();
    }, 3000);
  });
};

const listUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("List user successfully, 5");
      resolve();
    }, 3000);
  });
};

// Now we are here to resolve our promise function one by one;

registerUser()
  .then(sendEmail)
  .then(loginUser)
  .then(getUser)
  .then(listUser)
  .catch((error) => {
    console.log("Error", error);
  });
console.log("Another Activity takes place!");
