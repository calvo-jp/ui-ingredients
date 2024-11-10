# HoverCard

A component that displays additional information when hovering over an element.

## Usage

```svelte
<script lang="ts">
  import {HoverCard, Portal} from 'ui-ingredients';
</script>

<HoverCard.Root>
  <HoverCard.Trigger>Hover me</HoverCard.Trigger>
  <Portal>
    <HoverCard.Positioner>
      <HoverCard.Content>
        <HoverCard.Arrow>
          <HoverCard.ArrowTip />
        </HoverCard.Arrow>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis natus
        neque, tenetur praesentium laboriosam esse eius at maxime quam magni
        rerum animi ducimus debitis?
      </HoverCard.Content>
    </HoverCard.Positioner>
  </Portal>
</HoverCard.Root>
```
