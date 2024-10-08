# NumberInput

A component for entering numeric values.

## Usage

```svelte
<script>
  import {NumberInput} from 'ui-ingredients';
  import {ChevronDownIcon, ChevronUpIcon} from '$lib/icons';

  let value = $state('0');
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

### Using the `Field` component

```svelte
<script>
  import {NumberInput, Field} from 'ui-ingredients';
  import {ChevronDownIcon, ChevronUpIcon} from '$lib/icons';
</script>

<Field.Root>
  <NumberInput.Root>
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

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```
