<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectHiddenSelectProps extends HtmlProps<'select'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectHiddenSelectProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getHiddenSelectProps()));
</script>

<select {...attrs}>
  {@render children?.()}
</select>
