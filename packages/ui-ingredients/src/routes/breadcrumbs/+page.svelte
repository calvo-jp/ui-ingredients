<script lang="ts">
  import {Breadcrumbs} from '$lib/index.js';
</script>

<Breadcrumbs.Root>
  <Breadcrumbs.List class="flex gap-1">
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link class="font-medium aria-page:text-indigo-400" href="#">
        Home
      </Breadcrumbs.Link>
      <Breadcrumbs.Separator class="opacity-35">/</Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link class="font-medium aria-page:text-indigo-400" href="#">
        Components
      </Breadcrumbs.Link>
      <Breadcrumbs.Separator class="opacity-35">/</Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link
        class="font-medium aria-page:text-indigo-400"
        href="#"
        current
      >
        Breadcrumbs
      </Breadcrumbs.Link>
    </Breadcrumbs.Item>
  </Breadcrumbs.List>
</Breadcrumbs.Root>
