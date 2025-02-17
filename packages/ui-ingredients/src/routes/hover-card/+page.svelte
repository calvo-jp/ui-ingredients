<script lang="ts">
  import {HoverCard} from '$lib/index.js';
</script>

<HoverCard.Root
  lazyMount
  keepMounted={false}
  positioning={{
    placement: 'bottom-start',
  }}
>
  <HoverCard.Trigger>Hover me</HoverCard.Trigger>

  <HoverCard.Positioner>
    <HoverCard.Content>
      <HoverCard.Arrow>
        <HoverCard.ArrowTip />
      </HoverCard.Arrow>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis natus
      neque, tenetur praesentium laboriosam esse eius at maxime quam magni rerum
      animi ducimus debitis?
    </HoverCard.Content>
  </HoverCard.Positioner>
</HoverCard.Root>
