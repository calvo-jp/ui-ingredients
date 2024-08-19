<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/radio-group';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface RadioGroupItemProps extends Assign<SvelteHTMLElements['label'], ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setRadioGroupItemContext, useRadioGroupContext} from './context.svelte.js';

  let {value, invalid, disabled, children, ...props}: RadioGroupItemProps = $props();

  let context = useRadioGroupContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        value,
        invalid,
        disabled,
      }),
    ),
  );

  setRadioGroupItemContext({
    value,
    invalid,
    disabled,
  });
</script>

<label {...attrs}>
  {@render children?.()}
</label>
