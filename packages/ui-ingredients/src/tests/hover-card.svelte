<script lang="ts">
  import {HoverCard} from '$lib/index.js';

  let {content}: {content: string} = $props();
</script>

<HoverCard.Root>
  <HoverCard.Trigger>Trigger</HoverCard.Trigger>

  <HoverCard.Positioner>
    <HoverCard.Content>
      <HoverCard.Arrow>
        <HoverCard.ArrowTip />
      </HoverCard.Arrow>

      {content}
    </HoverCard.Content>
  </HoverCard.Positioner>
</HoverCard.Root>
