<script>
  let {children} = $props();
</script>

{@render children()}

<style>
  :global([data-scope='date-picker'][data-part='control']) {
    display: flex;
    gap: 8px;
  }

  :global([data-scope='date-picker'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='date-picker'][data-part='root']) {
    width: fit-content;
  }

  :global([data-scope='date-picker'][data-part='input']) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
    flex-grow: 1;
    width: 250px;
  }

  :global(
    [data-scope='date-picker'][data-part='trigger'],
    [data-scope='date-picker'][data-part='clear-trigger']
  ) {
    width: 40px;
    height: 40px;
    border: 1px solid var(--border-default);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  :global([data-scope='date-picker'][data-part='content']) {
    width: 350px;
    padding: 8px;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='date-picker'][data-part='view-control']) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
  }

  :global(
    [data-scope='date-picker'][data-part='prev-trigger'],
    [data-scope='date-picker'][data-part='next-trigger']
  ) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global([data-scope='date-picker'][data-part='table']) {
    margin-top: 12px;
    width: 100%;
  }

  :global([data-scope='date-picker'][data-part='table-header']) {
    font-size: 14px;
    font-weight: medium;
    color: var(--color-muted);
    padding: 12px 0px;
  }

  :global([data-scope='date-picker'][data-part='table-cell-trigger']) {
    width: 100%;
    padding: 12px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(
    [data-scope='date-picker'][data-part='table-cell-trigger'][data-selected]
  ) {
    color: var(--color-accent);
    font-weight: 500;
  }
</style>
