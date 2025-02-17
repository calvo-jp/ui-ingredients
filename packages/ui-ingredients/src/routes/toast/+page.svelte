<script lang="ts">
  import {createToaster, Toast, Toaster} from '$lib/index.js';

  const toaster = createToaster({
    placement: 'bottom',
    overlap: true,
  });
</script>

<button
  onclick={() => {
    toaster.create({
      title: 'Yesss!',
      description: 'This is a toast message',
    });
  }}
>
  Click me
</button>

<Toaster {toaster}>
  <Toast.Root>
    <Toast.Title />
    <Toast.Description />
    <Toast.CloseTrigger>Close</Toast.CloseTrigger>
  </Toast.Root>
</Toaster>
