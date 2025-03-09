<script lang="ts">
  import {Alert} from '$lib/index.js';
  import InfoCircleIcon from '../info-circle-icon.svelte';
</script>

<Alert.Root>
  <Alert.Indicator>
    <InfoCircleIcon style="width:20px;height:20px;" />
  </Alert.Indicator>
  <Alert.Title>Title</Alert.Title>
  <Alert.Description>Description</Alert.Description>
</Alert.Root>

<style>
  :global([data-scope='alert'][data-part='root']) {
    max-width: 375px;
    border: 1px solid var(--border-default);
    padding: 12px;
    display: grid;
    column-gap: 12px;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(2, auto);
  }

  :global([data-scope='alert'][data-part='indicator']) {
    grid-row: span 2;
  }

  :global([data-scope='alert'][data-part='title']) {
    font-size: 18px;
    font-weight: semibold;
  }

  :global([data-scope='alert'][data-part='description']) {
    font-size: 14px;
    color: var(--color-muted);
  }
</style>
