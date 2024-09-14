import {redirect} from '@sveltejs/kit';
import type {PageLoad} from './$types.js';
import {links} from './utils.js';

export const load: PageLoad = async () => {
  redirect(307, links[0].path);
};
