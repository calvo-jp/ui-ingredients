<script lang="ts">
  import {Steps} from '$lib/index.js';

  const items = [
    {title: 'First', content: 'Do this first.'},
    {title: 'Second', content: 'Then do this.'},
    {title: 'Third', content: 'Finally do this.'},
  ];
</script>

<Steps.Root count={items.length} lazyMount keepMounted={false}>
  <Steps.List>
    {#each items as item, index}
      <Steps.Item {index}>
        <Steps.Trigger>
          <Steps.Indicator>
            {index + 1}
          </Steps.Indicator>
          {item.title}
        </Steps.Trigger>

        {#if index + 1 < items.length}
          <Steps.Separator />
        {/if}
      </Steps.Item>
    {/each}
  </Steps.List>

  {#each items as item, index}
    <Steps.Content {index}>
      {item.content}
    </Steps.Content>
  {/each}

  <Steps.CompletedContent>All good!</Steps.CompletedContent>

  <div style="display:flex;gap:8px;">
    <Steps.PrevTrigger>Back</Steps.PrevTrigger>
    <Steps.NextTrigger>Next</Steps.NextTrigger>
  </div>
</Steps.Root>

<style>
  :global([data-scope='steps'][data-part='root']) {
    max-width: 450px;
  }

  :global([data-scope='steps'][data-part='content']) {
    margin-top: 18px;
  }

  :global([data-scope='steps'][data-part='next-trigger']),
  :global([data-scope='steps'][data-part='prev-trigger']) {
    padding: 0px 12px;
    height: 36px;
    border: 1px solid var(--border-default);
    margin-top: 18px;
    font-size: 14px;
  }

  :global([data-scope='steps'][data-part='list']) {
    display: flex;
    gap: 12px;
  }

  :global([data-scope='steps'][data-part='item']) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  :global([data-scope='steps'][data-part='trigger']) {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  :global([data-scope='steps'][data-part='indicator']) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    padding: 2px;
    border-radius: 100%;
    font-size: 14px;
    font-weight: 600;
    background: oklch(0.97 0 0);
  }

  :global([data-scope='steps'][data-part='separator']) {
    flex-grow: 1;
    height: 1px;
    background: var(--border-default);
  }
</style>
