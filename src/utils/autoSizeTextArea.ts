export function autoSizeTextArea(event: InputEvent & { target: HTMLTextAreaElement }) {
  const { target } = event!;
  const maxHeight = 200;
  const defaultHeight = 35;

  if (target) {
    if (target.value === '') {
      target.style.height = `${defaultHeight}px`;
      return;
    }
    if (target.scrollHeight > maxHeight) {
      target.style.height = `${maxHeight}px`;
    } else {
      target.style.height = `${target.scrollHeight}px`;
    }
  }
  return;
}
