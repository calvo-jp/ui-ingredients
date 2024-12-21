<script lang="ts">
  import {Button} from '$lib/ui';
  import {CheckIcon} from '@untitled-theme/icons-svelte';
  import {Steps} from 'ui-ingredients';
  import Container from './container.svelte';

  const items = [
    {title: 'Step 1', content: 'Step 1 Content'},
    {title: 'Step 2', content: 'Step 2 Content'},
    {title: 'Step 3', content: 'Step 3 Content'},
  ];
</script>

<Container>
  <Steps.Root count={items.length}>
    <Steps.List class="flex w-full gap-3">
      {#each items as item, index}
        <Steps.Item {index} class="flex grow items-center gap-3 last:grow-0">
          <Steps.Trigger class="flex items-center gap-3">
            <Steps.Indicator
              class="group flex size-5 items-center justify-center rounded-full border-2 border-neutral-300 transition-all duration-150 ui-current:border-indigo-600 ui-complete:border-indigo-600 ui-complete:bg-indigo-600 dark:border-neutral-800 dark:ui-current:border-indigo-500 dark:ui-complete:border-indigo-500 dark:ui-complete:bg-indigo-500"
            >
              <CheckIcon
                class="hidden size-4 text-white ui-group-complete:block"
              />
            </Steps.Indicator>
            <span>{item.title}</span>
          </Steps.Trigger>

          {#if index + 1 < items.length}
            <Steps.Separator
              class="h-0.5 grow bg-neutral-200 dark:bg-neutral-800"
            />
          {/if}
        </Steps.Item>
      {/each}
    </Steps.List>

    <div class="mt-5 text-neutral-600 dark:text-neutral-400">
      {#each items as item, index}
        <Steps.Content {index}>
          {item.content}
        </Steps.Content>
      {/each}

      <Steps.CompletedContent>Done!🚀</Steps.CompletedContent>
    </div>

    <div class="mt-5 flex items-center gap-3">
      <Steps.PrevTrigger>
        {#snippet asChild(attrs)}
          <Button variant="outline" size="sm" {...attrs}>Back</Button>
        {/snippet}
      </Steps.PrevTrigger>
      <Steps.NextTrigger>
        {#snippet asChild(attrs)}
          <Button variant="outline" size="sm" {...attrs}>Next</Button>
        {/snippet}
      </Steps.NextTrigger>
    </div>
  </Steps.Root>
</Container>
