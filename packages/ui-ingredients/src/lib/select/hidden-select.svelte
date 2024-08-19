<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SelectHiddenSelectProps extends Assign<SvelteHTMLElements['select'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSelectContext} from './context.svelte.js';

  let {children, ...props}: SelectHiddenSelectProps = $props();

  let context = useSelectContext();

  let attrs = $derived(mergeProps(props, context.getHiddenSelectProps()));
</script>

<select {...attrs}>
  {@render children?.()}
</select>
