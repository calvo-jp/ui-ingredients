<script lang="ts">
  import {Popover} from '$lib/index.js';
</script>

<Popover.Root
  positioning={{
    placement: 'bottom-start',
  }}
>
  <Popover.Trigger class="h-11 border px-3">Click me</Popover.Trigger>
  <Popover.Positioner>
    <Popover.Content
      class="data-open:animate-fade-in data-closed:animate-fade-out w-[20rem] border bg-neutral-800 p-4"
    >
      <Popover.Title class="text-neutral-300">Title</Popover.Title>
      <Popover.Description class="text-sm text-neutral-500"
        >Description</Popover.Description
      >
      <Popover.CloseTrigger class="mt-3 h-10 w-full border px-3.5"
        >Close</Popover.CloseTrigger
      >
    </Popover.Content>
  </Popover.Positioner>
</Popover.Root>
