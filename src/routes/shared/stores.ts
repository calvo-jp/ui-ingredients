import {page as originalPage} from '$app/stores';
import {fromStore} from 'svelte/store';

export const page = fromStore(originalPage);
