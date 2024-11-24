<script lang="ts">
  import {Avatar} from 'ui-ingredients';
  import Container from './container.svelte';

  let users = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
    {
      id: 3,
      name: 'John Smith',
    },
  ];

  function getInitials(name: string) {
    return name
      .trim()
      .split(' ')
      .map((n) => n[0])
      .join('');
  }
</script>

<Container class="flex justify-center">
  {#each users as user}
    <Avatar.Root
      class="-mx-2 grid size-16 place-items-center overflow-hidden rounded-full border-4 border-neutral-50 bg-neutral-200 text-xl font-bold dark:border-neutral-950 dark:bg-neutral-700"
    >
      <Avatar.Image src="https://i.pravatar.cc/300?u={user.id}" alt="" />
      <Avatar.Fallback>{getInitials(user.name)}</Avatar.Fallback>
    </Avatar.Root>
  {/each}
</Container>
