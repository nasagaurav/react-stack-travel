const intialState = {
  users: [],
  bookings: [],
  flights: [],
  role: '',
  loggedin: false,
  user: null,
};

function reducer(state = intialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
