---
id: menu
title: Menu
description: A component for navigating through a list of options or actions
---

<demo>

## Anatomy

<anatomy>

## Usage

### Basic Menu

```svelte
<script>
  import {Menu} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon} from '$lib/icons';

  let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
</script>

<Menu.Root>
  <Menu.Trigger>
    Trigger
    <Menu.Indicator>
      <ChevronDownIcon />
    </Menu.Indicator>
  </Menu.Trigger>
  <Menu.Positioner>
    <Menu.Content>
      {#each items as item}
        <Menu.Item value={item}>
          {item.value}
        </Menu.Item>
      {/each}
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
```

### Radio/Checkbox Menu

```svelte
<script>
  import {Menu} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon} from '$lib/icons';

  let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  /** @type {string[]} */
  let selected = $state([]);
</script>

<Menu.Root>
  <Menu.Trigger>
    Trigger
    <Menu.Indicator>
      <ChevronDownIcon />
    </Menu.Indicator>
  </Menu.Trigger>
  <Menu.Positioner>
    <Menu.Content>
      {#each items as item (item)}
        <Menu.OptionItem
          type="checkbox"
          value={item}
          valueText={item}
          closeOnSelect={false}
          checked={selected.includes(item)}
          onCheckedChange={function (checked) {
            selected = checked
              ? [...selected, item]
              : [...selected].filter(function (value) {
                  return value !== item;
                });
          }}
        >
          <Menu.OptionItemIndicator>
            <CheckIcon />
          </Menu.OptionItemIndicator>
          <Menu.OptionItemText />
        </Menu.OptionItem>
      {/each}
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
```

### Nested Menu

```svelte
<script>
  import {Menu} from 'ui-ingredients';
  import {ChevronRightIcon} from '$lib/icons';
</script>

<Menu.Root>
  <Menu.Trigger>
    Trigger
    <Menu.Indicator>
      <ChevronDownIcon />
    </Menu.Indicator>
  </Menu.Trigger>
  <Menu.Positioner>
    <Menu.Content>
      <Menu.Item value="1">Item 1</Menu.Item>
      <Menu.Item value="2">Item 2</Menu.Item>
      <Menu.Root
        positioning={{
          placement: 'right',
        }}
      >
        <Menu.TriggerItem>
          Nested Trigger
          <ChevronRightIcon />
        </Menu.TriggerItem>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="3">Item 3</Menu.Item>
            <Menu.Item value="4">Item 4</Menu.Item>
            <Menu.Item value="5">Item 5</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
```

### Context Menu

```svelte
<script>
  import {Menu} from 'ui-ingredients';

  let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
</script>

<Menu.Root>
  <Menu.ContextTrigger>Trigger</Menu.ContextTrigger>
  <Menu.Positioner>
    <Menu.Content>
      {#each items as item}
        <Menu.Item value={item}>
          {item}
        </Menu.Item>
      {/each}
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
```

## API Reference

<api>

## Accessibility

### Keyboard Support

<keyboard-support>
