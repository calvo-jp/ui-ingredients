<script lang="ts">
  import {Accordion} from '$lib/index.js';

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
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  {#each items as { label, value, content }}
    <Accordion.Item {value}>
      <Accordion.ItemTrigger>
        {label}

        <Accordion.ItemIndicator></Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        {content}
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>
