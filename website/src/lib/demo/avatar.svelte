<script lang="ts">
  import {Avatar} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Avatar.Root
    class="mx-auto grid size-16 place-items-center overflow-hidden rounded-full bg-neutral-100 text-xl font-bold dark:bg-neutral-700/25"
  >
    <Avatar.Image src="https://i.pravatar.cc/300" alt="" />
    <Avatar.Fallback>JP</Avatar.Fallback>
  </Avatar.Root>
</Container>
