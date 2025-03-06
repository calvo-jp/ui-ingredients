<script lang="ts">
  import {HoverCard} from '$lib/index.js';
</script>

<HoverCard.Root
  lazyMount
  keepMounted={false}
  positioning={{
    placement: 'bottom-start',
  }}
>
  <HoverCard.Trigger href="#">UI Ingredients</HoverCard.Trigger>
  <HoverCard.Positioner>
    <HoverCard.Content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis natus
      neque, tenetur praesentium laboriosam esse eius at maxime quam magni rerum
      animi ducimus debitis?
    </HoverCard.Content>
  </HoverCard.Positioner>
</HoverCard.Root>

<style>
  :global([data-scope='hover-card'][data-part='trigger']) {
    color: oklch(0.588 0.158 241.966);
    display: inline-block;
    text-decoration: underline;
    text-underline-offset: 2px;
    font-weight: 500;
  }

  :global([data-scope='hover-card'][data-part='content']) {
    max-width: 400px;
    padding: 12px;
    border: 1px solid var(--border-default);
    background: white;
  }

  :global([data-scope='hover-card'][data-part='content'][data-state='open']) {
    animation: fade-in 250ms;
  }

  :global([data-scope='hover-card'][data-part='content'][data-state='closed']) {
    animation: fade-out 150ms;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
