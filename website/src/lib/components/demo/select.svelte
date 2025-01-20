<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import IconButton from '$lib/components/ui/icon-button.svelte';
  import Label from '$lib/components/ui/label.svelte';
  import {
    CheckIcon,
    ChevronDownIcon,
    XCloseIcon,
  } from '@untitled-theme/icons-svelte';
  import {Portal, Select} from 'ui-ingredients';

  let collection = Select.collection({
    items: [
      {value: '1', label: 'Option 1'},
      {value: '2', label: 'Option 2'},
      {value: '3', label: 'Option 3'},
      {value: '4', label: 'Option 4', disabled: true},
      {value: '5', label: 'Option 5'},
    ],
  });
</script>

<Select.Root
  {collection}
  positioning={{
    sameWidth: true,
  }}
  lazyMount
  keepMounted={false}
  deselectable
>
  <Select.Control class="mx-auto max-w-[20rem]">
    <Select.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </Select.Label>
    <div class="flex gap-2">
      <Select.Trigger
        class="grow text-left font-normal ui-placeholder-shown:text-neutral-400"
      >
        {#snippet asChild(attrs)}
          <Button variant="outline" {...attrs}>
            <Select.ValueText placeholder="Please Select" class="grow" />
            <Select.Indicator class="group">
              <ChevronDownIcon
                class="transition-transform duration-150 ui-group-open:rotate-180"
              />
            </Select.Indicator>
          </Button>
        {/snippet}
      </Select.Trigger>
      <Select.ClearTrigger>
        {#snippet asChild(attrs)}
          <IconButton {...attrs}>
            <XCloseIcon />
          </IconButton>
        {/snippet}
      </Select.ClearTrigger>
    </div>
  </Select.Control>

  <Portal>
    <Select.Positioner>
      <Select.Content
        class="rounded border border-neutral-200 bg-white p-2 ui-open:animate-fade-in ui-closed:animate-fade-out dark:border-neutral-800 dark:bg-neutral-900"
      >
        {#each collection.items as item}
          <Select.Item
            {item}
            class="flex cursor-default items-center rounded px-2.5 py-1 ui-disabled:cursor-not-allowed ui-disabled:text-neutral-400 ui-highlighted:bg-neutral-50 dark:ui-disabled:text-neutral-500 dark:ui-highlighted:bg-neutral-800/50"
          >
            <Select.ItemText class="grow" />
            <Select.ItemIndicator>
              <CheckIcon class="size-5 text-green-600 dark:text-green-500" />
            </Select.ItemIndicator>
          </Select.Item>
        {/each}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>
