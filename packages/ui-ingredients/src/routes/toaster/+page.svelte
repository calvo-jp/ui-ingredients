<script lang="ts">
  import {Button, toaster} from '../shared/index.js';
</script>

<Button
  onclick={() => {
    toaster.create({
      title: 'Yesss!',
      description: 'This is a toast message',
    });
  }}
>
  Create
</Button>
