<script lang="ts">
  import {Avatar} from '$lib/index.js';
</script>

<Avatar.Root
  class="bg-light grid size-16 place-items-center overflow-hidden rounded-full text-xl font-bold"
>
  <Avatar.Image src="https://i.pravatar.cc/300" alt="" />
  <Avatar.Fallback>JP</Avatar.Fallback>
</Avatar.Root>
