<script lang="ts">
  import {Collapsible} from '$lib/index.js';

  let open = $state(false);

  $inspect({open});
</script>

<Collapsible.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
>
  <Collapsible.Trigger>Click me</Collapsible.Trigger>
  <Collapsible.Content>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit
    optio, eaque laborum nesciunt dolores temporibus accusantium neque quasi
    dolore, id itaque architecto libero voluptatem laboriosam soluta nobis
    consectetur earum?
  </Collapsible.Content>
</Collapsible.Root>

<style>
  :global([data-scope='collapsible'][data-part='root']) {
    max-width: 400px;
  }

  :global([data-scope='collapsible'][data-part='trigger']) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='collapsible'][data-part='content']) {
    margin-top: 8px;
    color: var(--color-muted);
    overflow: hidden;
  }

  :global([data-scope='collapsible'][data-part='content'][data-state='open']) {
    animation: fade-collapse-in 250ms;
  }

  :global(
    [data-scope='collapsible'][data-part='content'][data-state='closed']
  ) {
    animation: fade-collapse-out 150ms;
  }

  @keyframes fade-collapse-in {
    from {
      opacity: 0;
      height: 0;
    }
    to {
      opacity: 1;
      height: var(--height);
    }
  }

  @keyframes fade-collapse-out {
    from {
      opacity: 1;
      height: var(--height);
    }
    to {
      opacity: 0;
      height: 0;
    }
  }
</style>
