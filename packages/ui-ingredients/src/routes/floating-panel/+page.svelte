<script>
  import {FloatingPanel, Portal} from '$lib/index.js';
  import ChevronDownIcon from '../chevron-down-icon.svelte';
  import MaximizeIcon from '../maximize-icon.svelte';
  import MinusIcon from '../minus-icon.svelte';
  import XIcon from '../x-icon.svelte';
</script>

<FloatingPanel.Root lazyMount>
  <FloatingPanel.Trigger>Trigger</FloatingPanel.Trigger>
  <Portal>
    <FloatingPanel.Positioner>
      <FloatingPanel.Content>
        <FloatingPanel.DragTrigger>
          <FloatingPanel.Header>
            <FloatingPanel.Title>Title</FloatingPanel.Title>
            <FloatingPanel.Control>
              <FloatingPanel.StageTrigger stage="minimized">
                <MinusIcon style="width:16px;height:16px;" />
              </FloatingPanel.StageTrigger>
              <FloatingPanel.StageTrigger stage="maximized">
                <MaximizeIcon style="width:16px;height:16px;" />
              </FloatingPanel.StageTrigger>
              <FloatingPanel.StageTrigger stage="default">
                <ChevronDownIcon style="width:16px;height:16px;" />
              </FloatingPanel.StageTrigger>
              <FloatingPanel.CloseTrigger>
                <XIcon style="width:16px;height:16px;" />
              </FloatingPanel.CloseTrigger>
            </FloatingPanel.Control>
          </FloatingPanel.Header>
        </FloatingPanel.DragTrigger>
        <FloatingPanel.Body>
          <p>Some content</p>
        </FloatingPanel.Body>

        <FloatingPanel.ResizeTrigger axis="n" />
        <FloatingPanel.ResizeTrigger axis="e" />
        <FloatingPanel.ResizeTrigger axis="w" />
        <FloatingPanel.ResizeTrigger axis="s" />
        <FloatingPanel.ResizeTrigger axis="ne" />
        <FloatingPanel.ResizeTrigger axis="se" />
        <FloatingPanel.ResizeTrigger axis="sw" />
        <FloatingPanel.ResizeTrigger axis="nw" />
      </FloatingPanel.Content>
    </FloatingPanel.Positioner>
  </Portal>
</FloatingPanel.Root>

<style>
  :global([data-scope='floating-panel'][data-part='trigger']) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='floating-panel'][data-part='positioner']) {
    z-index: 1;
  }

  :global([data-scope='floating-panel'][data-part='content']) {
    width: 100%;
    border: 1px solid var(--border-default);
    background: white;
  }

  :global([data-scope='floating-panel'][data-part='control']) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  :global([data-scope='floating-panel'][data-part='drag-trigger']) {
    width: 100%;
    border-bottom: 1px solid var(--border-default);
  }

  :global(
    [data-scope='floating-panel'][data-part='drag-trigger'][data-disabled]
  ) {
    opacity: 1;
  }

  :global([data-scope='floating-panel'][data-part='header']) {
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :global(
    [data-scope='floating-panel'][data-part='stage-trigger'],
    [data-scope='floating-panel'][data-part='close-trigger']
  ) {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='floating-panel'][data-part='body']) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  :global(
    [data-scope='floating-panel'][data-part='resize-trigger'][data-axis='n'],
    [data-scope='floating-panel'][data-part='resize-trigger'][data-axis='s']
  ) {
    height: 6px;
    max-width: 90%;
  }

  :global(
    [data-scope='floating-panel'][data-part='resize-trigger'][data-axis='e'],
    [data-scope='floating-panel'][data-part='resize-trigger'][data-axis='w']
  ) {
    width: 6px;
    max-height: 90%;
  }

  :global(
    [data-scope='floating-panel'][data-part='resize-trigger'][data-axis='ne'],
    [data-scope='floating-panel'][data-part='resize-trigger'][data-axis='nw'],
    [data-scope='floating-panel'][data-part='resize-trigger'][data-axis='se'],
    [data-scope='floating-panel'][data-part='resize-trigger'][data-axis='sw']
  ) {
    width: 10px;
    height: 10px;
  }
</style>
