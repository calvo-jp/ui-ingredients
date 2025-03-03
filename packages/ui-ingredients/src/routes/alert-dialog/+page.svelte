<script lang="ts">
  import {AlertDialog} from '$lib/index.js';

  let open = $state(false);

  $inspect({open});
</script>

<AlertDialog.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
  lazyMount
>
  <AlertDialog.Trigger>Click me</AlertDialog.Trigger>
  <AlertDialog.Backdrop />
  <AlertDialog.Positioner>
    <AlertDialog.Content>
      <AlertDialog.Title>Title</AlertDialog.Title>
      <AlertDialog.Description>Description</AlertDialog.Description>
      <AlertDialog.CloseTrigger>Close</AlertDialog.CloseTrigger>
    </AlertDialog.Content>
  </AlertDialog.Positioner>
</AlertDialog.Root>

<style>
  :global(
    [data-scope='alert-dialog'][data-part='trigger'],
    [data-scope='alert-dialog'][data-part='close-trigger']
  ) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='alert-dialog'][data-part='backdrop']) {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    backdrop-filter: blur(4px);
  }

  :global([data-scope='alert-dialog'][data-part='content']) {
    position: fixed;
    width: 400px;
    background: white;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :global(
    [data-scope='alert-dialog'][data-part='backdrop'][data-state='open'],
    [data-scope='alert-dialog'][data-part='content'][data-state='open']
  ) {
    animation: fade-in 250ms;
  }

  :global(
    [data-scope='alert-dialog'][data-part='backdrop'][data-state='closed'],
    [data-scope='alert-dialog'][data-part='content'][data-state='closed']
  ) {
    animation: fade-out 150ms;
  }

  :global([data-scope='alert-dialog'][data-part='title']) {
    font-size: 18px;
  }

  :global([data-scope='alert-dialog'][data-part='description']) {
    color: var(--text-muted);
  }

  :global([data-scope='alert-dialog'][data-part='close-trigger']) {
    margin-top: 16px;
    width: 100%;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
