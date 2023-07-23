export const checkLastWord = (word: string) => {
  const lastChar = word.charCodeAt(word.length - 1);
  const isThereLastChar = (lastChar - 0xac00) % 28;

  if (isThereLastChar) return '이란';
  return '란';
};
