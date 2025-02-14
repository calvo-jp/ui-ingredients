<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import {Popover, Portal} from 'ui-ingredients';
</script>

<Popover.Root
  lazyMount
  positioning={{
    placement: 'bottom',
  }}
>
  <Popover.Trigger class="mx-auto w-auto">
    {#snippet asChild(attrs)}
      <Button variant="outline" {...attrs}>Toggle popover</Button>
    {/snippet}
  </Popover.Trigger>

  <Portal>
    <Popover.Positioner>
      <Popover.Content
        class="w-[80vw] rounded border border-neutral-200 bg-white p-4 ui-open:animate-fade-in ui-closed:animate-fade-out dark:border-neutral-800 dark:bg-neutral-900 lg:w-[20rem]"
      >
        <Popover.Arrow
          class="[--arrow-background:var(--color-white)] [--arrow-size:--spacing(4)] dark:[--arrow-background:var(--color-neutral-900)]"
        >
          <Popover.ArrowTip />
        </Popover.Arrow>

        <Popover.Title class="text-lg font-medium">Title</Popover.Title>
        <Popover.Description class="text-neutral-600 dark:text-neutral-400"
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
