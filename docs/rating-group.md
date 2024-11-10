# RatingGroup

A component for selecting a rating value, typically represented by stars or other symbols.

## Usage

```svelte
<script lang="ts">
  import {RatingGroup} from 'ui-ingredients';
  import {StarIcon} from '$lib/icons';

  let value = $state(1);
</script>

<RatingGroup.Root
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
>
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

### Using the `Field` component

```svelte
<script lang="ts">
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
