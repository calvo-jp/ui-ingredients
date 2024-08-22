<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SwitchHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSwitchContext} from './context.svelte.js';

  let {...props}: SwitchHiddenInputProps = $props();

  let context = useSwitchContext();

  let attrs = $derived(mergeProps(props, context.getHiddenInputProps()));
</script>

<input {...attrs} />
