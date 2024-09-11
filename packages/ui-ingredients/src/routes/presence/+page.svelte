<script lang="ts">
  import {Presence} from '$lib/index.js';

  let present = $state(false);
</script>

<div class="mb-4">
  <button
    type="button"
    onclick={() => {
      present = !present;
    }}
    class="h-12 rounded border px-3.5"
  >
    Toggle
  </button>
</div>

<Presence
  {present}
  lazyMount
  keepMounted={false}
  class="data-open:animate-fade-in data-closed:animate-fade-out max-w-[32rem] rounded border p-5"
>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eligendi
  corrupti veniam maxime rem eaque praesentium dignissimos asperiores. Beatae
  modi nihil delectus eaque! Ipsam.
</Presence>
