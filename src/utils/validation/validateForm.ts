import { validateInput } from './validateInput';

export function validateForm(event: Event):boolean {
  const data = new FormData(event?.target as HTMLFormElement);
  let result: boolean = true;

  data.forEach((value, name) => {
    result = validateInput(event, name, value as string);
  });
  return result;
}
