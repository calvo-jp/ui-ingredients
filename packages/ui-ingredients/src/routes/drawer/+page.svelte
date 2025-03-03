<script lang="ts">
  import {Drawer} from '$lib/index.js';

  let open = $state(false);

  $inspect({open});
</script>

<Drawer.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
  lazyMount
>
  <Drawer.Trigger>Click me</Drawer.Trigger>
  <Drawer.Backdrop />
  <Drawer.Positioner>
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Title</Drawer.Title>
        <Drawer.Description>Description</Drawer.Description>
      </Drawer.Header>
      <Drawer.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        delectus, excepturi est inventore magnam at id tempora doloremque
        perferendis odit tenetur recusandae cumque nihil!
      </Drawer.Body>
      <Drawer.Footer>
        <Drawer.CloseTrigger>Close</Drawer.CloseTrigger>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Positioner>
</Drawer.Root>

<style>
  :global(
    [data-scope='drawer'][data-part='trigger'],
    [data-scope='drawer'][data-part='close-trigger']
  ) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='drawer'][data-part='backdrop']) {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    backdrop-filter: blur(4px);
  }

  :global([data-scope='drawer'][data-part='content']) {
    position: fixed;
    width: 375px;
    height: 100%;
    top: 0;
    right: 0;
    background: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  :global([data-scope='drawer'][data-part='body']) {
    flex-grow: 1;
  }

  :global([data-scope='drawer'][data-part='backdrop'][data-state='open']) {
    animation: fade-in 250ms;
  }

  :global([data-scope='drawer'][data-part='backdrop'][data-state='closed']) {
    animation: fade-out 150ms;
  }

  :global([data-scope='drawer'][data-part='content'][data-state='open']) {
    animation: slide-in-right 250ms;
  }

  :global([data-scope='drawer'][data-part='content'][data-state='closed']) {
    animation: slide-out-right 150ms;
  }

  :global([data-scope='drawer'][data-part='title']) {
    font-size: 18px;
  }

  :global([data-scope='drawer'][data-part='description']) {
    color: var(--text-muted);
  }

  :global([data-scope='drawer'][data-part='close-trigger']) {
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

  @keyframes slide-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out-right {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
</style>
