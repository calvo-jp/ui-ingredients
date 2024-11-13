<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {twMerge} from 'tailwind-merge';

  let {...props}: SvelteHTMLElements['textarea'] = $props();
</script>

<textarea {...props} class={twMerge('', props.class)}></textarea>
