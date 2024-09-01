# Pagination

## Usage

```svelte
<script>
  import {Pagination} from 'ui-ingredients';
  import {ChevronLeftIcon, ChevronRightIcon} from '$lib/icons';

  let page = $state(1);

  $inspect(page);
</script>

<Pagination.Root
  {page}
  onPageChange={function (detail) {
    page = detail.page;
  }}
  count={50}
  pageSize={10}
>
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
