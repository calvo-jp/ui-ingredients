<script lang="ts">
  import {Accordion} from '$lib/index.js';

  let items = [
    {
      value: 'one',
      label: 'Item 1',
      content: 'Item 1 Description',
    },
    {
      value: 'two',
      label: 'Item 2',
      content: 'Item 2 Description',
    },
    {
      value: 'three',
      label: 'Item 3',
      content: 'Item 3 Description',
    },
  ];

  let value = $state([items[0].value]);
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

        <Accordion.ItemIndicator class="data-open:rotate-180 transition-all duration-200">
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
            <path d="M6 9L12 15L18 9"></path>
          </svg>
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent class="text-muted">
        {#snippet asChild(mergedProps)}
          <p {...mergedProps}>{content}</p>
        {/snippet}
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>
