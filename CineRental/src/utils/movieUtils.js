export const getImg = (name) => {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
};

export const disableScrollBar = (property) => {
  document.body.style.overflow = property;
};
