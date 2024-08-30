<script lang="ts">
  import {Steps} from '$lib/index.js';
  import {CheckIcon} from '@untitled-theme/icons-svelte';
  import {Button} from '../shared/index.js';
  import {cx} from '../shared/utils.js';

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
            class={cx(
              'group',
              'flex',
              'items-center',
              'justify-center',
              'rounded-full',
              'size-5',
              'border-2',
              'transition-all',
              'duration-200',
              'data-current:border-accent',
              'data-complete:border-accent',
              'data-complete:bg-accent',
            )}
          >
            <CheckIcon
              class="group-data-complete:block hidden size-4 text-white"
            />
          </Steps.Indicator>
          <span>{item.title}</span>
        </Steps.Trigger>
        {#if index + 1 < items.length}
          <Steps.Separator class="bg-light h-0.5 w-8" />
        {/if}
      </Steps.Item>
    {/each}
  </Steps.List>

  <div class="mt-5">
    {#each items as item, index}
      <Steps.Content
        {index}
        class="bg-light w-full rounded p-5 lg:max-w-[32rem]"
      >
        {item.content}
      </Steps.Content>
    {/each}

    <Steps.CompletedContent
      class="bg-light w-full rounded p-5 lg:max-w-[32rem]"
    >
      Done!🚀
    </Steps.CompletedContent>
  </div>

  <div class="mt-5 flex items-center gap-3">
    <Steps.PrevTrigger>
      {#snippet asChild(attrs)}
        <Button {...attrs}>Back</Button>
      {/snippet}
    </Steps.PrevTrigger>
    <Steps.NextTrigger>
      {#snippet asChild(attrs)}
        <Button {...attrs}>Next</Button>
      {/snippet}
    </Steps.NextTrigger>
  </div>
</Steps.Root>
