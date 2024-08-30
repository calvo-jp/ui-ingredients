<script lang="ts">
  import {Popover} from '$lib/index.js';
  import {Button} from '../shared/index.js';
</script>

<Popover.Root
  positioning={{
    placement: 'bottom-start',
  }}
>
  <Popover.Trigger>
    {#snippet asChild(mergedProps)}
      <Button {...mergedProps}>Click me</Button>
    {/snippet}
  </Popover.Trigger>
  <Popover.Positioner>
    <Popover.Content
      class="data-open:animate-fade-in data-closed:animate-fade-out bg-light w-[80vw] rounded border p-4 lg:w-[20rem]"
    >
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
</Popover.Root>
