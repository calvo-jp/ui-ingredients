<script lang="ts">
  import {Steps} from '$lib/index.js';

  const items = [
    {title: 'Step 1', content: 'Step 1 Content'},
    {title: 'Step 2', content: 'Step 2 Content'},
    {title: 'Step 3', content: 'Step 3 Content'},
  ];
</script>

<Steps.Root count={items.length} lazyMount keepMounted={false}>
  <Steps.List>
    {#each items as item, index}
      <Steps.Item {index}>
        <Steps.Trigger>
          <Steps.Indicator>✅</Steps.Indicator>
          <span>{item.title}</span>
        </Steps.Trigger>
        {#if index + 1 < items.length}
          <Steps.Separator />
        {/if}
      </Steps.Item>
    {/each}
  </Steps.List>

  <div class="mt-5">
    {#each items as item, index}
      <Steps.Content {index}>
        {item.content}
      </Steps.Content>
    {/each}

    <Steps.CompletedContent>Done!🚀</Steps.CompletedContent>
  </div>

  <div>
    <Steps.PrevTrigger>Back</Steps.PrevTrigger>
    <Steps.NextTrigger>Next</Steps.NextTrigger>
  </div>
</Steps.Root>
