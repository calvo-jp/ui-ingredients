# Accordion

A toggle component for expanding and collapsing sections of content.

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

## Props

### Root

- `ids`

  The ids of the elements

- `value`

  The `value` of the accordion items that are currently being expanded.

- `disabled`

  Whether the accordion items are disabled

- `multiple`

  Whether multple accordion items can be expanded at the same time.

- `orientation`

  The orientation of the accordion items.

- `collapsible`

  Whether an accordion item can be closed after it has been expanded.

- `onFocusChange`

  The callback fired when the focused accordion item changes.

- `onValueChange`

  The callback fired when the state of expanded/collapsed accordion items changes.

- `lazyMount`

  Should the item be mounted only when expanded?

- `keepMounted`

  Should the item stays in the DOM when it is not expanded?

### Item

- `value`

  The value of the accordion item.

- `disabled`

  Whether the accordion item is disabled.
