# TagsInput

## Usage

```svelte
<script>
  import {TagsInput} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';

  /** @type {string[]} */
  let value = $state([]);

  $inspect(value);
</script>

<TagsInput.Root
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
>
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
