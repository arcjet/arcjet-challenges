import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  // This could be an API call or some other logic
  const limited = false;
  return { limited };
};