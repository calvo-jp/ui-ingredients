<script lang="ts">
  import {Tabs} from '$lib/index.js';

  interface Item {
    value: string;
    label: string;
    content: string;
  }

  interface Props {
    items: Item[];
  }

  let {items}: Props = $props();
</script>

<Tabs.Root>
  <Tabs.Indicator />

  <Tabs.List>
    {#each items as { value, label }}
      <Tabs.Trigger {value}>
        {label}
      </Tabs.Trigger>
    {/each}
  </Tabs.List>

  {#each items as { value, content }}
    <Tabs.Content {value}>{content}</Tabs.Content>
  {/each}
</Tabs.Root>
