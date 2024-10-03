<script lang="ts">
  import {Steps} from '$lib/index.js';

  interface Item {
    title: string;
    content: string;
  }

  interface Props {
    items: Item[];
  }

  let {items}: Props = $props();
</script>

<Steps.Root count={items.length}>
  <Steps.List>
    {#each items as item, index}
      <Steps.Item {index}>
        <Steps.Trigger>
          {item.title}
          <Steps.Indicator>Indicator</Steps.Indicator>
        </Steps.Trigger>

        <Steps.Separator />
      </Steps.Item>
    {/each}
  </Steps.List>

  {#each items as item, index}
    <Steps.Content {index}>
      {item.content}
    </Steps.Content>
  {/each}

  <Steps.CompletedContent>Done!🚀</Steps.CompletedContent>

  <Steps.Progress />
  <Steps.PrevTrigger>Back</Steps.PrevTrigger>
  <Steps.NextTrigger>Next</Steps.NextTrigger>
</Steps.Root>
