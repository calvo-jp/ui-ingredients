<script lang="ts">
  import KeyboardSupport from '$lib/components/accessibility/keyboard-support.svelte';
  import Anatomy from '$lib/components/anatomy.svelte';
  import Api from '$lib/components/api';
  import Demo from '$lib/components/demo';
  import MetaTags from '$lib/components/meta-tags.svelte';

  interface Props {
    id: string;
    title: string;
    description: string;
    content: string;
  }

  let {id, title, description, content}: Props = $props();

  let parts = $derived.by(() => {
    return content
      .replace(/\{title\}/g, title)
      .replace(/\{description\}/g, description)
      .split(/(\<demo\>|\<anatomy\>|\<api\>|\<keyboard-support\>)/);
  });
</script>

<svelte:head>
  <title>{title} | UI Ingredients</title>
</svelte:head>

<MetaTags {title} {description} />

{#each parts as part}
  {#if part === '<demo>'}
    <Demo {id} />
  {:else if part === '<anatomy>'}
    <Anatomy {id} />
  {:else if part === '<api>'}
    <Api {id} />
  {:else if part === '<keyboard-support>'}
    <KeyboardSupport {id} />
  {:else}
    {@html part}
  {/if}
{/each}
