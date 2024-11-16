<script lang="ts">
  import {Button} from '$lib/ui';
  import {Collapsible} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Collapsible.Root>
    <Collapsible.Trigger>
      {#snippet asChild(attrs)}
        <Button variant="outline" {...attrs}>Toggle collapsible</Button>
      {/snippet}
    </Collapsible.Trigger>

    <Collapsible.Content
      class="mt-5 w-full overflow-hidden data-open:animate-collapse-in data-closed:animate-collapse-out"
    >
      <div class="rounded border border-neutral-800 p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        odit optio, eaque laborum nesciunt dolores temporibus accusantium neque
        quasi dolore, id itaque architecto libero voluptatem laboriosam soluta
        nobis consectetur earum?
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
</Container>
