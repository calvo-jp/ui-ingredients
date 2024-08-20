<script lang="ts">
  import {Steps} from '$lib/index.js';

  const items = [
    {title: 'Step 1', content: 'Step 1 Content'},
    {title: 'Step 2', content: 'Step 2 Content'},
    {title: 'Step 3', content: 'Step 3 Content'},
  ];

  let step = $state(1);

  $inspect(step);
</script>

<Steps.Root
  {step}
  onStepChange={(detail) => {
    step = detail.step;
  }}
  count={items.length}
>
  <Steps.List class="flex gap-3">
    {#each items as item, index}
      <Steps.Item {index} class="flex items-center gap-2">
        <Steps.Trigger class="flex items-center gap-2">
          <Steps.Indicator
            class="data-complete:border-indigo-600 data-complete:bg-indigo-600 group flex size-5 items-center justify-center rounded-full border-2 transition-all duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="group-data-complete:block hidden size-4 text-white"
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
      <Steps.Content {index} class="max-w-[32rem] bg-neutral-800 p-5">
        {item.content}
      </Steps.Content>
    {/each}

    <Steps.Content index={items.length} class="max-w-[32rem] bg-neutral-800 p-5"
      >Done!🚀</Steps.Content
    >
  </div>

  <div class="mt-5 flex items-center gap-3">
    <Steps.PrevTrigger class="h-10 border px-3.5 disabled:cursor-not-allowed disabled:opacity-50">
      Back
    </Steps.PrevTrigger>
    <Steps.NextTrigger class="h-10 border px-3.5 disabled:cursor-not-allowed disabled:opacity-50">
      Next
    </Steps.NextTrigger>
  </div>
</Steps.Root>
