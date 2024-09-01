# PinInput

## Usage

```svelte
<script>
  import {PinInput} from 'ui-ingredients';
  import {Input, Label} from '../shared/index.js';

  /** @type {string[]} */
  let value = $state([]);

  $inspect(value);
</script>

<PinInput.Root
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
>
  <PinInput.Label>Label</PinInput.Label>
  <PinInput.HiddenInput />
  <div>
    {#each Array.from({length: 6}) as _, index}
      <PinInput.Input {index} />
    {/each}
  </div>
</PinInput.Root>
```
