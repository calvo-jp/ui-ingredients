<script lang="ts">
  import {Button} from '$lib/ui';
  import {AlertDialog, Portal} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
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
        class="fixed inset-0 z-overlay bg-white/50 backdrop-blur ui-open:animate-fade-in ui-closed:animate-fade-out dark:bg-black/50"
      />

      <AlertDialog.Positioner>
        <AlertDialog.Content
          class="fixed left-1/2 top-16 z-modal w-[96vw] -translate-x-1/2 rounded border bg-white p-5 ui-open:animate-fade-in ui-closed:animate-fade-out dark:border-neutral-800 dark:bg-neutral-900 lg:w-[26rem] lg:p-8"
        >
          <AlertDialog.Title class="text-xl font-semibold">
            Title
          </AlertDialog.Title>
          <AlertDialog.Description
            class="text-neutral-600 dark:text-neutral-400"
          >
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
</Container>
