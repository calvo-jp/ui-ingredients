<script lang="ts">
  import {Popover} from '$lib/index.js';
</script>

<Popover.Root
  positioning={{
    placement: 'bottom-start',
  }}
>
  <Popover.Trigger class="h-11 px-3 border">Click me</Popover.Trigger>
  <Popover.Positioner>
    <Popover.Content
      class="bg-neutral-800 border p-4 data-open:animate-fade-in data-closed:animate-fade-out w-[20rem]"
    >
      <Popover.Title class="text-neutral-300">Title</Popover.Title>
      <Popover.Description class="text-sm text-neutral-500">Description</Popover.Description>
      <Popover.CloseTrigger class="h-10 mt-3 border w-full px-3.5">Close</Popover.CloseTrigger>
    </Popover.Content>
  </Popover.Positioner>
</Popover.Root>
