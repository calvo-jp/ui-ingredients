<script lang="ts">
  import {Pagination} from '$lib/index.js';
  import {ChevronLeftIcon, ChevronRightIcon} from '@untitled-theme/icons-svelte';

  let page = $state(1);

  $inspect(page);
</script>

<Pagination.Root
  count={50}
  pageSize={10}
  class="flex items-center gap-2"
  {page}
  onPageChange={(detail) => {
    page = detail.page;
  }}
>
  {#snippet children(context)}
    <Pagination.PrevTrigger
      class="flex size-12 items-center justify-center rounded border disabled:cursor-not-allowed disabled:opacity-50"
    >
      <ChevronLeftIcon />
    </Pagination.PrevTrigger>

    {#each context.pages as page, index}
      {#if page.type === 'page'}
        <Pagination.Item
          value={page.value}
          class="aria-page:border-accent aria-page:text-accent aria-page:bg-accent/15 aria-page:font-semibold flex size-12 items-center justify-center rounded border transition-all duration-200"
        >
          {page.value}
        </Pagination.Item>
      {:else}
        <Pagination.Ellipsis {index} class="flex size-12 items-center justify-center"
          >...</Pagination.Ellipsis
        >
      {/if}
    {/each}

    <Pagination.NextTrigger
      class="flex size-12 items-center justify-center rounded border disabled:cursor-not-allowed disabled:opacity-50"
    >
      <ChevronRightIcon />
    </Pagination.NextTrigger>
  {/snippet}
</Pagination.Root>
