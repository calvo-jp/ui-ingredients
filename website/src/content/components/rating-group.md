---
id: rating-group
title: Rating Group
description: A component for selecting a rating value, typically represented by stars or other symbols.
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {RatingGroup} from 'ui-ingredients';
  import {StarIcon} from '$lib/icons';
</script>

<RatingGroup.Root>
  <RatingGroup.Label>Label</RatingGroup.Label>
  <RatingGroup.HiddenInput />

  {#each context.items as index}
    <RatingGroup.Item {index}>
      {#snippet children(state)}
        <StarIcon
          class={state.highlighted ? 'text-yellow-500' : 'text-gray-500'}
        />
      {/snippet}
    </RatingGroup.Item>
  {/each}
</RatingGroup.Root>
```

### Usage with Field component

```svelte
<script>
  import {RatingGroup, Field} from 'ui-ingredients';
  import {StarIcon} from '$lib/icons';
</script>

<Field.Root>
  <RatingGroup.Root>
    <RatingGroup.Label>Label</RatingGroup.Label>
    <RatingGroup.HiddenInput />

    {#each context.items as index}
      <RatingGroup.Item {index}>
        {#snippet children(state)}
          <StarIcon
            class={state.highlighted ? 'text-yellow-500' : 'text-gray-500'}
          />
        {/snippet}
      </RatingGroup.Item>
    {/each}
  </RatingGroup.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```

## API Reference

<api>

## Accessibility

### Keyboard Support

<keyboard-support>
