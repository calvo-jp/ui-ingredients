<script lang="ts">
  import {Tooltip} from '$lib/index.js';
</script>

<Tooltip.Root lazyMount>
  <Tooltip.Trigger>Hover me</Tooltip.Trigger>
  <Tooltip.Positioner>
    <Tooltip.Content>
      <Tooltip.Arrow>
        <Tooltip.ArrowTip />
      </Tooltip.Arrow>

      I am a tooltip
    </Tooltip.Content>
  </Tooltip.Positioner>
</Tooltip.Root>
