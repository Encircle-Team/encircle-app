import { FETCH_PROVO_EVENTS, FETCH_SLC_EVENTS } from '../actions/Event';

const initState = {
  events: []
}

const eventReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_PROVO_EVENTS:
      return { events: action.events };
    case FETCH_SLC_EVENTS:
    return { events: action.events };
    default:
      return state;
  }
}

export default eventReducer;