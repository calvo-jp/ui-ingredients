<script lang="ts">
  import {Collapsible} from '$lib/index.js';
  import {Button} from '../shared/index.js';

  let open = $state(true);
</script>

<Collapsible.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
>
  <Collapsible.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Open</Button>
    {/snippet}
  </Collapsible.Trigger>

  <Collapsible.Content
    class="data-open:animate-collapse-in data-closed:animate-collapse-out mt-3 w-full overflow-hidden rounded lg:max-w-[32rem]"
  >
    <div class="rounded border p-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit
      optio, eaque laborum nesciunt dolores temporibus accusantium neque quasi
      dolore, id itaque architecto libero voluptatem laboriosam soluta nobis
      consectetur earum?
    </div>
  </Collapsible.Content>
</Collapsible.Root>
