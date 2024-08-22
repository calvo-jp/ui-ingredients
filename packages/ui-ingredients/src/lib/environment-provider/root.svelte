<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import {
    createEnvironmentContext,
    setEnvironmentContext,
    type CreateEnvironmentContextProps,
  } from './context.svelte.js';

  export interface EnvironmentProviderProps
    extends CreateEnvironmentContextProps {
    children: Snippet;
  }
</script>

<script lang="ts">
  let {children, ...props}: EnvironmentProviderProps = $props();
  let context = createEnvironmentContext(props);
  setEnvironmentContext(context);
</script>

{@render children()}
