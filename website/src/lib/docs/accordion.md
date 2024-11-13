---
name: Accordion
description: A toggle component for expanding and collapsing sections of content.
---

## Usage

```svelte
<script lang="ts">
  import {Accordion} from 'ui-ingredients';
  import {ChevronDownIcon} from '$lib/icons';

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

  let value: string[] = $state([]);
</script>

<Accordion.Root
  {value}
  multiple
  onValueChange={function (detail) {
    value = detail.value;
  }}
>
  {#each items as { value, label, content }}
    <Accordion.Item {value}>
      <Accordion.ItemTrigger>
        {label}

        <Accordion.ItemIndicator>
          <ChevronDownIcon />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>

      <Accordion.ItemContent>
        {content}
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>
```