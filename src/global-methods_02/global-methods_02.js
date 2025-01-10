const usersInformation = {
  userName: "Roman",
  userAge: 23,
  isUserAdult: true,
};

function beverageList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ value: "Lemon" }]);
    }, 2000);
  });
}

module.exports = { usersInformation, beverageList };
