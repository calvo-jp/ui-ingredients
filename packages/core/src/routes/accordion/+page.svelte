<script lang="ts">
  import {Accordion} from '$lib/index.js';
  import {ChevronDownIcon} from '@untitled-theme/icons-svelte';

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

  let value: string[] = $state([]);
</script>

<Accordion.Root
  {value}
  multiple
  class="w-full lg:max-w-[32rem]"
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  {#each items as { label, value, content }}
    <Accordion.Item
      {value}
      class="border-x border-b p-4 first:rounded-t first:border-t last:rounded-b"
    >
      <Accordion.ItemTrigger class="flex w-full text-left">
        <span class="grow font-semibold">{label}</span>

        <Accordion.ItemIndicator
          class="data-open:rotate-180 transition-all duration-150"
        >
          <ChevronDownIcon />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="text-muted data-open:animate-collapse-in data-closed:animate-collapse-out overflow-hidden"
      >
        {#snippet asChild(action, attrs)}
          <p use:action {...attrs}>{content}</p>
        {/snippet}
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>
