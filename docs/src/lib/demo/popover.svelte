<script lang="ts">
  import {Button} from '$lib/ui';
  import {Popover, Portal} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Popover.Root
    lazyMount
    positioning={{
      placement: 'bottom',
    }}
  >
    <Popover.Trigger class="mx-auto w-auto">
      {#snippet asChild(attrs)}
        <Button {...attrs}>Toggle popover</Button>
      {/snippet}
    </Popover.Trigger>

    <Portal>
      <Popover.Positioner>
        <Popover.Content
          class="w-[80vw] rounded border border-neutral-800 bg-neutral-900 p-4 data-open:animate-fade-in data-closed:animate-fade-out lg:w-[20rem]"
        >
          <Popover.Arrow
            class="[--arrow-background:theme(colors.neutral[900])] [--arrow-size:theme(spacing.4)]"
          >
            <Popover.ArrowTip />
          </Popover.Arrow>

          <Popover.Title class="text-lg font-medium">Title</Popover.Title>
          <Popover.Description class="text-neutral-400"
            >Description</Popover.Description
          >
          <Popover.CloseTrigger class="mt-3">
            {#snippet asChild(attrs)}
              <Button {...attrs} fullWidth variant="outline">Close</Button>
            {/snippet}
          </Popover.CloseTrigger>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
</Container>
