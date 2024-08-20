import * as avatar from '@zag-js/avatar';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import {getContext, setContext} from 'svelte';

export interface CreateAvatarContextProps extends avatar.Context {}
export interface CreateAvatarContextReturn
  extends ReturnType<typeof createAvatarContext> {}

export function createAvatarContext(props: CreateAvatarContextProps) {
  const [state, send] = useMachine(avatar.machine(props));

  const api = $derived(
    reflect(() => avatar.connect(state, send, normalizeProps)),
  );

  return api;
}

export function setAvatarContext(value: CreateAvatarContextReturn) {
  setContext('Avatar', value);
}

export function useAvatarContext() {
  return getContext<CreateAvatarContextReturn>('Avatar');
}
