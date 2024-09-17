<script lang="ts">
  import {Accordion} from '$lib/index.js';

  interface Item {
    value: string;
    label: string;
    content: string;
  }

  interface Props {
    items: Item[];
    multiple?: boolean;
  }

  let {items, multiple}: Props = $props();
</script>

<Accordion.Root {multiple}>
  {#each items as item}
    <Accordion.Item value={item.value}>
      <Accordion.ItemTrigger>
        {item.label}
        <Accordion.ItemIndicator></Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>{item.content}</Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>
