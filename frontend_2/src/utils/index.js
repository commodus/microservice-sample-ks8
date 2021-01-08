export const setAccountToLocal = (account) => {
  localStorage.setItem("_id", account._id);
  localStorage.setItem("name", account.name);
  localStorage.setItem("score", account.score);
  localStorage.setItem("age", account.age);
};

export const getAccountFromLocal = () => {
  let value = {};
  value._id = localStorage.getItem("_id");
  value.name = localStorage.getItem("name");
  value.score = localStorage.getItem("score");
  value.age = localStorage.getItem("age");

  return value;
};
