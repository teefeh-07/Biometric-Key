export const truncateMiddle = (str: string, offset = 4) => {
  if (!str) return "";
  return `${str.slice(0, offset)}...${str.slice(-offset)}`;
};

export const formatDate = (timestamp: number) => {
  return new Intl.DateTimeFormat("en-US").format(new Date(timestamp));
};
