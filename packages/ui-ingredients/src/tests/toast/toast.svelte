<script lang="ts">
  import {createToastStore, Toast, Toaster} from '$lib/index.js';

  export const toaster = createToastStore({
    duration: 5000,
  });
</script>

<button
  onclick={() => {
    toaster.create({
      title: 'Title',
      description: 'Description',
    });
  }}
  aria-label="Create toast"
></button>

<Toaster {toaster}>
  <Toast.Root>
    <Toast.Title />
    <Toast.Description />
    <Toast.CloseTrigger>Close</Toast.CloseTrigger>
    <Toast.ActionTrigger>Action</Toast.ActionTrigger>
  </Toast.Root>
</Toaster>
