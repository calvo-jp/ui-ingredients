<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectHiddenSelectProps extends HtmlProps<'select'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectHiddenSelectProps = $props();

  let context = selectContext.get();

  let attrs = $derived(mergeProps(props, context.getHiddenSelectProps()));
</script>

<select {...attrs}>
  {@render children?.()}
</select>
