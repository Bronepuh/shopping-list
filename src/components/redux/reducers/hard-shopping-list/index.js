const initialState = {
  activeDepartment: null,
  departments: {
    bread: [],
    milk: [],
    meat: [],
    alcohol: [],
  },
};

export const hardShoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addItem":
      const currentItem = action.payload.type;
      state.departments[currentItem] = [
        ...state.departments[currentItem],
        action.payload.data,
      ];
    default:
      return state;
  }
};
