import moment from 'moment';

export const numberWithCommas = (x?: number) => {
  if (typeof x === 'number') {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return 0;
};

export const displayDate = (
  updatedDate: number | undefined,
  language: string
): string => {
  let dt = moment(updatedDate)
    .locale(language)
    .startOf('second')
    .fromNow()
    .replace('tokea', '');

  if (dt.includes('dakika')) {
    dt = `${dt} zilizopita`;
  }
  if (dt.includes('masaa')) {
    dt = `${dt} yaliyopita`;
  }
  return dt;
};
