import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
  "62c3a868-f513-46b4-8b6d-6616e5adec4a", 
  props.user.username,
   props.user.secret
   );
  return (
    <div style={{height:"100vh"}}>
          <MultiChatSocket  {...chatProps}      />
          <MultiChatWindow {...chatProps} style={{height:"100%"}} />
  </div>
)
}


export default ChatsPage;


