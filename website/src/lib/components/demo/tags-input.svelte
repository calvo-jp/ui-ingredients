<script lang="ts">
  import {Button, Label} from '$lib/components';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {TagsInput} from 'ui-ingredients';
</script>

<TagsInput.Root class="mx-auto max-w-[20rem]">
  {#snippet children(context)}
    <TagsInput.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </TagsInput.Label>

    <div
      class="flex min-h-12 flex-wrap gap-2 rounded border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-transparent"
    >
      <TagsInput.Control class="flex flex-wrap gap-2">
        {#each context.value as value, index}
          <TagsInput.Item {index} {value} class="h-7">
            <TagsInput.ItemPreview
              class="flex h-full shrink-0 items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-1.5 text-sm leading-[0.875rem] dark:border-neutral-700 dark:bg-neutral-800/50"
            >
              <TagsInput.ItemText>{value}</TagsInput.ItemText>
              <TagsInput.ItemDeleteTrigger
                class="flex items-center justify-center"
              >
                <XCloseIcon class="size-4" />
              </TagsInput.ItemDeleteTrigger>
            </TagsInput.ItemPreview>
            <TagsInput.ItemInput class="outline-none" />
          </TagsInput.Item>
        {/each}
      </TagsInput.Control>

      <TagsInput.Input
        class="w-32 shrink-0 bg-transparent outline-none placeholder:text-neutral-500"
        autofocus
        placeholder="Placeholder"
      />
    </div>

    <TagsInput.ClearTrigger class="mt-4 w-full">
      {#snippet asChild(attrs)}
        <Button {...attrs}>Clear</Button>
      {/snippet}
    </TagsInput.ClearTrigger>

    <TagsInput.HiddenInput />
  {/snippet}
</TagsInput.Root>
