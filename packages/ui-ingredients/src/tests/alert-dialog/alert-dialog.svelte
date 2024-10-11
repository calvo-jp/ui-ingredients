<script lang="ts">
  import {AlertDialog} from '$lib/index.js';
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>Trigger</AlertDialog.Trigger>
  <AlertDialog.Backdrop />
  <AlertDialog.Positioner>
    <AlertDialog.Content>
      <AlertDialog.Title>Title</AlertDialog.Title>
      <AlertDialog.Description>Description</AlertDialog.Description>
      <AlertDialog.CloseTrigger>Close</AlertDialog.CloseTrigger>
    </AlertDialog.Content>
  </AlertDialog.Positioner>
</AlertDialog.Root>
