import type {ComponentId} from '$lib/types';
import type {ParamMatcher} from '@sveltejs/kit';

const components = [] satisfies ComponentId[];

export const match: ParamMatcher = (value) => {
  return true;
};
