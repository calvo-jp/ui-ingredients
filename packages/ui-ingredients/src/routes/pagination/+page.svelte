<script lang="ts">
  import {Pagination} from '$lib/index.js';
  import ChevronLeftIcon from '../chevron-left-icon.svelte';
  import ChevronRightIcon from '../chevron-right-icon.svelte';

  let page = $state(1);

  $inspect(page);
</script>

<Pagination.Root
  count={100}
  pageSize={10}
  {page}
  onPageChange={(detail) => {
    page = detail.page;
  }}
>
  {#snippet children(context)}
    <Pagination.PrevTrigger>
      <ChevronLeftIcon style="width:20px;height:20px;" />
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
      <ChevronRightIcon style="width:20px;height:20px;" />
    </Pagination.NextTrigger>
  {/snippet}
</Pagination.Root>

<style>
  :global([data-scope='pagination'][data-part='root']) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
  }

  :global([data-scope='pagination'][data-part='item']),
  :global([data-scope='pagination'][data-part='prev-trigger']),
  :global([data-scope='pagination'][data-part='next-trigger']) {
    border: 1px solid var(--border-default);
    height: 40px;
    min-width: 40px;
    padding: 0px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global([data-scope='pagination'][data-part='item'][data-selected]) {
    color: var(--color-accent);
    font-weight: 500;
  }

  :global([data-scope='pagination'][data-part='ellipsis']) {
    display: block;
    text-align: center;
    width: 40px;
    opacity: 0.65;
  }
</style>
