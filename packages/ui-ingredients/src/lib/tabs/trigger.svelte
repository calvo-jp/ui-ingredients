<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {TriggerProps} from '@zag-js/tabs';
  import type {Snippet} from 'svelte';

  export interface TabsTriggerProps extends Assign<HtmlProps<'button'>, TriggerProps> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tabsContext} from './context.svelte.js';

  let {value, disabled, asChild, children, ...props}: TabsTriggerProps = $props();

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

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
