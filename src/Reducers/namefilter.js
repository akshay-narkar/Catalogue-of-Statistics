import { NAME_CHANGE_FILTER } from '../Actions';

const initstate = {
  namefilter: '',
};

const namefilterReducer = (state = initstate, action) => {
  let statenew = { ...state };
  switch (action.type) {
    case NAME_CHANGE_FILTER:
      statenew = { ...statenew, namefilter: action.text };
      return statenew;
    default:
      return state;
  }
};

export default namefilterReducer;
