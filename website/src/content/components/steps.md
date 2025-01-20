---
id: steps
title: Steps
description: A component for displaying a sequence of steps or stages in a process, often used for navigation or progress tracking.
---

## Anatomy

## Usage

```svelte
<script>
  import {Steps} from 'ui-ingredients';
  import {CheckIcon} from '$lib/icons';

  let items = [
    {
      title: 'Step 1',
      content: 'Step 1 Content',
    },
    {
      title: 'Step 2',
      content: 'Step 2 Content',
    },
    {
      title: 'Step 3',
      content: 'Step 3 Content',
    },
  ];
</script>

<Steps.Root count={items.length}>
  <Steps.List>
    {#each items as item, index}
      <Steps.Item {index}>
        <Steps.Trigger>
          {item.title}

          <Steps.Indicator>
            <CheckIcon />
          </Steps.Indicator>
        </Steps.Trigger>

        <Steps.Separator />
      </Steps.Item>
    {/each}
  </Steps.List>

  {#each items as item, index}
    <Steps.Content {index}>
      {item.content}
    </Steps.Content>
  {/each}

  <Steps.CompletedContent>Done!🚀</Steps.CompletedContent>

  <Steps.PrevTrigger>Back</Steps.PrevTrigger>
  <Steps.NextTrigger>Next</Steps.NextTrigger>
</Steps.Root>
```

## API Reference

## Accessibility

### Keyboard Support
