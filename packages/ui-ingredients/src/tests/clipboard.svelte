<script lang="ts">
  import {Clipboard} from '$lib/index.js';

  let {value}: {value: string} = $props();
</script>

<Clipboard.Root {value}>
  <Clipboard.Label>Label</Clipboard.Label>

  <Clipboard.Control>
    <Clipboard.Input />

    <Clipboard.Trigger>
      <Clipboard.Indicator>Copy</Clipboard.Indicator>
      <Clipboard.Indicator copied>Copied</Clipboard.Indicator>
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
