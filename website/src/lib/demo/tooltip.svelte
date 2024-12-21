<script lang="ts">
  import {Button} from '$lib/ui';
  import {Portal, Tooltip} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Tooltip.Root lazyMount>
    <Tooltip.Trigger class="mx-auto w-auto">
      {#snippet asChild(attrs)}
        <Button variant="outline" {...attrs}>Hover me</Button>
      {/snippet}
    </Tooltip.Trigger>

    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content
          class="rounded border border-neutral-200 bg-white px-3.5 py-2.5 ui-open:animate-fade-in ui-closed:animate-fade-out dark:border-neutral-800 dark:bg-neutral-900"
        >
          <Tooltip.Arrow
            class="[--arrow-background:theme(colors.white)] [--arrow-size:theme(spacing.4)] dark:[--arrow-background:theme(colors.neutral[900])]"
          >
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>

          <span>I am a tooltip</span>
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
</Container>
