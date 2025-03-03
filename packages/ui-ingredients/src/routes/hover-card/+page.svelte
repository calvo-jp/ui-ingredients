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
  <HoverCard.Trigger href="#">Hover me</HoverCard.Trigger>

  <HoverCard.Positioner>
    <HoverCard.Content>
      <HoverCard.Arrow>
        <HoverCard.ArrowTip />
      </HoverCard.Arrow>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis natus
      neque, tenetur praesentium laboriosam esse eius at maxime quam magni rerum
      animi ducimus debitis?
    </HoverCard.Content>
  </HoverCard.Positioner>
</HoverCard.Root>

<style>
  :global([data-scope='hover-card'][data-part='trigger']) {
    display: inline-flex;
    align-items: center;
    padding: 0px 14px;
    height: 40px;
    border: 1px solid var(--border-default);
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
