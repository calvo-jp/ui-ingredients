import {createContext} from '../create-context.svelte.js';

export const [getPortalProviderPropsContext, setPortalProviderPropsContext] =
  createContext<{container?: HTMLElement}>('PortalProvider [PROPS]', false);
