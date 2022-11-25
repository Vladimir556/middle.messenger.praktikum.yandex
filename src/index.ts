import {ChatPage} from "./pages/Chat/chat";
import {renderDom} from "./utils/renderDom";


window.addEventListener('DOMContentLoaded', () => {
  const chatPage = new ChatPage({});
  renderDom('#app', chatPage)
});

