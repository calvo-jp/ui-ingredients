<script lang="ts">
  import {Avatar} from '$lib/index.js';
</script>

<Avatar.Root
  class="w-10 h-10 grid bg-neutral-700 font-bold place-items-center rounded-full overflow-hidden"
>
  <Avatar.Image src="https://i.pravatar.cc/300" alt="" />
  <Avatar.Fallback>JP</Avatar.Fallback>
</Avatar.Root>
