<script lang="ts">
  import {Presence} from '$lib/index.js';

  let present = $state(false);

  $inspect({present});
</script>

<button
  onclick={() => {
    present = !present;
  }}
  class="mb-4"
>
  Click me
</button>

<Presence {present} lazyMount keepMounted={false}>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eligendi
  corrupti veniam maxime rem eaque praesentium dignissimos asperiores. Beatae
  modi nihil delectus eaque! Ipsam.
</Presence>
