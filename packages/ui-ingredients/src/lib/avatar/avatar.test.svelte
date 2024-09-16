<script lang="ts">
  import AvatarFallback from './avatar-fallback.svelte';
  import AvatarImage from './avatar-image.svelte';
  import AvatarRoot from './avatar-root.svelte';

  interface Props {
    src: string;
    name: string;
  }

  let {src, name}: Props = $props();
</script>

<AvatarRoot>
  <AvatarImage {src} />
  <AvatarFallback>{name}</AvatarFallback>
</AvatarRoot>
