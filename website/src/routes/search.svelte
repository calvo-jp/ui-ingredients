<script lang="ts">
  import {CommandIcon, SearchLgIcon} from '@untitled-theme/icons-svelte';
  import {Dialog, Portal} from 'ui-ingredients';

  let open = $state(false);
</script>

<Dialog.Root
  {open}
  openControlled
  onOpenChange={(detail) => {
    open = detail.open;
  }}
>
  <Dialog.Trigger
    class="flex h-10 w-full items-center gap-1 rounded border border-neutral-200 px-3 text-left text-sm text-neutral-400 dark:border-neutral-800"
  >
    <SearchLgIcon class="size-4" />
    <span class="grow font-normal">Search...</span>
    <span class="flex items-center font-mono">
      <CommandIcon class="size-4" />
      <span>K</span>
    </span>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop
      class="fixed left-0 top-0 z-overlay size-full bg-white/50 ui-open:animate-fade-in ui-closed:animate-fade-out dark:bg-black/50"
    />
    <Dialog.Positioner>
      <Dialog.Content></Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
