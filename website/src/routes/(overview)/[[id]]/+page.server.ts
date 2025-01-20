import {overview} from '.velite';
import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({params}) => {
  const id = params.id ?? 'introduction';
  const data = overview.find((o) => o.id === id);
  if (!data) error(404);
  return data;
};
