<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import {type Environment} from './context.svelte.js';

  export interface EnvironmentProviderProps extends Partial<Environment> {
    children: Snippet;
  }
</script>

<script lang="ts">
  import {environmentContext} from './context.svelte.js';

  let {children, ...props}: EnvironmentProviderProps = $props();

  let context: Environment = $derived({
    getRootNode: props.getRootNode ?? (() => document),
    getDocument: props.getDocument ?? (() => document),
    getWindow: props.getWindow ?? (() => window),
  });

  environmentContext.set(() => context);
</script>

{@render children()}
