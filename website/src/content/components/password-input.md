---
id: password-input
title: Password Input
description: A specialized input field for entering and managing passwords, with visibility toggle functionality.
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {PasswordInput} from 'ui-ingredients';
  import {EyeOffIcon, EyeIcon} from '$lib/icons';
</script>

<PasswordInput.Root>
  {#snippet children(api)}
    <PasswordInput.Label>Label</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          {#if api.visible}
            <EyeIcon />
          {:else}
            <EyeOffIcon />
          {/if}
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  {/snippet}
</PasswordInput.Root>
```

## API Reference

<api>
