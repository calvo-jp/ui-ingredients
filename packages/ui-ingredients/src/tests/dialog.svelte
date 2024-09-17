<script lang="ts">
  import {Dialog} from '$lib/index.js';
</script>

<Dialog.Root>
  <Dialog.Trigger>Trigger</Dialog.Trigger>
  <Dialog.Backdrop />
  <Dialog.Positioner>
    <Dialog.Content>
      <Dialog.Title class="text-xl font-semibold">Title</Dialog.Title>
      <Dialog.Description>Description</Dialog.Description>
      <Dialog.CloseTrigger
        class="border-lighter mt-3 h-12 w-full rounded border"
      >
        Close
      </Dialog.CloseTrigger>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>
