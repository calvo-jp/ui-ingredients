<script lang="ts">
  import {ToggleGroup} from '$lib/index.js';

  let value: string[] = $state([]);

  $inspect({value});
</script>

<ToggleGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  multiple
>
  <ToggleGroup.Item value="1">A</ToggleGroup.Item>
  <ToggleGroup.Item value="2">B</ToggleGroup.Item>
  <ToggleGroup.Item value="3">C</ToggleGroup.Item>
</ToggleGroup.Root>

<style>
  :global([data-scope='toggle-group'][data-part='root']) {
    display: flex;
    gap: 6px;
  }

  :global([data-scope='toggle-group'][data-part='item']) {
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    color: oklch(0.439 0 0);
    background: oklch(0.97 0 0);
    font-weight: 600;
    cursor: pointer;
    transition: all 250ms;
  }

  :global([data-scope='toggle-group'][data-part='item'][data-state='on']) {
    background: oklch(0.746 0.16 232.661);
    color: white;
  }
</style>
