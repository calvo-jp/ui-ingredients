<script lang="ts">
  import {Dialog, Portal} from '$lib/index.js';
</script>

<Dialog.Root>
  <Dialog.Trigger class="h-11 border px-3.5">Open</Dialog.Trigger>
  <Dialog.Backdrop
    class="z-overlay data-open:animate-fade-in data-closed:animate-fade-out fixed inset-0 bg-black/50 backdrop-blur-sm"
  />
  <Portal>
    <Dialog.Positioner>
      <Dialog.Content
        class="z-modal data-open:animate-fade-in data-closed:animate-fade-out fixed left-1/2 top-16 w-[26rem] -translate-x-1/2 border bg-neutral-800 p-8"
      >
        <Dialog.Title class="text-xl font-semibold">Title</Dialog.Title>
        <Dialog.Description>Description</Dialog.Description>
        <Dialog.CloseTrigger class="mt-3 h-10 w-full border">Close</Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
