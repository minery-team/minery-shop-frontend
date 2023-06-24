export const scrollTo = (target: HTMLElement | 'top') => {
  if (target == null) return;

  if (target === 'top') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }

  target.scrollIntoView({ behavior: 'smooth' });
};
