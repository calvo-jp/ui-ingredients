<script lang="ts">
  import {Accordion} from '$lib/index.js';
  import ChevronDownIcon from '../chevron-down-icon.svelte';

  let items = [
    {
      value: '1',
      label: 'Item 1',
      content: 'Item 1 Description',
    },
    {
      value: '2',
      label: 'Item 2',
      content: 'Item 2 Description',
    },
    {
      value: '3',
      label: 'Item 3',
      content: 'Item 3 Description',
    },
  ];

  let value: string[] = $state([]);

  $inspect({value});
</script>

<Accordion.Root
  {value}
  multiple
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  {#each items as { label, value, content }}
    <Accordion.Item {value}>
      <Accordion.ItemTrigger>
        {label}

        <Accordion.ItemIndicator>
          <ChevronDownIcon
            style="width:20px;height:20px;color:var(--color-muted)"
          />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        {content}
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>

<style>
  :global([data-scope='accordion'][data-part='root']) {
    max-width: 400px;
  }

  :global([data-scope='accordion'][data-part='item']) {
    width: 100%;
    padding: 1rem;
    border-width: 1px;
    border-bottom-width: 0px;
    border-style: solid;
    border-color: var(--border-default);
  }

  :global([data-scope='accordion'][data-part='item']:last-child) {
    border-bottom-width: 1px;
  }

  :global([data-scope='accordion'][data-part='item-trigger']) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    text-align: left;
  }

  :global([data-scope='accordion'][data-part='item-indicator']) {
    transition: transform 250ms;
  }

  :global(
    [data-scope='accordion'][data-part='item-indicator'][data-state='open']
  ) {
    transform: rotate(180deg);
  }

  :global([data-scope='accordion'][data-part='item-content']) {
    color: var(--color-muted);
    overflow-y: hidden;
  }

  :global(
    [data-scope='accordion'][data-part='item-content'][data-state='open']
  ) {
    animation: collapse-in 250ms;
  }

  :global(
    [data-scope='accordion'][data-part='item-content'][data-state='closed']
  ) {
    animation: collapse-out 150ms;
  }

  @keyframes collapse-in {
    from {
      height: 0;
    }
    to {
      height: var(--height);
    }
  }

  @keyframes collapse-out {
    from {
      height: var(--height);
    }
    to {
      height: 0;
    }
  }
</style>
