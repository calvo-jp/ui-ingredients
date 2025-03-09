<script lang="ts">
  let {children} = $props();
</script>

{@render children()}

<style>
  :global([data-scope='menu'][data-part='trigger']),
  :global([data-scope='menu'][data-part='context-trigger']) {
    display: inline-flex;
    align-items: center;
    padding: 0px 14px;
    height: 40px;
    border: 1px solid var(--border-default);
    gap: 4px;
  }

  :global([data-scope='menu'][data-part='context-trigger']) {
    border: 1px dashed var(--border-default);
  }

  :global([data-scope='menu'][data-part='indicator']) {
    display: flex;
    transition: transform 150ms;
  }

  :global([data-scope='menu'][data-part='indicator'][data-state='open']) {
    transform: rotate(180deg);
  }

  :global([data-scope='menu'][data-part='content']) {
    padding: 4px;
    border: 1px solid var(--border-default);
    background: white;
  }

  :global([data-scope='menu'][data-part='content'][data-state='open']) {
    animation: fade-in 250ms;
  }

  :global([data-scope='menu'][data-part='content'][data-state='closed']) {
    animation: fade-out 150ms;
  }

  :global([data-scope='menu'][data-part='item']),
  :global([data-scope='menu'][data-part='trigger-item']) {
    min-width: 125px;
    padding: 4px 6px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: default;
    text-align: left;
  }

  :global([data-scope='menu'][data-part='item'][data-disabled]) {
    opacity: 0.65;
    cursor: not-allowed;
  }

  :global([data-scope='menu'][data-part='item-indicator']) {
    display: flex;
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
