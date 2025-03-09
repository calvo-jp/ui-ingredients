<script lang="ts">
  import {TagsInput} from '$lib/index.js';
  import XIcon from '../x-icon.svelte';

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

    <TagsInput.Control>
      <div style="display:flex;gap:6px;">
        <TagsInput.Input autofocus placeholder="Placeholder" />
        <TagsInput.ClearTrigger>
          <XIcon style="width:20px;height:20px;" />
        </TagsInput.ClearTrigger>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">
        {#each context.value as value, index}
          <TagsInput.Item {index} {value}>
            <TagsInput.ItemPreview>
              <TagsInput.ItemText>{value}</TagsInput.ItemText>
              <TagsInput.ItemDeleteTrigger>
                <XIcon style="width:14px;height:14px;" />
              </TagsInput.ItemDeleteTrigger>
            </TagsInput.ItemPreview>
            <TagsInput.ItemInput />
          </TagsInput.Item>
        {/each}
      </div>
    </TagsInput.Control>

    <TagsInput.HiddenInput />
  {/snippet}
</TagsInput.Root>

<style>
  :global([data-scope='tags-input'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='tags-input'][data-part='control']) {
    max-width: 375px;
  }

  :global([data-scope='tags-input'][data-part='input']) {
    padding: 0px 14px;
    height: 40px;
    border: 1px solid var(--border-default);
    flex-grow: 1;
  }

  :global([data-scope='tags-input'][data-part='clear-trigger']) {
    width: 40px;
    height: 40px;
    border: 1px solid var(--border-default);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global([data-scope='tags-input'][data-part='item']) {
    padding: 4px 8px;
    border: 1px solid var(--border-default);
    font-size: 14px;
  }

  :global([data-scope='tags-input'][data-part='item-preview']) {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  :global([data-scope='tags-input'][data-part='item-delete-trigger']) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
