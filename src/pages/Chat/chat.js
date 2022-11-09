

const messageInput = document.querySelector('#message')

const maxHeight = 200
const defaultHeight = 35

messageInput.addEventListener('input', () => {
  if (messageInput.value === ""){
    messageInput.style.height = `${defaultHeight}px`
    return
  }
  if (messageInput.scrollHeight > maxHeight) {
    messageInput.style.height = `${maxHeight}px`
  } else {
    messageInput.style.height = `${messageInput.scrollHeight}px`
  }
})