<script lang="ts">
  import {TagsInput} from '$lib/index.js';

  let value = $state(['Hello']);

  $inspect({value});
</script>

<TagsInput.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  {#snippet children(context)}
    <TagsInput.Label>Label</TagsInput.Label>

    <div>
      <TagsInput.Control>
        {#each context.value as value, index}
          <TagsInput.Item {index} {value}>
            <TagsInput.ItemPreview>
              <TagsInput.ItemText>{value}</TagsInput.ItemText>
              <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
            </TagsInput.ItemPreview>
            <TagsInput.ItemInput />
          </TagsInput.Item>
        {/each}
      </TagsInput.Control>

      <TagsInput.Input autofocus placeholder="Placeholder" />
    </div>

    <TagsInput.ClearTrigger>Clear</TagsInput.ClearTrigger>
    <TagsInput.HiddenInput />
  {/snippet}
</TagsInput.Root>
