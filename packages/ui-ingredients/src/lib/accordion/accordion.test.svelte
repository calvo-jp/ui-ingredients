<script lang="ts">
  import AccordionItemContent from './accordion-item-content.svelte';
  import AccordionItemIndicator from './accordion-item-indicator.svelte';
  import AccordionItemTrigger from './accordion-item-trigger.svelte';
  import AccordionItem from './accordion-item.svelte';
  import AccordionRoot from './accordion-root.svelte';

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

<AccordionRoot {multiple}>
  {#each items as item}
    <AccordionItem value={item.value}>
      <AccordionItemTrigger>
        {item.label}
        <AccordionItemIndicator></AccordionItemIndicator>
      </AccordionItemTrigger>
      <AccordionItemContent>{item.content}</AccordionItemContent>
    </AccordionItem>
  {/each}
</AccordionRoot>
