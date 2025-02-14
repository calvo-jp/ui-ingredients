<script lang="ts">
  import {HoverCard, Portal} from 'ui-ingredients';
</script>

<HoverCard.Root
  lazyMount
  positioning={{
    placement: 'bottom',
  }}
>
  <HoverCard.Trigger
    class="mx-auto block w-fit font-semibold underline-offset-2 hover:underline"
  >
    {#snippet asChild(attrs)}
      <button {...attrs}>@ui-ingredients</button>
    {/snippet}
  </HoverCard.Trigger>

  <Portal>
    <HoverCard.Positioner>
      <HoverCard.Content
        class="w-[90vw] rounded border border-neutral-200 bg-white p-4 ui-open:animate-fade-in ui-closed:animate-fade-out dark:border-neutral-800 dark:bg-neutral-900 lg:max-w-[24rem]"
      >
        <HoverCard.Arrow
          class="[--arrow-background:var(--color-white)] [--arrow-size:--spacing(4)] dark:[--arrow-background:var(--color-neutral-900)]"
        >
          <HoverCard.ArrowTip />
        </HoverCard.Arrow>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis natus
        neque, tenetur praesentium laboriosam esse eius at maxime quam magni
        rerum animi ducimus debitis?
      </HoverCard.Content>
    </HoverCard.Positioner>
  </Portal>
</HoverCard.Root>
