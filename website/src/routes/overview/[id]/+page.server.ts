import {overview} from '.velite';
import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({params}) => {
  const data = overview.find(({id}) => id === params.id);
  if (!data) error(404);
  return data;
};