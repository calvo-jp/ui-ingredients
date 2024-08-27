<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SwitchHiddenInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {switchContext} from './context.svelte.js';

  let {...props}: SwitchHiddenInputProps = $props();

  let switch$ = switchContext.get();

  let attrs = $derived(mergeProps(props, switch$.getHiddenInputProps()));
</script>

<input {...attrs} />
