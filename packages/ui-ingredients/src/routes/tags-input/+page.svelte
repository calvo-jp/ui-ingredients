<script lang="ts">
  import {TagsInput} from '$lib/index.js';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {Button, Label} from '../shared/index.js';

  let value = $state(['Svelte']);

  $inspect(value);
</script>

<TagsInput.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  class="w-full lg:max-w-[24rem]"
>
  {#snippet children(context)}
    <TagsInput.Label>
      {#snippet asChild(mergedProps)}
        <Label {...mergedProps}>Frameworks</Label>
      {/snippet}
    </TagsInput.Label>

    <div class="flex min-h-12 flex-wrap gap-2 rounded border p-2">
      <TagsInput.Control class="flex flex-wrap gap-2">
        {#each context.value as value, index}
          <TagsInput.Item {index} {value} class="h-7">
            <TagsInput.ItemPreview
              class="bg-light/25 flex h-full shrink-0 items-center gap-1 rounded border px-1.5 text-sm leading-[0.875rem]"
            >
              <TagsInput.ItemText>{value}</TagsInput.ItemText>
              <TagsInput.ItemDeleteTrigger class="flex items-center justify-center">
                <XCloseIcon class="size-4" />
              </TagsInput.ItemDeleteTrigger>
            </TagsInput.ItemPreview>
            <TagsInput.ItemInput class="outline-none" />
          </TagsInput.Item>
        {/each}
      </TagsInput.Control>

      <TagsInput.Input
        class="w-32 shrink-0 bg-transparent outline-none"
        autofocus
        placeholder="Framework"
      />
    </div>

    <TagsInput.ClearTrigger class="bg-light/25 mt-4 w-full">
      {#snippet asChild(mergedProps)}
        <Button {...mergedProps}>Clear</Button>
      {/snippet}
    </TagsInput.ClearTrigger>

    <TagsInput.HiddenInput />
  {/snippet}
</TagsInput.Root>
