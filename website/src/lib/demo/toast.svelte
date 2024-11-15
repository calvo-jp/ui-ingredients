<script lang="ts">
  import {Button} from '$lib/ui';
  import Container from './container.svelte';
</script>

<Container>
  <Button
    onclick={() => {
      // toaster.create({
      //   title: 'Yesss!',
      //   description: 'This is a toast message',
      // });
    }}
  >
    Click me
  </Button>
</Container>
