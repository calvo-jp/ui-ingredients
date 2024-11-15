<script lang="ts">
  import {Breadcrumbs} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Breadcrumbs.Root class="mx-auto w-fit">
    <Breadcrumbs.List class="flex gap-1">
      <Breadcrumbs.Item class="contents">
        <Breadcrumbs.Link
          class="font-medium text-neutral-400 no-underline aria-page:text-indigo-400"
          href="#"
        >
          Home
        </Breadcrumbs.Link>
        <Breadcrumbs.Separator class="text-neutral-700">/</Breadcrumbs.Separator
        >
      </Breadcrumbs.Item>
      <Breadcrumbs.Item class="contents">
        <Breadcrumbs.Link
          class="font-medium text-neutral-400 no-underline aria-page:text-indigo-400"
          href="#"
        >
          Components
        </Breadcrumbs.Link>
        <Breadcrumbs.Separator class="text-neutral-700">/</Breadcrumbs.Separator
        >
      </Breadcrumbs.Item>
      <Breadcrumbs.Item class="contents">
        <Breadcrumbs.Link
          class="font-medium text-neutral-400 no-underline aria-page:text-indigo-400"
          href="#"
          current
        >
          Breadcrumbs
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs.List>
  </Breadcrumbs.Root>
</Container>
