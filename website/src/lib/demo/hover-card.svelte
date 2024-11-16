<script lang="ts">
  import {HoverCard, Portal} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
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
          class="w-[90vw] rounded border border-neutral-800 bg-neutral-900 p-4 data-open:animate-fade-in data-closed:animate-fade-out lg:max-w-[24rem]"
        >
          <HoverCard.Arrow
            class="[--arrow-background:theme(colors.neutral[900])] [--arrow-size:theme(spacing.4)]"
          >
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis
          natus neque, tenetur praesentium laboriosam esse eius at maxime quam
          magni rerum animi ducimus debitis?
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>
</Container>
