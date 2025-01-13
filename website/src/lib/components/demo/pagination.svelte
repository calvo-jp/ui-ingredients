<script lang="ts">
  import {Button, IconButton} from '$lib/components';
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@untitled-theme/icons-svelte';
  import {Pagination} from 'ui-ingredients';
</script>

<Pagination.Root
  count={100}
  pageSize={10}
  class="mx-auto flex w-fit flex-wrap items-center gap-2"
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
        <Pagination.Item value={page.value}>
          {#snippet asChild(attrs)}
            <Button variant="outline" {...attrs}>
              {page.value}
            </Button>
          {/snippet}
        </Pagination.Item>
      {:else}
        <Pagination.Ellipsis
          {index}
          class="flex size-12 items-center justify-center text-neutral-400 dark:text-neutral-500"
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
