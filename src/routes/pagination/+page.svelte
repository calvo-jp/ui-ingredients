<script lang="ts">
  import {Pagination} from '$lib/index.js';

  let page = $state(1);

  $inspect(page);
</script>

<Pagination.Root
  count={100}
  pageSize={10}
  class="flex items-center gap-2"
  {page}
  onPageChange={(detail) => {
    page = detail.page;
  }}
>
  {#snippet children(context)}
    <Pagination.PrevTrigger
      class="border size-11 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 18L9 12L15 6"></path>
      </svg>
    </Pagination.PrevTrigger>

    {#each context.pages as page, index}
      {#if page.type === 'page'}
        <Pagination.Item
          value={page.value}
          class="border min-w-11 h-11 flex items-center justify-center aria-page:border-sky-300 aria-page:text-sky-800 aria-page:bg-sky-50 aria-page:font-semibold transition-all duration-200"
        >
          {page.value}
        </Pagination.Item>
      {:else}
        <Pagination.Ellipsis {index} class="size-11 flex items-center justify-center">
          ...
        </Pagination.Ellipsis>
      {/if}
    {/each}

    <Pagination.NextTrigger
      class="border size-11 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9 18L15 12L9 6"></path>
      </svg>
    </Pagination.NextTrigger>
  {/snippet}
</Pagination.Root>
