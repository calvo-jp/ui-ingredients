<script lang="ts">
  import ClipboardControl from './clipboard-control.svelte';
  import ClipboardIndicator from './clipboard-indicator.svelte';
  import ClipboardInput from './clipboard-input.svelte';
  import ClipboardLabel from './clipboard-label.svelte';
  import ClipboardRoot from './clipboard-root.svelte';
  import ClipboardTrigger from './clipboard-trigger.svelte';

  let {value}: {value: string} = $props();
</script>

<ClipboardRoot {value}>
  <ClipboardLabel>Label</ClipboardLabel>

  <ClipboardControl>
    <ClipboardInput />

    <ClipboardTrigger>
      <ClipboardIndicator>Copy</ClipboardIndicator>
      <ClipboardIndicator copied>Copied</ClipboardIndicator>
    </ClipboardTrigger>
  </ClipboardControl>
</ClipboardRoot>
