export const truncateMiddle = (str: string, offset = 4) => {
  if (!str) return "";
  return `${str.slice(0, offset)}...${str.slice(-offset)}`;
};
