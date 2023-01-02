import {SigninData, SignupData} from "../../types/interfaces";

export function getFormData(event: Event): Record<string, string> | SigninData | SignupData {
  const data = new FormData(event?.target as HTMLFormElement);
  const authFormData: Record<string, string> = {};

  data.forEach((value:FormDataEntryValue, key: string) => {
    authFormData[key] = value as string;
  });

  console.log(authFormData);
  return authFormData;
}
