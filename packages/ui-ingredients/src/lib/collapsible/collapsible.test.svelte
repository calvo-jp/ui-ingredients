<script lang="ts">
  import CollapsibleContent from './collapsible-content.svelte';
  import CollapsibleRoot from './collapsible-root.svelte';
  import CollapsibleTrigger from './collapsible-trigger.svelte';

  interface Props {
    content: string;
  }

  let {content}: Props = $props();
</script>

<CollapsibleRoot>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    {content}
  </CollapsibleContent>
</CollapsibleRoot>
