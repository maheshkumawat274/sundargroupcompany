declare module 'clsx' {
  type ClassDictionary = Record<string, boolean | undefined | null | number | string>;

  type ClassValue =
    | string
    | number
    | null
    | undefined
    | ClassDictionary
    | ClassValue[];

  function clsx(...inputs: ClassValue[]): string;

  export { clsx };
  export default clsx;
  export type { ClassValue };
}
