---
id: pagination
title: Pagination
description: A component for navigating through multiple pages of content.
---

# {title}

{description}

<demo>

## Anatomy

<anatomy>

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

<api>
