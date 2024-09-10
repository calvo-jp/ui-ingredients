<script lang="ts">
  import {HoverCard, Portal} from '$lib/index.js';
</script>

<HoverCard.Root
  lazyMount
  keepMounted={false}
  positioning={{
    placement: 'bottom-start',
  }}
>
  <HoverCard.Trigger class="underline-offset-2 hover:underline">
    {#snippet asChild(attrs)}
      <button {...attrs}>Hover me</button>
    {/snippet}
  </HoverCard.Trigger>

  <Portal data-id="hover-card">
    <HoverCard.Positioner>
      <HoverCard.Content
        class="bg-light data-open:animate-fade-in data-closed:animate-fade-out w-[90vw] rounded border p-4 lg:max-w-[24rem]"
      >
        <HoverCard.Arrow
          class="[--arrow-background:theme(colors.neutral[800])] [--arrow-size:theme(spacing.4)]"
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
