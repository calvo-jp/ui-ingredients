<script lang="ts">
  import {Tooltip} from '$lib/index.js';
</script>

<Tooltip.Root>
  <Tooltip.Trigger>Trigger</Tooltip.Trigger>
  <Tooltip.Positioner>
    <Tooltip.Content>
      <Tooltip.Arrow>
        <Tooltip.ArrowTip />
      </Tooltip.Arrow>
      Content
    </Tooltip.Content>
  </Tooltip.Positioner>
</Tooltip.Root>
