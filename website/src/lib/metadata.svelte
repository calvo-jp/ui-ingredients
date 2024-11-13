<script lang="ts">
  interface Props {
    title?: string;
    description?: string;
    image?: string;
  }

  let {title, description, image}: Props = $props();
</script>

<svelte:head></svelte:head>
