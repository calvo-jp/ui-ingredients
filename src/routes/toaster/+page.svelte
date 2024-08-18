<script lang="ts">
  import {Toast, Toaster, createToaster} from '$lib/index.js';

  let toaster = createToaster();
</script>

<button
  class="h-11 border px-3.5"
  onclick={() => {
    toaster.create({
      title: 'Hello',
      description: 'This is a toast message',
    });
  }}
>
  Create
</button>

<Toaster {toaster}>
  {#snippet children(context)}
    <Toast.Root class="border bg-white p-4 min-w-[20rem]">
      <Toast.Title class="font-medium" />
      <Toast.Description class="text-sm text-gray-500" />
      <Toast.CloseTrigger class="border h-11 block mt-3 w-full">Close</Toast.CloseTrigger>
    </Toast.Root>
  {/snippet}
</Toaster>
