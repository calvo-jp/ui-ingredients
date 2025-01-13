import {createContext} from 'ui-ingredients';
import type {CreateTableReturn} from './create-table.svelte';

export const [getTableContext, setTableContext] =
  createContext<CreateTableReturn>('Table');
