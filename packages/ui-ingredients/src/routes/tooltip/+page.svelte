<script lang="ts">
  import {Tooltip} from '$lib/index.js';
</script>

<Tooltip.Root lazyMount>
  <Tooltip.Trigger>Hover me</Tooltip.Trigger>
  <Tooltip.Positioner>
    <Tooltip.Content>
      <Tooltip.Arrow>
        <Tooltip.ArrowTip />
      </Tooltip.Arrow>

      I am a tooltip
    </Tooltip.Content>
  </Tooltip.Positioner>
</Tooltip.Root>

<style>
  :global([data-scope='tooltip'][data-part='trigger']) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='tooltip'][data-part='content']) {
    background: oklch(0.269 0 0);
    padding: 12px 16px;
    color: oklch(0.922 0 0);
    --arrow-size: 16px;
    --arrow-background: oklch(0.269 0 0);
  }

  :global([data-scope='tooltip'][data-part='content'][data-state='open']) {
    animation: fade-in 250ms;
  }

  :global([data-scope='tooltip'][data-part='content'][data-state='closed']) {
    animation: fade-out 150ms;
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
