<script lang="ts">
  import {Button} from '$lib/components';
  import {Collapsible} from 'ui-ingredients';
</script>

<Collapsible.Root>
  <Collapsible.Trigger>
    {#snippet asChild(attrs)}
      <Button variant="outline" {...attrs}>Toggle collapsible</Button>
    {/snippet}
  </Collapsible.Trigger>

  <Collapsible.Content
    class="mt-5 w-full overflow-hidden ui-open:animate-collapse-in ui-closed:animate-collapse-out"
  >
    <div
      class="rounded border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-transparent"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit
      optio, eaque laborum nesciunt dolores temporibus accusantium neque quasi
      dolore, id itaque architecto libero voluptatem laboriosam soluta nobis
      consectetur earum?
    </div>
  </Collapsible.Content>
</Collapsible.Root>
