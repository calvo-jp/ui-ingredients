<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/tags-input';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface TagsInputItemProps extends Assign<SvelteHTMLElements['div'], ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setTagsInputItemContext, useTagsInputContext} from './context.svelte.js';

  let {index, value, disabled, children, ...props}: TagsInputItemProps = $props();

  let context = useTagsInputContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        index,
        value,
        disabled,
      }),
    ),
  );

  setTagsInputItemContext({
    index,
    value,
    disabled,
  });
</script>

<div {...attrs}>
  {@render children?.()}
</div>
