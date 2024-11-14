<script lang="ts">
  import {AlertCircleIcon} from '@untitled-theme/icons-svelte';
  import {Alert} from 'ui-ingredients';
</script>

<Alert.Root
  class="flex max-w-[24rem] gap-2.5 rounded border bg-neutral-900/50 p-4"
>
  <Alert.Indicator>
    <AlertCircleIcon class="size-5" />
  </Alert.Indicator>
  <div>
    <Alert.Title class="font-semibold leading-none">Title</Alert.Title>
    <Alert.Description class="text-muted mt-1 text-sm leading-none">
      Description
    </Alert.Description>
  </div>
</Alert.Root>
