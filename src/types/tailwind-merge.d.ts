declare module 'tailwind-merge' {
  export function twMerge(...classNames: Array<string | false | null | undefined>): string;
  export default twMerge;
}
