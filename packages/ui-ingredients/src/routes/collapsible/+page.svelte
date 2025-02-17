<script lang="ts">
  import {Collapsible} from '$lib/index.js';

  let open = $state(false);
</script>

<Collapsible.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
>
  <Collapsible.Trigger>Click me</Collapsible.Trigger>
  <Collapsible.Content>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit
    optio, eaque laborum nesciunt dolores temporibus accusantium neque quasi
    dolore, id itaque architecto libero voluptatem laboriosam soluta nobis
    consectetur earum?
  </Collapsible.Content>
</Collapsible.Root>
