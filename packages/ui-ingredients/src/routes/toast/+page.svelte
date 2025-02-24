<script lang="ts">
  import {toaster} from '../toaster.svelte.js';
</script>

<button
  onclick={() => {
    toaster.create({
      title: 'Yesss!',
      description: 'This is a toast message',
    });
  }}
>
  Click me
</button>
