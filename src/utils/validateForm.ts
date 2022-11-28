import {validateInput} from "./validateInput";

export function validateForm(event: Event):boolean{
  const data = new FormData(event?.target as HTMLFormElement);
  data.forEach((value, name) =>{
    validateInput(event, name, value as string)
  })
  return true
}