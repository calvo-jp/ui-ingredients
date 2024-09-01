<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface SelectHiddenSelectProps extends HTMLProps<'select'> {}
</script>

<script lang="ts">
  import {getFieldContext} from '$lib/field/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectHiddenSelectProps = $props();

  let field = getFieldContext();
  let select = selectContext.get();

  let mergedProps = $derived(mergeProps(props, select.getHiddenSelectProps()));
</script>

<select aria-describedby={field?.['aria-describedby']} {...mergedProps}>
  {@render children?.()}
</select>
