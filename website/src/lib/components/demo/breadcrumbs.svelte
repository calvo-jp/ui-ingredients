<script lang="ts">
  import {ChevronRightIcon} from '@untitled-theme/icons-svelte';
  import {Breadcrumbs} from 'ui-ingredients';
</script>

<Breadcrumbs.Root class="mx-auto w-fit">
  <Breadcrumbs.List class="flex items-center gap-1">
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link
        class="font-medium text-neutral-600 no-underline ui-current:text-indigo-500 dark:text-neutral-400 dark:ui-current:text-indigo-400"
        href="#"
      >
        Home
      </Breadcrumbs.Link>
      <Breadcrumbs.Separator class="text-neutral-400 dark:text-neutral-700">
        <ChevronRightIcon class="size-4" />
      </Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link
        class="font-medium text-neutral-600 no-underline ui-current:text-indigo-500 dark:text-neutral-400 dark:ui-current:text-indigo-400"
        href="#"
      >
        Components
      </Breadcrumbs.Link>
      <Breadcrumbs.Separator class="text-neutral-400 dark:text-neutral-700">
        <ChevronRightIcon class="size-4" />
      </Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link
        class="font-medium text-neutral-600 no-underline ui-current:text-indigo-500 dark:text-neutral-400 dark:ui-current:text-indigo-400"
        href="#"
        current
      >
        Breadcrumbs
      </Breadcrumbs.Link>
    </Breadcrumbs.Item>
  </Breadcrumbs.List>
</Breadcrumbs.Root>
