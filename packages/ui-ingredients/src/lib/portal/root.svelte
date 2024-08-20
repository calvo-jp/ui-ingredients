<script context="module" lang="ts">
  import {type Snippet} from 'svelte';

  export interface PortalProps {
    container?: HTMLElement;
    disabled?: boolean;
    getRootNode?: () => ShadowRoot | Document | Node;
    children: Snippet;
  }
</script>

<script lang="ts">
  import {portal} from '@zag-js/svelte';

  let {children, ...props}: PortalProps = $props();
</script>

<div use:portal={props}>
  {@render children?.()}
</div>
