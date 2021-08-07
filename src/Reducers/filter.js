import { CHANGE_FILTER } from '../Actions';

const initstate = {
  filter: 'All',
};

const filterReducer = (state = initstate, action) => {
  let statenew = { ...state };
  console.log(statenew);
  console.log(action);
  switch (action.type) {
    case CHANGE_FILTER:
      statenew = { ...statenew, filter: action.category };
      console.log(statenew);
      return statenew;
    default:
      return state;
  }
};

export default filterReducer;
