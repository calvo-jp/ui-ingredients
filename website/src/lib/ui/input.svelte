<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {twMerge} from 'tailwind-merge';

  let {...props}: SvelteHTMLElements['input'] = $props();
</script>

<input type="text" {...props} class={twMerge('', props.class)} />
