<script lang="ts">
  import {Steps} from '$lib/index.js';

  const items = [
    {title: 'Step 1', content: 'Step 1 Content'},
    {title: 'Step 2', content: 'Step 2 Content'},
    {title: 'Step 3', content: 'Step 3 Content'},
  ];
</script>

<Steps.Root count={items.length}>
  <Steps.List class="flex gap-3">
    {#each items as item, index}
      <Steps.Item {index} class="flex items-center gap-2">
        <Steps.Trigger class="flex items-center gap-2">
          <Steps.Indicator
            class="group flex items-center justify-center size-5 border-2 rounded-full data-complete:border-indigo-600 data-complete:bg-indigo-600 transition-all duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4 text-white hidden group-data-complete:block"
            >
              <path d="M20 6L9 17L4 12"></path>
            </svg>
          </Steps.Indicator>
          <span>{item.title}</span>
        </Steps.Trigger>
        {#if index + 1 < items.length}
          <Steps.Separator class="h-0.5 w-8 bg-neutral-800" />
        {/if}
      </Steps.Item>
    {/each}
  </Steps.List>

  <div class="mt-5">
    {#each items as item, index}
      <Steps.Content {index} class="p-5 bg-neutral-800 max-w-[32rem]">
        {item.content}
      </Steps.Content>
    {/each}

    <Steps.Content index={items.length} class="p-5 bg-neutral-800 max-w-[32rem]">
      Done!🚀
    </Steps.Content>
  </div>

  <div class="mt-5 flex items-center gap-3">
    <Steps.PrevTrigger class="h-10 px-3.5 border disabled:opacity-50 disabled:cursor-not-allowed">
      Back
    </Steps.PrevTrigger>
    <Steps.NextTrigger class="h-10 px-3.5 border disabled:opacity-50 disabled:cursor-not-allowed">
      Next
    </Steps.NextTrigger>
  </div>
</Steps.Root>
