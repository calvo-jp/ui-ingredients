<script lang="ts">
  import {Checkbox, Field} from '$lib/index.js';

  let checked = $state(false);
</script>

<Field.Root>
  <Checkbox.Root
    {checked}
    onCheckedChange={(detail) => {
      if (detail.checked === 'indeterminate') return;

      checked = detail.checked;
    }}
  >
    <Checkbox.Control>
      <Checkbox.Indicator></Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label>I accept the terms and conditions</Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</Field.Root>
