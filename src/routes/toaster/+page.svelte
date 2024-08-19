<script lang="ts">
  import {Toast, Toaster, createToaster} from '$lib/index.js';

  let toaster = createToaster({
    placement: 'bottom-end',
    overlap: true,
  });

  function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function cx(...classes: (string | null | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
  }
</script>

<button
  class="h-11 border px-3.5"
  onclick={() => {
    toaster.create({
      title: `Hello ${randInt(1, 100)}`,
      description: 'This is a toast message',
      duration: 100000000,
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
        'bg-white',
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
      <Toast.Description class="text-sm text-gray-500" />
      <Toast.CloseTrigger class="border h-11 block mt-3 w-full">Close</Toast.CloseTrigger>
    </Toast.Root>
  {/snippet}
</Toaster>
