import {ChatPage} from "./Chat/chat";
import {renderDom} from "../utils/renderDom";


window.addEventListener('DOMContentLoaded', () => {
  const {search} = location
  const selectedChatId = search.split('=').at(-1)
  console.log(selectedChatId)

  const chatPage = new ChatPage({
    profileName: 'Вадим',
    profileImgUrl: 'https://i.pravatar.cc/300?img=68'
  });
  renderDom('#app', chatPage)
});

