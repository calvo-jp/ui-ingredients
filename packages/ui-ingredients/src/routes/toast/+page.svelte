<script lang="ts">
  import {toaster} from '../toaster.js';
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
