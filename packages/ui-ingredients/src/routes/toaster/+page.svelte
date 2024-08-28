<script lang="ts">
  import {createToaster, Toast, Toaster} from '$lib/index.js';
  import {Button, cx} from '../shared/index.js';

  function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const toaster = createToaster({
    placement: 'bottom-end',
    overlap: true,
  });
</script>

<Button
  onclick={() => {
    toaster.create({
      title: `Hello ${randInt(1, 100)}`,
      description: 'This is a toast message',
    });
  }}
>
  Create
</Button>

<Toaster {toaster}>
  {#snippet children()}
    <Toast.Root
      class={cx(
        'p-4',
        'border',
        'rounded',
        'bg-light',
        'duration-300',
        'transition-all',
        'min-w-[90vw]',
        'lg:min-w-[20rem]',
        'h-[var(--height)]',
        'z-[var(--z-index)]',
        '[translate:var(--x)_var(--y)_0]',
        'opacity-[var(--opacity)]',
        'scale-[var(--scale)]',
      )}
    >
      <Toast.Title class="font-medium" />
      <Toast.Description class="text-muted text-sm" />
      <Toast.CloseTrigger class="border-lighter mt-3 block h-12 w-full rounded border">
        Close
      </Toast.CloseTrigger>
    </Toast.Root>
  {/snippet}
</Toaster>
