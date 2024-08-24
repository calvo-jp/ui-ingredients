<script lang="ts">
  import {toaster} from '../shared/toaster.svelte.js';

  function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
</script>

<button
  class="h-11 border px-3.5"
  onclick={() => {
    toaster.create({
      title: `Hello ${randInt(1, 100)}`,
      description: 'This is a toast message',
    });
  }}
>
  Create
</button>
