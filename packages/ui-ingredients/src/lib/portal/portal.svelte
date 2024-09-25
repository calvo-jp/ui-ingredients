<script lang="ts" context="module">
  import {type Snippet} from 'svelte';

  export interface PortalProps {
    container?: HTMLElement;
    disabled?: boolean;
    children: Snippet;
    [x: `data-${string}`]: string | number | boolean | null | undefined;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {portal} from '@zag-js/svelte';

  let {container, disabled, children, ...props}: PortalProps = $props();

  let environment = getEnvironmentContext();
</script>

<div
  use:portal={{
    disabled,
    container,
    getRootNode: environment?.getRootNode,
  }}
  data-scope="portal"
  data-part="root"
  {...props}
>
  {@render children?.()}
</div>
