<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {TriggerProps} from '@zag-js/tabs';

  export interface TabsTriggerProps extends Assign<HtmlIngredientProps<'button'>, TriggerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tabsContext} from './context.svelte.js';

  let {value, disabled, children, ...props}: TabsTriggerProps = $props();

  let context = tabsContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      context.getTriggerProps({
        value,
        disabled,
      }),
    ),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
