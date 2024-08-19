import hyperid from 'hyperid';

const h = hyperid();
export const uuid = () => h.uuid;
