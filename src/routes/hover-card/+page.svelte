<script lang="ts">
  import {HoverCard, Portal} from '$lib/index.js';
</script>

<HoverCard.Root>
  <HoverCard.Trigger>Hover me</HoverCard.Trigger>
  <Portal>
    <HoverCard.Positioner>
      <HoverCard.Content class="max-w-[20rem] border p-5 bg-white text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis natus neque, tenetur
        praesentium laboriosam esse eius at maxime quam magni rerum animi ducimus debitis?
      </HoverCard.Content>
    </HoverCard.Positioner>
  </Portal>
</HoverCard.Root>
