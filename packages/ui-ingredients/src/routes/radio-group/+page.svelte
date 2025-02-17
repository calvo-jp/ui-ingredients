<script lang="ts">
  import {RadioGroup} from '$lib/index.js';

  let items = [
    {value: '1', label: 'Item 1'},
    {value: '2', label: 'Item 2'},
    {value: '3', label: 'Item 3'},
  ];

  let value = $state('1');
</script>

<RadioGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <RadioGroup.Label>Choose one</RadioGroup.Label>

  {#each items as { value, label }}
    <RadioGroup.Item {value}>
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl></RadioGroup.ItemControl>
      <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
    </RadioGroup.Item>
  {/each}
</RadioGroup.Root>
