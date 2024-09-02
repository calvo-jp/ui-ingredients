<script lang="ts">
  import {Dialog, Portal} from '$lib/index.js';
  import {Button} from '../shared/index.js';

  let open = $state(false);
</script>

<Dialog.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
>
  <Dialog.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Open</Button>
    {/snippet}
  </Dialog.Trigger>

  <Dialog.Backdrop
    class="z-overlay data-open:animate-fade-in data-closed:animate-fade-out fixed inset-0 bg-black/50 backdrop-blur-sm"
  />

  <Portal>
    <Dialog.Positioner>
      <Dialog.Content
        class="z-modal data-open:animate-fade-in data-closed:animate-fade-out bg-light fixed left-1/2 top-16 w-[90vw] -translate-x-1/2 rounded border p-8 lg:w-[26rem]"
      >
        <Dialog.Title class="text-xl font-semibold">Title</Dialog.Title>
        <Dialog.Description>Description</Dialog.Description>
        <Dialog.CloseTrigger
          class="border-lighter mt-3 h-12 w-full rounded border"
        >
          Close
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
