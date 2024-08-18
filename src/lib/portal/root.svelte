<script context="module" lang="ts">
  import {type Snippet} from 'svelte';

  export interface PortalProps {
    children: Snippet;
    disabled?: boolean;
    container?: HTMLElement;
    getRootNode?: () => ShadowRoot | Document | Node;
  }
</script>

<script lang="ts">
  import {portal} from '@zag-js/svelte';

  let {children, ...props}: PortalProps = $props();
</script>

<div use:portal={props} data-portal>
  {@render children?.()}
</div>
