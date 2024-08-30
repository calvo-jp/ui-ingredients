<script lang="ts">
  import {HoverCard, Portal} from '$lib/index.js';
</script>

<HoverCard.Root
  positioning={{
    placement: 'bottom-start',
  }}
>
  <HoverCard.Trigger class="underline-offset-2 hover:underline">
    {#snippet asChild(mergedProps)}
      <button {...mergedProps}>Hover me</button>
    {/snippet}
  </HoverCard.Trigger>
  <Portal>
    <HoverCard.Positioner>
      <HoverCard.Content
        class="bg-light w-[90vw] rounded border p-4 lg:max-w-[24rem]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis natus
        neque, tenetur praesentium laboriosam esse eius at maxime quam magni
        rerum animi ducimus debitis?
      </HoverCard.Content>
    </HoverCard.Positioner>
  </Portal>
</HoverCard.Root>
