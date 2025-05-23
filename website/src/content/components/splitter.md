---
id: splitter
title: Splitter
description: A component for resizing and adjusting the size of adjacent panes or sections.
beta: true
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {Splitter} from 'ui-ingredients';
</script>

<Splitter.Root
  panels={[
    {
      id: 'a',
      minSize: 25,
    },
    {
      id: 'b',
      minSize: 25,
    },
  ]}
  defaultSize={[50, 50]}
>
  <Splitter.Panel id="a">A</Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" />
  <Splitter.Panel id="b">B</Splitter.Panel>
</Splitter.Root>
```

## API Reference

<api>

## Accessibility

### Keyboard Support

<keyboard-support>
