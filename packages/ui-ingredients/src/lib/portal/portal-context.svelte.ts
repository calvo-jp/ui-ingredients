import {createContext} from '../create-context.svelte.js';

interface PortalProviderProps {
  container?: HTMLElement | null;
}

export const [getPortalProviderPropsContext, setPortalProviderPropsContext] =
  createContext<PortalProviderProps>('PortalProvider [PROPS]', false);
