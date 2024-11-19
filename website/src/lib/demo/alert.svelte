<script lang="ts">
  import {AlertCircleIcon} from '@untitled-theme/icons-svelte';
  import {Alert} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Alert.Root
    class="mx-auto flex max-w-[24rem] gap-2.5 rounded border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-700/25"
  >
    <Alert.Indicator>
      <AlertCircleIcon class="size-5" />
    </Alert.Indicator>
    <div>
      <Alert.Title class="text-lg font-semibold leading-none">Title</Alert.Title
      >
      <Alert.Description
        class="mt-1 text-sm leading-none text-neutral-600 dark:text-neutral-400"
      >
        Description
      </Alert.Description>
    </div>
  </Alert.Root>
</Container>
