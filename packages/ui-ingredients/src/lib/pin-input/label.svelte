<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface PinInputLabelProps extends Assign<SvelteHTMLElements['label'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePinInputContext} from './context.svelte.js';

  let {children, ...props}: PinInputLabelProps = $props();

  let context = usePinInputContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
