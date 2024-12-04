<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import {setPortalProviderPropsContext} from './portal-context.svelte.js';

  export interface PortalProviderProps {
    container?: HTMLElement;
    children?: Snippet;
  }
</script>

<script lang="ts">
  let {container, children}: PortalProviderProps = $props();

  setPortalProviderPropsContext({
    get container() {
      return container;
    },
  });
</script>

{@render children?.()}
