// className merge helper — joins conditional class fragments, dropping falsy values
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}