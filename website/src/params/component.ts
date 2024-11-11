import {COMPONENTS} from '$lib/const';
import type {ParamMatcher} from '@sveltejs/kit';

export const match: ParamMatcher = (value) => {
  return COMPONENTS.some((c) => c.slug === value);
};
