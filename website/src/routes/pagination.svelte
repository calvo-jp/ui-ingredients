<script lang="ts">
  import {page} from '$app/state';
  import {components, overview, utilities} from '.velite';
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@untitled-theme/icons-svelte';

  const links = [
    /**/
    ...overview,
    ...components,
    ...utilities,
  ].map((item) => ({
    path: item.permalink,
    label: item.title,
  }));

  const currentLinkIndex = $derived.by(() => {
    const idx = links.findIndex((link) => link.path === page.url.pathname);
    return idx;
  });

  const prevLink = $derived(
    currentLinkIndex <= 0 ? null : links.at(currentLinkIndex - 1),
  );

  const nextLink = $derived(
    currentLinkIndex >= links.length - 1
      ? null
      : links.at(currentLinkIndex + 1),
  );
</script>

<div class="flex w-full items-center md:mt-12 lg:mt-16">
  {#if prevLink}
    <a href={prevLink.path} class="flex items-center gap-2.5">
      <ChevronLeftIcon class="size-6 text-neutral-500" />
      <div class="flex flex-col">
        <span class="text-xs leading-none text-neutral-500">Previous</span>
        <span class="font-lexend font-medium">{prevLink.label}</span>
      </div>
    </a>
  {/if}

  <div class="grow"></div>

  {#if nextLink}
    <a href={nextLink.path} class="flex items-center gap-2">
      <div class="flex flex-col items-end">
        <span class="text-xs leading-none text-neutral-500">Next</span>
        <span class="font-lexend font-medium">{nextLink.label}</span>
      </div>
      <ChevronRightIcon class="size-6 text-neutral-500" />
    </a>
  {/if}
</div>
