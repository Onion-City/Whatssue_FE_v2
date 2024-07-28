// 01012341234->010-1234-1234
export function formatPhoneNumber(phoneNumberInput?: string): string {
  const phoneNumber = phoneNumberInput || "";
  const regex: RegExp = /(\d{3})(\d{4})(\d{4})/;
  const formattedNumber: string = phoneNumber.replace(regex, "$1-$2-$3");
  return formattedNumber || "";
}
