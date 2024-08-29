<script lang="ts" module>
  import type {AsChild, Assign, HtmlProps} from '$lib/types.js';
  import type {InputProps} from '@zag-js/pin-input';

  export interface PinInputInputProps extends Assign<HtmlProps<'input'>, InputProps> {
    asChild?: AsChild<HtmlProps<'input'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {pinInputContext} from './context.svelte.js';

  let {index, asChild, ...props}: PinInputInputProps = $props();

  let pinInput = pinInputContext.get();

  let attrs = $derived(mergeProps(props, pinInput.getInputProps({index})));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <input {...attrs} />
{/if}
