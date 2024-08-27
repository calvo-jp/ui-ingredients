<script lang="ts">
  import {Portal, Tooltip} from '$lib/index.js';
</script>

<Tooltip.Root openDelay={0} closeDelay={50}>
  <Tooltip.Trigger class="h-12 rounded border px-3.5">Hover me</Tooltip.Trigger>
  <Portal>
    <Tooltip.Positioner>
      <Tooltip.Content
        class="data-open:animate-fade-in data-closed:animate-fade-out bg-light rounded px-3.5 py-2.5 shadow-md"
      >
        <Tooltip.Arrow
          class="data-closed:hidden [--arrow-background:theme(colors.neutral[800])] [--arrow-size:theme(spacing.4)]"
        >
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>

        <span>I am a tooltip</span>
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
