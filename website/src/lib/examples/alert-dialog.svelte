<script lang="ts">
  import {Button} from '$lib/ui';
  import {twMerge} from 'tailwind-merge';
  import {AlertDialog, Portal} from 'ui-ingredients';
</script>

<AlertDialog.Root lazyMount>
  <AlertDialog.Trigger>
    {#snippet asChild(attrs)}
      <Button class="mx-auto w-auto" {...attrs}>Open alert dialog</Button>
    {/snippet}
  </AlertDialog.Trigger>

  <Portal>
    <AlertDialog.Backdrop
      class={twMerge(
        'z-overlay',
        'fixed',
        'inset-0',
        'bg-black/75',
        'backdrop-blur-sm',
        'data-open:animate-fade-in',
        'data-closed:animate-fade-out',
      )}
    />

    <AlertDialog.Positioner>
      <AlertDialog.Content
        class={twMerge(
          'z-modal',
          'bg-neutral-900',
          'fixed',
          'left-1/2',
          'top-16',
          'w-[96vw]',
          '-translate-x-1/2',
          'rounded',
          'border',
          'border-neutral-800',
          'p-5',
          'data-open:animate-fade-in',
          'data-closed:animate-fade-out',
          'lg:p-8',
          'lg:w-[26rem]',
        )}
      >
        <AlertDialog.Title class="text-xl font-semibold">
          Title
        </AlertDialog.Title>
        <AlertDialog.Description class="text-neutral-400">
          Description
        </AlertDialog.Description>
        <AlertDialog.CloseTrigger>
          {#snippet asChild(attrs)}
            <Button class="mt-3" fullWidth variant="outline" {...attrs}>
              Close
            </Button>
          {/snippet}
        </AlertDialog.CloseTrigger>
      </AlertDialog.Content>
    </AlertDialog.Positioner>
  </Portal>
</AlertDialog.Root>
