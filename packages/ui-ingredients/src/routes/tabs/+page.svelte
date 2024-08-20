<script lang="ts">
  import {Tabs} from '$lib/index.js';

  let items = [
    {
      value: '1',
      label: 'Tab 1',
      content: 'Content 1',
    },
    {
      value: '2',
      label: 'Tab 2',
      content: 'Content 2',
    },
    {
      value: '3',
      label: 'Tab 3',
      content: 'Content 3',
    },
  ];

  let value = $state(items[0].value);

  $inspect(value);
</script>

<Tabs.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <Tabs.List>
    {#each items as { value, label }}
      <Tabs.Trigger
        {value}
        class="data-selected:bg-neutral-800/50 h-10 border border-l-0 px-3 transition-colors duration-200 first:border-l"
      >
        {label}
      </Tabs.Trigger>
    {/each}
  </Tabs.List>
  {#each items as { value, content }}
    <Tabs.Content class="mt-4" {value}>{content}</Tabs.Content>
  {/each}
</Tabs.Root>
