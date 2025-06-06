import {utilities} from '.velite';
import {error} from '@sveltejs/kit';
import type {EntryGenerator, PageServerLoad} from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
  return utilities.map(({id}) => {
    return {id};
  });
};

export const load: PageServerLoad = async ({params}) => {
  const data = utilities.find(({id}) => params.id === id);
  if (!data) error(404);
  return data;
};
