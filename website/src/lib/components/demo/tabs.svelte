<script lang="ts">
  import {Tabs} from 'ui-ingredients';

  let items = [
    {
      value: '1',
      label: 'Tab 1',
      content: 'Tab 1 Content',
    },
    {
      value: '2',
      label: 'Tab 2',
      content: 'Tab 2 Content',
    },
    {
      value: '3',
      label: 'Tab 3',
      content: 'Tab 3 Content',
      disabled: true,
    },
    {
      value: '4',
      label: 'Tab 4',
      content: 'Tab 4 Content',
    },
  ];
</script>

<Tabs.Root value={items[0].value} orientation="horizontal">
  <Tabs.List
    class="relative border-b border-neutral-200 pb-2 dark:border-neutral-800"
  >
    {#each items as item}
      <Tabs.Trigger
        value={item.value}
        disabled={item.disabled}
        class="px-3 font-semibold disabled:cursor-not-allowed disabled:text-neutral-400 dark:disabled:text-neutral-500"
      >
        {item.label}
      </Tabs.Trigger>
    {/each}

    <Tabs.Indicator
      class="bottom-0 -mb-px h-0.5 w-[var(--width,0)] bg-indigo-600 dark:bg-indigo-500"
    />
  </Tabs.List>

  {#each items as item}
    <Tabs.Content
      class="pt-4 text-neutral-600 dark:text-neutral-400"
      value={item.value}
    >
      {item.content}
    </Tabs.Content>
  {/each}
</Tabs.Root>
