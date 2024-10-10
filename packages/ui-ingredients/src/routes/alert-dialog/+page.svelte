<script lang="ts">
  import {AlertDialog, Portal} from '$lib/index.js';
  import {twMerge} from 'tailwind-merge';
  import {Button} from '../shared/index.js';

  let open = $state(false);
</script>

<AlertDialog.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
  lazyMount
>
  <AlertDialog.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Click me</Button>
    {/snippet}
  </AlertDialog.Trigger>

  <AlertDialog.Backdrop
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
    <AlertDialog.Positioner>
      <AlertDialog.Content
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
        <AlertDialog.Title class="text-xl font-semibold"
          >Title</AlertDialog.Title
        >
        <AlertDialog.Description>Description</AlertDialog.Description>
        <AlertDialog.CloseTrigger
          class="border-lighter mt-3 h-12 w-full rounded border"
        >
          Close
        </AlertDialog.CloseTrigger>
      </AlertDialog.Content>
    </AlertDialog.Positioner>
  </Portal>
</AlertDialog.Root>
