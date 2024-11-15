<script lang="ts">
  import {ANATOMY_ICONS, type AnatomyIcon} from './anatomy-icons';

  let {id}: {id: AnatomyIcon} = $props();
  let content = $derived(ANATOMY_ICONS[id]);
</script>

{@html content}
