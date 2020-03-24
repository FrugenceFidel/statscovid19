export const numberWithCommas = (x?: number) => {
  if (typeof x === 'number') {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return 0;
};
