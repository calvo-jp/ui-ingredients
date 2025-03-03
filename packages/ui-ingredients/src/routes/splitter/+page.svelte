<script lang="ts">
  import {Splitter} from '$lib/index.js';
</script>

<Splitter.Root
  size={[
    {id: 'a', size: 50, minSize: 25},
    {id: 'b', size: 50, minSize: 25},
  ]}
>
  <Splitter.Panel id="a">A</Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" />
  <Splitter.Panel id="b">B</Splitter.Panel>
</Splitter.Root>

<style>
  :global([data-scope='splitter'][data-part='root']) {
    max-width: 600px;
    display: flex;
    gap: 8px;
  }

  :global([data-scope='splitter'][data-part='panel']) {
    border: 1px solid var(--border-default);
    padding: 16px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    color: oklch(0.556 0 0);
  }

  :global([data-scope='splitter'][data-part='resize-trigger']) {
    border: 4px solid var(--border-default);
    border-radius: 4px;
  }
</style>
