<script lang="ts">
  import {Dialog} from '$lib/index.js';

  let open = $state(false);

  $inspect({open});
</script>

<Dialog.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
  lazyMount
>
  <Dialog.Trigger>Click me</Dialog.Trigger>
  <Dialog.Backdrop />
  <Dialog.Positioner>
    <Dialog.Content>
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>Description</Dialog.Description>
      <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>

<style>
  :global(
    [data-scope='dialog'][data-part='trigger'],
    [data-scope='dialog'][data-part='close-trigger']
  ) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='dialog'][data-part='backdrop']) {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    backdrop-filter: blur(4px);
  }

  :global([data-scope='dialog'][data-part='content']) {
    position: fixed;
    width: 400px;
    background: white;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :global(
    [data-scope='dialog'][data-part='backdrop'][data-state='open'],
    [data-scope='dialog'][data-part='content'][data-state='open']
  ) {
    animation: fade-in 250ms;
  }

  :global(
    [data-scope='dialog'][data-part='backdrop'][data-state='closed'],
    [data-scope='dialog'][data-part='content'][data-state='closed']
  ) {
    animation: fade-out 150ms;
  }

  :global([data-scope='dialog'][data-part='title']) {
    font-size: 18px;
  }

  :global([data-scope='dialog'][data-part='description']) {
    color: var(--color-muted);
  }

  :global([data-scope='dialog'][data-part='close-trigger']) {
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
