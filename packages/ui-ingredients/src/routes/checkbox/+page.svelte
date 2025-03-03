<script lang="ts">
  import {Checkbox, Field} from '$lib/index.js';
  import CheckIcon from '../check-icon.svelte';

  let checked = $state(false);

  $inspect({checked});
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
      <Checkbox.Indicator>
        <CheckIcon style="width:18px;height:18px;" />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label>I accept the terms and conditions</Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</Field.Root>

<style>
  :global([data-scope='checkbox'][data-part='root']) {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  :global([data-scope='checkbox'][data-part='control']) {
    width: 20px;
    height: 20px;
    border: 1px solid var(--border-default);
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      background 250ms,
      border-color 250ms;
  }

  :global([data-scope='checkbox'][data-part='control'][data-state='checked']) {
    color: white;
    background: oklch(0.792 0.209 151.711);
    border-color: oklch(0.792 0.209 151.711);
  }

  :global([data-scope='checkbox'][data-part='indicator']) {
    width: 18px;
    height: 18px;
  }
</style>
