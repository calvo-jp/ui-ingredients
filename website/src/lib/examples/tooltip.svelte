<script lang="ts">
  import {Button} from '$lib/ui';
  import {Portal, Tooltip} from 'ui-ingredients';
</script>

<Tooltip.Root lazyMount>
  <Tooltip.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Hover me</Button>
    {/snippet}
  </Tooltip.Trigger>

  <Portal>
    <Tooltip.Positioner>
      <Tooltip.Content
        class="bg-light rounded px-3.5 py-2.5 shadow-md data-open:animate-fade-in data-closed:animate-fade-out"
      >
        <Tooltip.Arrow
          class="[--arrow-background:theme(colors.neutral[800])] [--arrow-size:theme(spacing.4)]"
        >
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>

        <span>I am a tooltip</span>
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
