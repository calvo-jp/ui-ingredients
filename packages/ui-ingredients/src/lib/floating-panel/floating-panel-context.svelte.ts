import {createContext} from '../create-context.svelte.js';
import type {CreateFloatingPanelReturn} from './create-floating-panel.svelte.js';

export const [getFloatingPanelContext, setFloatingPanelContext] =
  createContext<CreateFloatingPanelReturn>('FloatingPanel');
