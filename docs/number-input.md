# NumberInput

A component for entering numeric values.

## Usage

```svelte
<script>
  import {NumberInput} from 'ui-ingredients';
  import {ChevronDownIcon, ChevronUpIcon} from '$lib/icons';

  let value = $state('0');

  $inspect(value);
</script>

<NumberInput.Root
  min={0}
  max={100}
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
>
  <NumberInput.Label>Label</NumberInput.Label>
  <NumberInput.Control>
    <NumberInput.Input />
    <NumberInput.IncrementTrigger>
      <ChevronUpIcon />
    </NumberInput.IncrementTrigger>
    <NumberInput.DecrementTrigger>
      <ChevronDownIcon />
    </NumberInput.DecrementTrigger>
  </NumberInput.Control>
</NumberInput.Root>
```
