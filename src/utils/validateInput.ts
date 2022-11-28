import {validationValue} from "../constants/validation";

export function validateInput(event: Event): void{
  const {name, value} = event.target as HTMLInputElement
  const errorMessage = document.querySelector(`#validate_${name}`) as HTMLElement
  const tipMessage = document.querySelector(`#tip_${name}`) as HTMLElement
  let result = ""

  if (!(validationValue as object).hasOwnProperty(name)){
    return;
  }

  switch (event.type){
    case 'blur':
      errorMessage!.style.display = 'block'
      tipMessage!.style.display = 'none'

      if (name === 'repeatPassword'){
        const passwordInput = document.querySelector('#password') as HTMLInputElement
        if (value !== passwordInput.value){
          result = "Пароли не совпадают"
        }
        errorMessage!.textContent = result
        return
      }

      result = blurValidate(name, value)
      errorMessage!.innerHTML = result
      return
    case 'focus':
      errorMessage!.style.display = 'none'
      tipMessage!.style.display = 'block'

      if (name === 'repeatPassword'){
        tipMessage!.textContent = 'пароли должны совпадать'
        return
      }

      result = focusValidate(name)
      tipMessage!.textContent = result
      return;
  }



}


function blurValidate(name: string, value: string): string{
  const {regExp, errMessage} = validationValue[name]
  if (regExp.test(value)){
    return ''
  } else{
    return errMessage
  }
}

function focusValidate(name: string): string{
  const {message} = validationValue[name]
  return message
}