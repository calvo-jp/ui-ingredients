<script lang="ts">
  import {Avatar} from '$lib/index.js';
</script>

<Avatar.Root
  class="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-neutral-700 font-bold"
>
  <Avatar.Image src="https://i.pravatar.cc/300" alt="" />
  <Avatar.Fallback>JP</Avatar.Fallback>
</Avatar.Root>
