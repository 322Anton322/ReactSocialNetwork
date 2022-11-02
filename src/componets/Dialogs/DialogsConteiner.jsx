import { connect } from "react-redux";
import {
  sendMessage,
} from "../../Redux/dialogs-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

import Dialogs from "./Dialogs";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
/*
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBodyCreator: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};
*/

export default compose(
  connect(mapStateToProps, {
    sendMessage,
  }),
  withAuthRedirect
)(Dialogs);


