<script lang="ts">
  import {Avatar} from '$lib/index.js';

  interface Props {
    src: string;
    name: string;
  }

  let {src, name}: Props = $props();
</script>

<Avatar.Root>
  <Avatar.Image {src} />
  <Avatar.Fallback>{name}</Avatar.Fallback>
</Avatar.Root>
