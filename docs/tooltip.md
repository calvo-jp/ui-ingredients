# Tooltip

## Usage

```svelte
<script>
  import {Portal, Tooltip} from 'ui-ingredients';
</script>

<Tooltip.Root>
  <Tooltip.Trigger>Trigger</Tooltip.Trigger>

  <Portal>
    <Tooltip.Positioner>
      <Tooltip.Content>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>

        Content
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
```
