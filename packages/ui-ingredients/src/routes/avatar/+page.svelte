<script lang="ts">
  import {Avatar} from '$lib/index.js';
</script>

<Avatar.Root>
  <Avatar.Image src="https://i.pravatar.cc/300" alt="" />
  <Avatar.Fallback>JP</Avatar.Fallback>
</Avatar.Root>

<style>
  :global([data-scope='avatar'][data-part='root']) {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: oklch(0.97 0 0);
  }

  :global([data-scope='avatar'][data-part='image']) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :global([data-scope='avatar'][data-part='fallback']) {
    font-size: 20px;
    font-weight: 700;
  }
</style>
