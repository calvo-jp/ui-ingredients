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
  <PasswordInput.Control>
    <PasswordInput.Input />
    <PasswordInput.VisibilityTrigger>
      <PasswordInput.Indicator>
        <EyeOffIcon />
      </PasswordInput.Indicator>
    </PasswordInput.VisibilityTrigger>
  </PasswordInput.Control>
</PasswordInput.Root>
```

## API Reference

<api>
