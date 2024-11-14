<script lang="ts">
  import {Button, toaster} from '$lib/ui';
</script>

<Button
  onclick={() => {
    toaster.create({
      title: 'Yesss!',
      description: 'This is a toast message',
    });
  }}
>
  Click me
</Button>
