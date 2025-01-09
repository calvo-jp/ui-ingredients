<script lang="ts">
  import {Popover, Portal} from '$lib/index.js';
  import {Button} from '../shared/index.js';
</script>

<Popover.Root
  positioning={{
    placement: 'bottom-start',
  }}
  lazyMount
>
  <Popover.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Click me</Button>
    {/snippet}
  </Popover.Trigger>

  <Portal>
    <Popover.Positioner>
      <Popover.Content
        class="bg-light data-open:animate-fade-in data-closed:animate-fade-out w-[80vw] rounded border p-4 lg:w-[20rem]"
      >
        <Popover.Arrow
          class="[--arrow-background:theme(colors.neutral[800])] [--arrow-size:theme(spacing.4)]"
        >
          <Popover.ArrowTip />
        </Popover.Arrow>

        <Popover.Title class="font-medium">Title</Popover.Title>
        <Popover.Description class="text-muted text-sm"
          >Description</Popover.Description
        >
        <Popover.CloseTrigger
          class="border-lighter mt-3 h-12 w-full rounded border px-3.5"
        >
          Close
        </Popover.CloseTrigger>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
