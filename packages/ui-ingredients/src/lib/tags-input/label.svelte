<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TagsInputLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tagsInputContext} from './context.svelte.js';

  let {children, ...props}: TagsInputLabelProps = $props();

  let tagsInput = tagsInputContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
