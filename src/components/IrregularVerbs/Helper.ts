export const receiveLocalDate = () => {
  const localDate = new Date()
  const stringDate = `${localDate.getDate()}.${localDate.getMonth() + 1}.${localDate.getFullYear()}`
  return stringDate
}
