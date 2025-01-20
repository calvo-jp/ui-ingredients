---
id: tabs
title: Tabs
description: A component for organizing and switching between multiple sections of content within a single view.
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {Tabs} from 'ui-ingredients';

  let items = [
    {
      value: '1',
      label: 'Item 1',
      content: 'Item 1 Content',
    },
    {
      value: '2',
      label: 'Item 2',
      content: 'Item 2 Content',
    },
    {
      value: '3',
      label: 'Item 3',
      content: 'Item 3 Content',
    },
  ];
</script>

<Tabs.Root>
  <Tabs.List>
    {#each items as { value, label }}
      <Tabs.Trigger {value}>
        {label}
      </Tabs.Trigger>
    {/each}
  </Tabs.List>

  {#each items as { value, content }}
    <Tabs.Content {value}>
      {content}
    </Tabs.Content>
  {/each}
</Tabs.Root>
```

## API Reference

<api>

## Accessibility

### Keyboard Support

<keyboard-support>
