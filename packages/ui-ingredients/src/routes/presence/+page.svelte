<script lang="ts">
  import {Presence} from '$lib/index.js';

  let present = $state(false);

  $inspect({present});
</script>

<button
  onclick={() => {
    present = !present;
  }}
  style="padding: 0px 14px; border: 1px solid var(--border-default); height: 40px;"
>
  Click me
</button>

<Presence {present} lazyMount keepMounted={false}>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eligendi
  corrupti veniam maxime rem eaque praesentium dignissimos asperiores. Beatae
  modi nihil delectus eaque! Ipsam.
</Presence>

<style>
  :global([data-scope='presence'][data-part='root']) {
    margin-top: 12px;
    max-width: 400px;
  }

  :global([data-scope='presence'][data-part='root'][data-state='open']) {
    animation: fade-in 250ms;
  }

  :global([data-scope='presence'][data-part='root'][data-state='closed']) {
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
