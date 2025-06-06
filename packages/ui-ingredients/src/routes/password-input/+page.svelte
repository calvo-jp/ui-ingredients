<script lang="ts">
  import {PasswordInput} from '$lib/index.js';
  import EyeIcon from '../eye-icon.svelte';
  import EyeOffIcon from '../eye-off-icon.svelte';

  let value: string[] = $state([]);

  $inspect(value);
</script>

<PasswordInput.Root>
  {#snippet children(api)}
    <PasswordInput.Label>Label</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          {#if api.visible}
            <EyeIcon style="width:20px;height:20px;" />
          {:else}
            <EyeOffIcon style="width:20px;height:20px;" />
          {/if}
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  {/snippet}
</PasswordInput.Root>

<style>
  :global([data-scope='password-input'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='password-input'][data-part='control']) {
    display: flex;
    border: 1px solid var(--border-default);
    max-width: 275px;
  }

  :global([data-scope='password-input'][data-part='input']) {
    flex-grow: 1;
    width: 100%;
    height: 40px;
    padding-left: 14px;
    outline: none;
  }

  :global([data-scope='password-input'][data-part='visibility-trigger']) {
    height: 40px;
    width: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global([data-scope='password-input'][data-part='indicator']) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
