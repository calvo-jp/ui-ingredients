---
title: Pagination
description: A component for navigating through multiple pages of content.
---

<script>
  import {PaginationDemo} from '$lib/demo';
  import {Anatomy} from '$lib/anatomy';
  import {Api} from '$lib/api';
  import Metadata from '$lib/metadata.svelte';
  import PageHeading from '$lib/page-heading.svelte';
</script>

<svelte:head>

  <title>UI Ingredients | {title}</title>
</svelte:head>

<Metadata title="{title}" description="{description}" />
<PageHeading title="{title}" description="{description}" />

<PaginationDemo />

## Anatomy

<Anatomy id="pagination" />

## Usage

```svelte
<script>
  import {Pagination} from 'ui-ingredients';
  import {ChevronLeftIcon, ChevronRightIcon} from '$lib/icons';
</script>

<Pagination.Root>
  {#snippet children(context)}
    <Pagination.PrevTrigger>
      <ChevronLeftIcon />
    </Pagination.PrevTrigger>

    {#each context.pages as page, index}
      {#if page.type === 'page'}
        <Pagination.Item value={page.value}>
          {page.value}
        </Pagination.Item>
      {:else}
        <Pagination.Ellipsis {index}>...</Pagination.Ellipsis>
      {/if}
    {/each}

    <Pagination.NextTrigger>
      <ChevronRightIcon />
    </Pagination.NextTrigger>
  {/snippet}
</Pagination.Root>
```

## API Reference

<Api id="pagination" />
