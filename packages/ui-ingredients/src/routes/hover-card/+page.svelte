<script lang="ts">
  import {HoverCard, Portal} from '$lib/index.js';
</script>

<HoverCard.Root
  positioning={{
    placement: 'bottom-start',
  }}
>
  <HoverCard.Trigger href="#" class="hover:underline underline-offset-2">Hover me</HoverCard.Trigger
  >
  <Portal>
    <HoverCard.Positioner>
      <HoverCard.Content class="max-w-[20rem] border p-4 bg-neutral-800 text-sm text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis natus neque, tenetur
        praesentium laboriosam esse eius at maxime quam magni rerum animi ducimus debitis?
      </HoverCard.Content>
    </HoverCard.Positioner>
  </Portal>
</HoverCard.Root>
