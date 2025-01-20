import {components} from '.velite';
import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({params}) => {
  const data = components.find(({id}) => params.id === id);
  if (!data) error(404);
  return data;
};
