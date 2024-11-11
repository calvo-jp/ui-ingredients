import {UTILITIES} from '$lib/const';
import type {ParamMatcher} from '@sveltejs/kit';

export const match: ParamMatcher = (value) => {
  return UTILITIES.some((u) => u.slug === value);
};
