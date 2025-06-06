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

### Usage with Field component

```svelte
<script>
  import {PasswordInput, Field} from 'ui-ingredients';
  import {EyeOffIcon, EyeIcon} from '$lib/icons';
</script>

<Field.Root>
  <PasswordInput.Root>
    {#snippet children(api)}
      <PasswordInput.Label>
        {#snippet asChild(attrs)}
          <Label {...attrs}>Label</Label>
        {/snippet}
      </PasswordInput.Label>
      <PasswordInput.Control class="flex">
        <PasswordInput.Input class="rounded-r-none border-r-0 outline-none">
          {#snippet asChild(attrs)}
            <Input {...attrs} />
          {/snippet}
        </PasswordInput.Input>
        <PasswordInput.VisibilityTrigger class="rounded-l-none outline-none">
          {#snippet asChild(attrs)}
            <Button {...attrs} variant="outline">
              <PasswordInput.Indicator>
                {#if api.visible}
                  <EyeIcon />
                {:else}
                  <EyeOffIcon />
                {/if}
              </PasswordInput.Indicator>
            </Button>
          {/snippet}
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    {/snippet}
  </PasswordInput.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```

## API Reference

<api>
