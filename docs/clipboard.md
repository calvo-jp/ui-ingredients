# Clipboard

## Usage

```svelte
<script>
  import {Clipboard} from 'ui-ingredients';
  import {CheckIcon, Copy01Icon} from '$lib/icons';
</script>

<Clipboard.Root value="pass your value">
  <Clipboard.Label>Label</Clipboard.Label>

  <Clipboard.Control>
    <Clipboard.Input />

    <Clipboard.Trigger>
      <Clipboard.Indicator>
        <Copy01Icon />
      </Clipboard.Indicator>
      <Clipboard.Indicator copied>
        <CheckIcon />
      </Clipboard.Indicator>
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
```
