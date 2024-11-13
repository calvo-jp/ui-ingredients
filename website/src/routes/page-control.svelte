<script lang="ts">
  import {page} from '$app/stores';
  import {APP_LINKS} from '$lib/const';
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@untitled-theme/icons-svelte';

  const links = APP_LINKS.map((parent) => parent.links).flat();

  const currentLinkIndex = $derived(
    links.findIndex((link) => link.href === $page.url.pathname),
  );

  const prevLink = $derived(
    currentLinkIndex <= 0 ? null : (links.at(currentLinkIndex - 1) ?? null),
  );

  const nextLink = $derived(
    currentLinkIndex >= links.length - 1
      ? null
      : (links.at(currentLinkIndex + 1) ?? null),
  );
</script>

<div class="mx-auto flex w-full max-w-screen-md items-center pb-12 pt-16">
  {#if prevLink}
    <a href={prevLink.href} class="flex items-center gap-2.5">
      <ChevronLeftIcon class="size-6 text-neutral-500" />
      <div class="flex flex-col">
        <span class="text-xs leading-none text-neutral-500">Previous</span>
        <span class="font-medium">{prevLink.name}</span>
      </div>
    </a>
  {/if}

  <div class="grow"></div>

  {#if nextLink}
    <a href={nextLink.href} class="flex items-center gap-2">
      <div class="flex flex-col items-end">
        <span class="text-xs leading-none text-neutral-500">Next</span>
        <span class="font-medium">{nextLink.name}</span>
      </div>
      <ChevronRightIcon class="size-6 text-neutral-500" />
    </a>
  {/if}
</div>
