<script lang="ts">
  import {Collapsible} from '$lib/index.js';
  import {Button} from '../shared/index.js';
</script>

<Collapsible.Root>
  <Collapsible.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Open</Button>
    {/snippet}
  </Collapsible.Trigger>

  <Collapsible.Content
    class="data-open:animate-collapse-in lg: data-closed:animate-collapse-out mt-3 w-full max-w-[32rem] overflow-hidden rounded"
  >
    <div class="rounded border p-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit
      optio, eaque laborum nesciunt dolores temporibus accusantium neque quasi
      dolore, id itaque architecto libero voluptatem laboriosam soluta nobis
      consectetur earum?
    </div>
  </Collapsible.Content>
</Collapsible.Root>
