<script lang="ts">
  import {Pagination} from '$lib/index.js';
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@untitled-theme/icons-svelte';
  import {Button, IconButton} from '../shared/index.js';

  let page = $state(1);
</script>

<Pagination.Root
  count={100}
  pageSize={10}
  class="flex w-full flex-wrap items-center gap-2"
  {page}
  onPageChange={(detail) => {
    page = detail.page;
  }}
>
  {#snippet children(context)}
    <Pagination.PrevTrigger>
      {#snippet asChild(attrs)}
        <IconButton variant="outline" {...attrs}>
          <ChevronLeftIcon />
        </IconButton>
      {/snippet}
    </Pagination.PrevTrigger>

    {#each context.pages as page, index}
      {#if page.type === 'page'}
        <Pagination.Item
          value={page.value}
          class="aria-page:border-accent aria-page:text-accent aria-page:bg-accent/15"
        >
          {#snippet asChild(attrs)}
            <Button variant="outline" {...attrs}>
              {page.value}
            </Button>
          {/snippet}
        </Pagination.Item>
      {:else}
        <Pagination.Ellipsis
          {index}
          class="flex size-12 items-center justify-center"
        >
          ...
        </Pagination.Ellipsis>
      {/if}
    {/each}

    <Pagination.NextTrigger>
      {#snippet asChild(attrs)}
        <IconButton variant="outline" {...attrs}>
          <ChevronRightIcon />
        </IconButton>
      {/snippet}
    </Pagination.NextTrigger>
  {/snippet}
</Pagination.Root>
