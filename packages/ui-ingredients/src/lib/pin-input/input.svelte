<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {InputProps} from '@zag-js/pin-input';

  export interface PinInputInputProps
    extends Assign<HTMLProps<'input'>, InputProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPinInputContext} from './context.svelte.js';

  let {index, asChild, ...props}: PinInputInputProps = $props();

  let pinInput = getPinInputContext();

  let mergedProps = $derived(
    mergeProps(props, pinInput.getInputProps({index})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
