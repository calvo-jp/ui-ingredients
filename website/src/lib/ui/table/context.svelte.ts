import {createContext} from 'ui-ingredients';
import type {tableRecipe} from './recipe';

export const [getTableStylesContext, setTableStylesContext] =
  createContext<ReturnType<typeof tableRecipe>>('TableRecipe');
