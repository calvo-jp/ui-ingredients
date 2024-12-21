<script lang="ts">
  import {ChevronDownIcon} from '@untitled-theme/icons-svelte';
  import {Accordion} from 'ui-ingredients';
  import Container from './container.svelte';

  let items = [
    {
      value: '1',
      label: 'Item 1',
      content: 'Item 1 Description',
    },
    {
      value: '2',
      label: 'Item 2',
      content: 'Item 2 Description',
    },
    {
      value: '3',
      label: 'Item 3',
      content: 'Item 3 Description',
    },
  ];
</script>

<Container>
  <Accordion.Root multiple class="mx-auto max-w-[28rem]">
    {#each items as { label, value, content }}
      <Accordion.Item
        {value}
        class="border-x border-b border-neutral-200 bg-white p-4 first:rounded-t first:border-t last:rounded-b dark:border-neutral-700 dark:bg-neutral-700/25"
      >
        <Accordion.ItemTrigger class="flex w-full items-center text-left">
          <span class="grow font-semibold">{label}</span>

          <Accordion.ItemIndicator
            class="group transition-all duration-150 ui-open:rotate-180"
          >
            <ChevronDownIcon
              class="size-5 text-neutral-400 transition-colors duration-150 ui-group-open:text-neutral-500 dark:text-neutral-500 dark:ui-group-open:text-neutral-400"
            />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent
          class="overflow-hidden text-neutral-500 [--height:1em] ui-open:animate-collapse-in ui-closed:animate-collapse-out dark:text-neutral-400"
        >
          {#snippet asChild(action, attrs)}
            <p use:action {...attrs}>{content}</p>
          {/snippet}
        </Accordion.ItemContent>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</Container>
