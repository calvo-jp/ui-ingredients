# RadioGroup

## Usage

```svelte
<script>
  import {RadioGroup} from 'ui-ingredients';
  import {CheckIcon} from '$lib/icons';

  let items = [
    {
      value: '1',
      label: 'Item 1',
    },
    {
      value: '2',
      label: 'Item 2',
    },
    {
      value: '3',
      label: 'Item 3',
    },
  ];

  let value = $state('1');

  $inspect(value);
</script>

<RadioGroup.Root
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
>
  <RadioGroup.Label>Label</RadioGroup.Label>

  <div>
    {#each items as { value, label }}
      <RadioGroup.Item {value}>
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemControl>
          <CheckIcon />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
      </RadioGroup.Item>
    {/each}
  </div>
</RadioGroup.Root>
```