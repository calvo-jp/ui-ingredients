<script lang="ts">
  import {Clipboard} from '$lib/index.js';
  import CheckIcon from '../check-icon.svelte';
  import CopyIcon from '../copy-icon.svelte';

  let value = $state('UI Ingredients');

  $inspect({value});
</script>

<Clipboard.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <Clipboard.Label>Token</Clipboard.Label>
  <Clipboard.Control>
    <Clipboard.Input />
    <Clipboard.Trigger>
      <Clipboard.Indicator>
        {#snippet children(ctx)}
          {#if ctx.copied}
            <CheckIcon
              style="width:20px;height:20px;color:var(--color-success);"
            />
          {:else}
            <CopyIcon style="width:20px;height:20px;" />
          {/if}
        {/snippet}
      </Clipboard.Indicator>
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>

<style>
  :global([data-scope='clipboard'][data-part='root']) {
    max-width: 325px;
  }

  :global([data-scope='clipboard'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='clipboard'][data-part='control']) {
    display: flex;
    gap: 8px;
  }

  :global([data-scope='clipboard'][data-part='input']) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
    flex-grow: 1;
  }

  :global([data-scope='clipboard'][data-part='indicator']) {
    width: 20px;
    height: 20px;
  }

  :global([data-scope='clipboard'][data-part='trigger']) {
    height: 40px;
    width: 40px;
    border: 1px solid var(--border-default);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
