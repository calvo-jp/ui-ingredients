<script lang="ts">
  import {Collapsible} from '$lib/index.js';

  let open = $state(false);

  $inspect(open);
</script>

<Collapsible.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
>
  <Collapsible.Trigger class="h-11 border px-3.5">Open</Collapsible.Trigger>
  <Collapsible.Content
    class="data-open:animate-collapse-in data-closed:animate-collapse-out mt-3 max-w-[32rem] overflow-hidden bg-neutral-800/50 text-neutral-400"
  >
    <div class="border p-4 text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit
      optio, eaque laborum nesciunt dolores temporibus accusantium neque quasi
      dolore, id itaque architecto libero voluptatem laboriosam soluta nobis
      consectetur earum?
    </div>
  </Collapsible.Content>
</Collapsible.Root>
