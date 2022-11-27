import {ChatPage} from "./Chat/chat";
import {renderDom} from "../utils/renderDom";


window.addEventListener('DOMContentLoaded', () => {
  const chatPage = new ChatPage({
    profileName: 'Вадим',
    profileImgUrl: 'https://i.pravatar.cc/300?img=68'
  });
  renderDom('#app', chatPage)
});

