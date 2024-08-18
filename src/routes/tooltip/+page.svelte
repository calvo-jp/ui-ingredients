<script lang="ts">
  import {Portal, Tooltip} from '$lib/index.js';
</script>

<Tooltip.Root openDelay={0} closeDelay={50}>
  <Tooltip.Trigger class="h-11 px-3 border">Hover me</Tooltip.Trigger>
  <Portal>
    <Tooltip.Positioner>
      <Tooltip.Content
        class="bg-gray-900 px-3.5 py-2.5 shadow-md text-gray-100 rounded-lg data-open:animate-fade-in data-closed:animate-fade-out"
      >
        <Tooltip.Arrow
          class="[--arrow-size:theme(spacing.4)] data-closed:hidden [--arrow-background:theme(colors.gray[900])]"
        >
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>

        <span>I am a tooltip</span>
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
