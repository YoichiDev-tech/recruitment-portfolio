// Smoothly scrolls the window to the top — used on route change so each page starts at the top
export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, behavior });
}