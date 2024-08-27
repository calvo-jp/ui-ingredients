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
    class="h-11 border px-3"
  >
    Toggle
  </button>
</div>

<Presence {present} class="data-open:animate-fade-in data-closed:animate-fade-out">
  Hello World
</Presence>
