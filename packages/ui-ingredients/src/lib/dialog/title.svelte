<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface DialogTitleProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useDialogContext} from './context.svelte.js';

  let {children, ...props}: DialogTitleProps = $props();

  let context = useDialogContext();

  let attrs = $derived(mergeProps(props, context.getTitleProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
