const SEND_MESSAGE = "SEND_MESSAGE";
let initialState = {
  personData: [
    { id: 1, name: "Андрей" },
    { id: 2, name: "Виталя" },
    { id: 3, name: "Леша" },
    { id: 4, name: "Маша" },
    { id: 5, name: "Саша" },
    { id: 6, name: "Даша" },
  ],
  messageData: [
    { id: 1, massage: "Hello" },
    { id: 2, massage: "Why?" },
    { id: 3, massage: "How?" },
    { id: 4, massage: "Yo" },
    { id: 5, massage: "Yo" },
    { id: 6, massage: "Yo" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messageData: [...state.messageData, { id: 6, massage: body }],
      };
    }
    default:
      return state;
  }
};
export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
export default dialogsReducer;
