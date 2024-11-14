<script lang="ts">
  import {Button} from '$lib/ui';
  import {Collapsible} from 'ui-ingredients';

  let open = $state(false);
</script>

<Collapsible.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
>
  <Collapsible.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Click me</Button>
    {/snippet}
  </Collapsible.Trigger>

  <Collapsible.Content
    class="mt-3 w-full overflow-hidden rounded data-open:animate-collapse-in data-closed:animate-collapse-out lg:max-w-[32rem]"
  >
    <div class="rounded border p-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit
      optio, eaque laborum nesciunt dolores temporibus accusantium neque quasi
      dolore, id itaque architecto libero voluptatem laboriosam soluta nobis
      consectetur earum?
    </div>
  </Collapsible.Content>
</Collapsible.Root>
