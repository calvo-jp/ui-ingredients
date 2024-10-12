<script lang="ts">
  import {TagsInput} from '$lib/index.js';
</script>

<TagsInput.Root value={['Hello']}>
  {#snippet children(context)}
    <TagsInput.Label>Label</TagsInput.Label>
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
    <TagsInput.Input />
    <TagsInput.ClearTrigger>Clear</TagsInput.ClearTrigger>
    <TagsInput.HiddenInput />
  {/snippet}
</TagsInput.Root>
