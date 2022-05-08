export type MappedSet<Set extends string | number, T = string> = {
  [key in Set]: T;
};
