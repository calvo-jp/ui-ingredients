<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface TagsInputControlProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTagsInputContext} from './context.svelte.js';

  let {children, ...props}: TagsInputControlProps = $props();

  let context = useTagsInputContext();

  let attrs = $derived(mergeProps(props, context.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
