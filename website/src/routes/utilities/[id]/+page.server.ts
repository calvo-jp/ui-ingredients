import {utilities} from '.velite';
import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({params}) => {
  const component = utilities.find(({id}) => params.id === id);
  if (!component) error(404);
  return component;
};
