<script lang="ts">
  import {Collapsible} from '$lib/index.js';

  interface Props {
    content: string;
  }

  let {content}: Props = $props();
</script>

<Collapsible.Root>
  <Collapsible.Trigger>Toggle</Collapsible.Trigger>
  <Collapsible.Content>{content}</Collapsible.Content>
</Collapsible.Root>
