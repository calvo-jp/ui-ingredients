<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupItemHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useRadioGroupContext,
    useRadioGroupItemPropsContext,
  } from './context.svelte.js';

  let {...props}: RadioGroupItemHiddenInputProps = $props();

  let context = useRadioGroupContext();

  let itemProps = useRadioGroupItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemHiddenInputProps(itemProps)),
  );
</script>

<input {...attrs} />
