<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {TriggerProps} from '@zag-js/tabs';

  export interface TabsTriggerProps extends Assign<HtmlProps<'button'>, TriggerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tabsContext} from './context.svelte.js';

  let {value, disabled, children, ...props}: TabsTriggerProps = $props();

  let tabs = tabsContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      tabs.getTriggerProps({
        value,
        disabled,
      }),
    ),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
