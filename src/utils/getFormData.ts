
export function getFormData(event: Event){
  const data = new FormData(event?.target as HTMLFormElement);
  const authFormData: Record<string, string> = {}

  data.forEach((value:FormDataEntryValue, key: string) => {
    authFormData[key] = value as string
  })

  console.log(authFormData)
}

