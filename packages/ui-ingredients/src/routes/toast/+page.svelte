<script lang="ts">
  import {Button, useToaster} from '../shared/index.js';

  let toaster = useToaster();
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
