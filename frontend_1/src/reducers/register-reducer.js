const initialState = {
  user: {
    name: "",
    age: 0,
    score: 0,
    password: "",
  },
  registrationOK: false,
  errorMessage: "",
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return { ...state, registrationOK: true, user: { ...action.payload } };
    case "REGISTER_FAILURE":
      return { ...state, errorMessage: action.payload };
    case "USER_CHANGE":
      return { ...state, errorMessage: "", user: { ...action.payload } };
    default:
      return state;
  }
};
