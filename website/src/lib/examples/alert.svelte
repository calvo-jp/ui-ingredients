<script lang="ts">
  import {AlertCircleIcon} from '@untitled-theme/icons-svelte';
  import {Alert} from 'ui-ingredients';
</script>

<Alert.Root
  class="mx-auto flex max-w-[24rem] gap-2.5 rounded border border-neutral-700 bg-neutral-700/25 p-4"
>
  <Alert.Indicator>
    <AlertCircleIcon class="size-5" />
  </Alert.Indicator>
  <div>
    <Alert.Title class="text-lg font-semibold leading-none">Title</Alert.Title>
    <Alert.Description class="!mt-1 text-sm leading-none text-neutral-400">
      Description
    </Alert.Description>
  </div>
</Alert.Root>
