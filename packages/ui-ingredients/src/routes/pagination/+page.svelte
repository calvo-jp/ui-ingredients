<script lang="ts">
  import {Pagination} from '$lib/index.js';

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
    {#each context.pages as page, index}
      {#if page.type === 'page'}
        <Pagination.Item value={page.value}>
          {page.value}
        </Pagination.Item>
      {:else}
        <Pagination.Ellipsis {index}>...</Pagination.Ellipsis>
      {/if}
    {/each}

    <Pagination.PrevTrigger>Prev</Pagination.PrevTrigger>
    <Pagination.NextTrigger>Next</Pagination.NextTrigger>
  {/snippet}
</Pagination.Root>
