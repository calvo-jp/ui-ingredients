<script lang="ts">
  import {Dialog, Portal} from '$lib/index.js';
  import {twMerge} from 'tailwind-merge';
  import {Button} from '../shared/index.js';

  let open = $state(false);
</script>

<Dialog.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
  lazyMount
>
  <Dialog.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Open</Button>
    {/snippet}
  </Dialog.Trigger>

  <Dialog.Backdrop
    class={twMerge(
      'z-overlay',
      'fixed',
      'inset-0',
      'bg-black/50',
      'backdrop-blur-sm',
      'data-open:animate-fade-in',
      'data-closed:animate-fade-out',
    )}
  />

  <Portal data-id="dialog">
    <Dialog.Positioner>
      <Dialog.Content
        class={twMerge(
          'z-modal',
          'bg-light',
          'fixed',
          'left-1/2',
          'top-16',
          'w-[90vw]',
          '-translate-x-1/2',
          'rounded',
          'border',
          'p-8 lg:w-[26rem]',
          'data-open:animate-fade-in',
          'data-closed:animate-fade-out',
        )}
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
