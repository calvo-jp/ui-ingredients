# RatingGroup

A component for selecting a rating value, typically represented by stars or other symbols.

## Usage

```svelte
<script>
  import {RatingGroup} from 'ui-ingredients';
  import {StarIcon} from '$lib/icons';

  let value = $state(1);

  $inspect(value);
</script>

<RatingGroup.Root
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
>
  <RatingGroup.Label>Label</RatingGroup.Label>

  <div>
    {#each context.items as index}
      <RatingGroup.Item {index}>
        {#snippet children(state)}
          <StarIcon
            class={state.highlighted ? 'text-yellow-500' : 'text-gray-500'}
          />
        {/snippet}
      </RatingGroup.Item>
    {/each}
  </div>
</RatingGroup.Root>
```
