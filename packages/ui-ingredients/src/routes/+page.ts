import {redirect} from '@sveltejs/kit';
import type {PageLoad} from './$types.js';

export const load: PageLoad = async () => {
  redirect(307, '/accordion');
};
