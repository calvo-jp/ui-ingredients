<script lang="ts">
  import {Popover} from '$lib/index.js';
</script>

<Popover.Root>
  <Popover.Trigger>Trigger <Popover.Indicator /></Popover.Trigger>
  <Popover.Anchor />

  <Popover.Positioner>
    <Popover.Content>
      <Popover.Arrow>
        <Popover.ArrowTip />
      </Popover.Arrow>
      <Popover.Title>Title</Popover.Title>
      <Popover.Description>Description</Popover.Description>
      <Popover.CloseTrigger>Close</Popover.CloseTrigger>
    </Popover.Content>
  </Popover.Positioner>
</Popover.Root>
