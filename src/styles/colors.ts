export const colors = {
  pink: "#FA04C1",
  red: "#FE0000",
  black: "#000000",
  blue: "#0804E6",
  navy: "#004290",
  coral: "#FD5C57",
  green: "#296C18",
  darkBlue: "#000408",
} as const;

export type ColorName = keyof typeof colors;
