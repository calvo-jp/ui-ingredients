<script lang="ts" module>
  const DEMO_TAG_REGEX = /<demo>/;
  const ANATOMY_TAG_REGEX = /<anatomy>/;
  const API_TAG_REGEX = /<api>/;
  const KEYBOARD_SUPPORT_TAG_REGEX = /<keyboard-support>/;

  const TAG_REGEX = new RegExp(
    `(${[
      DEMO_TAG_REGEX.source,
      ANATOMY_TAG_REGEX.source,
      API_TAG_REGEX.source,
      KEYBOARD_SUPPORT_TAG_REGEX.source,
    ].join('|')})`,
  );
</script>

<script lang="ts">
  import {navigating} from '$app/state';

  import KeyboardSupport from '$lib/components/accessibility/keyboard-support.svelte';
  import Anatomy from '$lib/components/anatomy.svelte';
  import Api from '$lib/components/api';
  import Demo from '$lib/components/demo';

  interface Props {
    id: string;
    title: string;
    description: string;
    content: string;
  }

  let {id, title, description, content}: Props = $props();

  let parts = $derived.by(() => {
    return content.split(TAG_REGEX);
  });

  $effect(() => {
    if (navigating) {
      DEMO_TAG_REGEX.lastIndex = 0;
      ANATOMY_TAG_REGEX.lastIndex = 0;
      API_TAG_REGEX.lastIndex = 0;
      KEYBOARD_SUPPORT_TAG_REGEX.lastIndex = 0;
      TAG_REGEX.lastIndex = 0;
    }
  });
</script>

<h1>{title}</h1>
<p>{description}</p>

{#each parts as part}
  {#if DEMO_TAG_REGEX.test(part)}
    <Demo {id} />
  {:else if ANATOMY_TAG_REGEX.test(part)}
    <Anatomy {id} />
  {:else if API_TAG_REGEX.test(part)}
    <Api {id} />
  {:else if KEYBOARD_SUPPORT_TAG_REGEX.test(part)}
    <KeyboardSupport {id} />
  {:else}
    {@html part}
  {/if}
{/each}
