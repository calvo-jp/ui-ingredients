<script lang="ts">
  import {Popover} from '$lib/index.js';
</script>

<Popover.Root
  positioning={{
    placement: 'bottom-start',
  }}
  lazyMount
>
  <Popover.Trigger>Click me</Popover.Trigger>
  <Popover.Positioner>
    <Popover.Content>
      <Popover.Title>Title</Popover.Title>
      <Popover.Description>Description</Popover.Description>
      <Popover.CloseTrigger>Close</Popover.CloseTrigger>
    </Popover.Content>
  </Popover.Positioner>
</Popover.Root>

<style>
  :global(
    [data-scope='popover'][data-part='trigger'],
    [data-scope='popover'][data-part='close-trigger']
  ) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='popover'][data-part='content']) {
    width: 375px;
    background: white;
    padding: 16px;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='popover'][data-part='content'][data-state='open']) {
    animation: fade-in 250ms;
  }

  :global([data-scope='popover'][data-part='content'][data-state='closed']) {
    animation: fade-out 150ms;
  }

  :global([data-scope='popover'][data-part='title']) {
    font-size: 18px;
  }

  :global([data-scope='popover'][data-part='description']) {
    color: var(--color-muted);
  }

  :global([data-scope='popover'][data-part='close-trigger']) {
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
