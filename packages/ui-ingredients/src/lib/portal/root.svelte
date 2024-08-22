<script module lang="ts">
  import {type Snippet} from 'svelte';

  export interface PortalProps {
    container?: HTMLElement;
    disabled?: boolean;
    getRootNode?: () => ShadowRoot | Document | Node;
    children: Snippet;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {portal} from '@zag-js/svelte';

  let {container, disabled, getRootNode, children}: PortalProps = $props();
  let environmentContext = useEnvironmentContext();
</script>

<div
  use:portal={{
    container,
    disabled,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  }}
>
  {@render children?.()}
</div>
