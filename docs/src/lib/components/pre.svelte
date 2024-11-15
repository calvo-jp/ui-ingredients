<script lang="ts">
  import {Copy01Icon} from '@untitled-theme/icons-svelte';
  import {tick} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {twMerge} from 'tailwind-merge';
  import {Clipboard} from 'ui-ingredients';

  let {
    children,
    class: className,
    ...props
  }: SvelteHTMLElements['pre'] = $props();

  let ref: HTMLPreElement | null = $state(null);
  let text = $state('');

  $effect(() => {
    tick().then(() => {
      text = ref?.innerText.trim() ?? '';
    });
  });
</script>

<pre bind:this={ref} class={twMerge(className, 'relative')} {...props}>
  {#if text}
    <Clipboard.Root class="absolute right-3 top-3" value={text}>
      <Clipboard.Trigger>
        <Copy01Icon class="size-5" />
      </Clipboard.Trigger>
    </Clipboard.Root>
  {/if}

  {@render children?.()}
</pre>
