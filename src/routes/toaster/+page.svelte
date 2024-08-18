<script lang="ts">
  import {Toast, Toaster, createToaster} from '$lib/index.js';

  let toaster = createToaster();
</script>

<button
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
  {#snippet children({api})}
    <Toast.Root>
      <Toast.Title>🚀 {api.title}</Toast.Title>
      <Toast.Description>{api.description}</Toast.Description>
      <Toast.CloseTrigger>Close</Toast.CloseTrigger>
    </Toast.Root>
  {/snippet}
</Toaster>
