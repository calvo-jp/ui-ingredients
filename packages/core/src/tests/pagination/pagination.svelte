<script lang="ts">
  import {Pagination} from '$lib/index.js';
</script>

<Pagination.Root count={100} pageSize={10}>
  {#snippet children(context)}
    <Pagination.PrevTrigger>&lt;</Pagination.PrevTrigger>
    <Pagination.NextTrigger>&gt;</Pagination.NextTrigger>

    {#each context.pages as page, index}
      {#if page.type === 'page'}
        <Pagination.Item value={page.value} />
      {:else}
        <Pagination.Ellipsis {index}>...</Pagination.Ellipsis>
      {/if}
    {/each}
  {/snippet}
</Pagination.Root>
