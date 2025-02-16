<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import {AlertDialog, Portal} from 'ui-ingredients';
</script>

<AlertDialog.Root lazyMount>
  <AlertDialog.Trigger>
    {#snippet asChild(attrs)}
      <Button variant="outline" class="mx-auto w-auto" {...attrs}>
        Open alert dialog
      </Button>
    {/snippet}
  </AlertDialog.Trigger>

  <Portal>
    <AlertDialog.Backdrop
      class="z-overlay ui-open:animate-fade-in ui-closed:animate-fade-out fixed inset-0 bg-white/50 backdrop-blur dark:bg-black/50"
    />

    <AlertDialog.Positioner>
      <AlertDialog.Content
        class="z-modal ui-open:animate-fade-in ui-closed:animate-fade-out fixed left-1/2 top-16 w-[96vw] -translate-x-1/2 rounded border border-neutral-200 bg-white p-5 lg:w-[26rem] lg:p-8 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <AlertDialog.Title class="text-xl font-semibold">
          Title
        </AlertDialog.Title>
        <AlertDialog.Description class="text-neutral-600 dark:text-neutral-400">
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
