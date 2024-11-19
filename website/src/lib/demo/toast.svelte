<script lang="ts">
  import {Button} from '$lib/ui';
  import {createToaster, Toast, Toaster} from 'ui-ingredients';
  import Container from './container.svelte';

  let toaster = createToaster({
    duration: 5000,
    placement: 'bottom-end',
    overlap: true,
  });
</script>

<Container>
  <Button
    variant="outline"
    onclick={() => {
      toaster.create({
        title: 'Success!',
        description: 'This is a toast message',
      });
    }}
    class="mx-auto w-auto"
  >
    Create toast
  </Button>
</Container>

<Toaster {toaster}>
  <Toast.Root
    class="z-[var(--z-index)] h-[var(--height)] min-w-[90vw] scale-[var(--scale)] rounded border border-neutral-200 bg-white p-4 opacity-[var(--opacity)] transition-all duration-300 [translate:var(--x)_var(--y)_0] dark:border-neutral-800 dark:bg-neutral-900 lg:min-w-[20rem]"
  >
    <Toast.Title class="font-medium" />
    <Toast.Description class="text-sm text-neutral-600 dark:text-neutral-400" />
    <Toast.CloseTrigger class="mt-3">
      {#snippet asChild(attrs)}
        <Button {...attrs} fullWidth variant="outline">Close</Button>
      {/snippet}
    </Toast.CloseTrigger>
  </Toast.Root>
</Toaster>
