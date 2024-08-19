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
  <Collapsible.Trigger class="border px-3.5 h-11">Open</Collapsible.Trigger>
  <Collapsible.Content
    class="mt-3 text-neutral-400 bg-neutral-800/50 max-w-[32rem] overflow-hidden data-open:animate-collapse-in data-closed:animate-collapse-out"
  >
    <div class="p-4 border text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit optio, eaque
      laborum nesciunt dolores temporibus accusantium neque quasi dolore, id itaque architecto
      libero voluptatem laboriosam soluta nobis consectetur earum?
    </div>
  </Collapsible.Content>
</Collapsible.Root>
