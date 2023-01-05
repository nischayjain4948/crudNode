/* The task is used to perform a callback activity... in the one after one
1. register user
2. send email to the user
3. login user
4. get data of the user
5. list data of the user
*/

const registerUser = (callback) => {
  setTimeout(() => {
    console.log("User register successfully, 1");
    callback();
  }, 2000);
};

const sendEmail = (callback) => {
  setTimeout(() => {
    console.log("email send successfully, 2");
    callback();
  }, 3000);
};

const loginUser = (callback) => {
  setTimeout(() => {
    console.log("user login successfully, 3");
    callback();
  }, 4000);
};

const getUser = (callback) => {
  setTimeout(() => {
    console.log("Get user successfully, 4");
    callback();
  }, 3000);
};

const listUser = (callback) => {
  setTimeout(() => {
    console.log("List user successfully, 5");
    callback();
  }, 3000);
};

// Calling the function and make a call back hell (pryamid of Doom);

registerUser(() => {
  sendEmail(() => {
    loginUser(() => {
      getUser(() => {
        listUser(() => {
          console.log("All function takes place properly");
        });
      });
    });
  });
});

console.log("other activity takes place!");
