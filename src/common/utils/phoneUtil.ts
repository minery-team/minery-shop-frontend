export const PHONE_NUMBER_REGEX = /(01[016789]|099|098|090)[0-9]{8}/;
export const FORMATTED_PHONE_NUMBER_REGEX =
  /(01[016789]|099|098|090)-([0-9]{4})-([0-9]{4})/;
export function checkValidPhoneNumber(phoneNumber: string | undefined) {
  if (phoneNumber === undefined) return false;
  else return PHONE_NUMBER_REGEX.test(phoneNumber.replace(/[^0-9]/g, ""));
}

export function formatTimeLeft(timeLeft: number) {
  const leftMinute = Math.floor(timeLeft / 60);
  const leftSecond = timeLeft % 60;
  const formattedLeftMinute = leftMinute < 10 ? "0" + leftMinute : leftMinute;
  const formattedLeftSecond = leftSecond < 10 ? "0" + leftSecond : leftSecond;
  return formattedLeftMinute + ":" + formattedLeftSecond;
}
