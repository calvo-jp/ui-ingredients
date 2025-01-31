---
id: tags-input
title: Tags Input
description: A component for adding and managing a list of tags or keywords, often with autocomplete and removal features.
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {TagsInput} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';
</script>

<TagsInput.Root>
  {#snippet children(context)}
    <TagsInput.Label>Label</TagsInput.Label>

    <TagsInput.Control>
      {#each context.value as value, index}
        <TagsInput.Item {index} {value}>
          <TagsInput.ItemPreview>
            <TagsInput.ItemText>{value}</TagsInput.ItemText>
            <TagsInput.ItemDeleteTrigger>
              <XCloseIcon />
            </TagsInput.ItemDeleteTrigger>
          </TagsInput.ItemPreview>
          <TagsInput.ItemInput />
        </TagsInput.Item>
      {/each}
    </TagsInput.Control>
    <TagsInput.Input />
    <TagsInput.ClearTrigger>Clear</TagsInput.ClearTrigger>
    <TagsInput.HiddenInput />
  {/snippet}
</TagsInput.Root>
```

### Usage with Field component

```svelte
<script>
  import {TagsInput, Field} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';
</script>

<Field.Root>
  <TagsInput.Root>
    {#snippet children(context)}
      <TagsInput.Label>Label</TagsInput.Label>

      <TagsInput.Control>
        {#each context.value as value, index}
          <TagsInput.Item {index} {value}>
            <TagsInput.ItemPreview>
              <TagsInput.ItemText>{value}</TagsInput.ItemText>
              <TagsInput.ItemDeleteTrigger>
                <XCloseIcon />
              </TagsInput.ItemDeleteTrigger>
            </TagsInput.ItemPreview>
            <TagsInput.ItemInput />
          </TagsInput.Item>
        {/each}
      </TagsInput.Control>
      <TagsInput.Input />
      <TagsInput.ClearTrigger>Clear</TagsInput.ClearTrigger>
      <TagsInput.HiddenInput />
    {/snippet}
  </TagsInput.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```

## API Reference

<api>

## Accessibility

### Keyboard Support

<keyboard-support>
