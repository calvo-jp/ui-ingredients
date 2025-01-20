<script lang="ts">
  import KeyboardSupport from '$lib/components/accessibility/keyboard-support.svelte';
  import Anatomy from '$lib/components/anatomy.svelte';
  import Api from '$lib/components/api';
  import Demo from '$lib/components/demo';
  import MetaTags from '$lib/components/meta-tags.svelte';

  let {data} = $props();

  let {id, title, description, content} = $derived(data);
</script>

<svelte:head>
  <title>{title} | UI Ingredients</title>
</svelte:head>

<MetaTags {title} {description} />

<h1
  class="not-prose mb-3 font-lexend text-4xl font-extrabold text-neutral-800 dark:text-white"
>
  {title}
</h1>
<p class="not-prose mb-8 text-lg">{description}</p>

<Demo {id} />
<Anatomy {id} />

{@html content}

<Api {id} />
<KeyboardSupport {id} />
