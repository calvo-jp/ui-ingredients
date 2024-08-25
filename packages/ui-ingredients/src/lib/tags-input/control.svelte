<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TagsInputControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tagsInputContext} from './context.svelte.js';

  let {children, ...props}: TagsInputControlProps = $props();

  let tagsInput = tagsInputContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
