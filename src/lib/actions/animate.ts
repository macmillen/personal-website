import type { Action } from "svelte/action";

export const animate: Action<
  HTMLElement,
  { _class?: string; delay?: number; duration?: number }
> = (node, { delay = 0, _class = "", duration = 600 } = {}) => {
  node.classList.add("invisible");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          node.classList.remove("invisible");
          if (entry.target instanceof HTMLElement) {
            entry.target.style.animationDuration = `${duration}ms`;
          }
          entry.target.classList.add(_class);
        }, delay);
      }
    });
  });

  observer.observe(node);

  return {
    destroy: () => observer.unobserve(node),
  };
};

export const getFadeUpDelay = (i: number) => 300 + 170 * i;
