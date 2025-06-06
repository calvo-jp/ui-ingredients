import {overview} from '.velite';
import {error} from '@sveltejs/kit';
import type {EntryGenerator, PageServerLoad} from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
  return overview.map(({id}) => {
    return {id};
  });
};

export const load: PageServerLoad = async ({params}) => {
  const data = overview.find(({id}) => id === params.id);
  if (!data) error(404);
  return data;
};
