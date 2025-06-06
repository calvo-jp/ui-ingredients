import {components} from '.velite';
import {error} from '@sveltejs/kit';
import type {EntryGenerator, PageServerLoad} from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
  return components.map(({id}) => {
    return {id};
  });
};

export const load: PageServerLoad = async ({params}) => {
  const data = components.find(({id}) => params.id === id);
  if (!data) error(404);
  return data;
};
