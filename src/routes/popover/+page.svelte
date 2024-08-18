<script lang="ts">
  import {Popover} from '$lib/index.js';
</script>

<Popover.Root>
  <Popover.Trigger class="h-11 px-3 border">Click me</Popover.Trigger>
  <Popover.Positioner>
    <Popover.Content
      class="bg-white border px-3.5 py-2.5 data-open:animate-fade-in data-closed:animate-fade-out w-[20rem]"
    >
      <Popover.Title class="text-gray-700">Title</Popover.Title>
      <Popover.Description class="text-sm text-gray-500">Description</Popover.Description>
      <Popover.CloseTrigger class="h-10 mt-3 border w-full px-3.5">Close</Popover.CloseTrigger>
    </Popover.Content>
  </Popover.Positioner>
</Popover.Root>
