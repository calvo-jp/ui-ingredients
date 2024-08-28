<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/steps';
  import type {Snippet} from 'svelte';

  export interface StepsContentProps extends Assign<HtmlProps<'div'>, ItemProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: StepsContentProps = $props();

  let steps = stepsContext.get();

  let attrs = $derived(mergeProps(props, steps.getContentProps({index})));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
