<script lang="ts">
  import {Toast, Toaster, createToaster} from '$lib/index.js';
  import {cx} from '../shared/utils.js';

  let toaster = createToaster({
    placement: 'bottom-end',
    overlap: true,
  });

  function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
</script>

<button
  class="h-11 border px-3.5"
  onclick={() => {
    toaster.create({
      title: `Hello ${randInt(1, 100)}`,
      description: 'This is a toast message',
    });
  }}
>
  Create
</button>

<Toaster {toaster}>
  {#snippet children()}
    <Toast.Root
      class={cx(
        'p-4',
        'border',
        'bg-neutral-800',
        'duration-300',
        'transition-all',
        'min-w-[20rem]',
        'h-[var(--height)]',
        'z-[var(--z-index)]',
        '[translate:var(--x)_var(--y)_0]',
        'opacity-[var(--opacity)]',
        'scale-[var(--scale)]',
      )}
    >
      <Toast.Title class="font-medium" />
      <Toast.Description class="text-sm text-neutral-500" />
      <Toast.CloseTrigger class="mt-3 block h-11 w-full border">Close</Toast.CloseTrigger>
    </Toast.Root>
  {/snippet}
</Toaster>
