import { validationValue } from '../../constants/validation';

function blurOrSubmitValidate(name: string, value: string): string {
  const { regExp, errMessage } = validationValue[name];
  if (regExp) {
    if (regExp.test(value)) {
      return '';
    }
    return errMessage;
  }
  return '';
}

function focusValidate(name: string): string {
  const { message } = validationValue[name];
  return message;
}

export function validateInput(event: Event, inputName?: string, inputValue?: string): boolean {
  let name: string;
  let value: string;

  if (inputName !== undefined && inputValue !== undefined) {
    name = inputName;
    value = inputValue;
  } else {
    name = (event.target as HTMLInputElement).name;
    value = (event.target as HTMLInputElement).value;
  }

  const errorMessage = document.querySelector(`#validate_${name}`) as HTMLElement;
  const tipMessage = document.querySelector(`#tip_${name}`) as HTMLElement;

  let result = '';

  if (!(validationValue as object).hasOwnProperty(name)) {
    return false;
  }

  switch (event.type) {
    case 'focus':
      errorMessage!.style.display = 'none';
      tipMessage!.style.display = 'block';

      if (name === 'repeatPassword') {
        tipMessage!.textContent = validationValue[name].message;
        return true;
      }

      result = focusValidate(name);
      tipMessage!.textContent = result;
      return true;
    default:
      errorMessage!.style.display = 'block';
      tipMessage!.style.display = 'none';

      if (name === 'repeatPassword') {
        const passwordInput = document.querySelector('#password') as HTMLInputElement;
        if (!passwordInput) {
          const newPassword = document.querySelector('#newPassword') as HTMLInputElement;
          if (value !== newPassword.value) {
            result = validationValue[name].errMessage;
          }
        } else if (value !== passwordInput.value) {
          result = validationValue[name].errMessage;
        }

        errorMessage!.textContent = result;
        return !(result);
      }

      result = blurOrSubmitValidate(name, value);
      errorMessage!.innerHTML = result;
      return !(result);
  }
}
