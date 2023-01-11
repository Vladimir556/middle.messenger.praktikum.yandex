import {
  SigninData, SignupData, UpdatePasswordData, UpdateProfileData,
} from '../../types/interfaces';

type ValidatedFormData =
  Record<string, string>
  | SigninData
  | SignupData
  | UpdatePasswordData
  | UpdateProfileData;

export function getFormData(event: Event): ValidatedFormData {
  const data = new FormData(event?.target as HTMLFormElement);
  const authFormData: Record<string, string> = {};

  data.forEach((value:FormDataEntryValue, key: string) => {
    authFormData[key] = value as string;
  });

  console.log(authFormData);
  return authFormData;
}
