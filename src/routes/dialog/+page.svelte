<script lang="ts">
  import {Dialog, Portal} from '$lib/index.js';

  let open = $state(false);

  $inspect(open);
</script>

<Dialog.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
>
  <Dialog.Trigger class="border px-3.5 h-11">Open</Dialog.Trigger>
  <Dialog.Backdrop
    class="z-overlay bg-black/50 backdrop-blur-sm fixed inset-0 data-open:animate-fade-in data-closed:animate-fade-out"
  />
  <Portal>
    <Dialog.Positioner>
      <Dialog.Content
        class="z-modal fixed top-16 left-1/2 -translate-x-1/2 border bg-neutral-800 w-[26rem] p-8 data-open:animate-fade-in data-closed:animate-fade-out"
      >
        <Dialog.Title class="text-xl font-semibold">Title</Dialog.Title>
        <Dialog.Description>Description</Dialog.Description>
        <Dialog.CloseTrigger class="mt-3 border w-full h-10">Close</Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
