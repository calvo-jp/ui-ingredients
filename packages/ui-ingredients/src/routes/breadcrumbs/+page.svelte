<script lang="ts">
  import {Breadcrumbs} from '$lib/index.js';
</script>

<Breadcrumbs.Root>
  <Breadcrumbs.List class="flex gap-1">
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link class="aria-page:text-indigo-400 font-medium" href="#">
        Home
      </Breadcrumbs.Link>
      <Breadcrumbs.Separator class="opacity-35">/</Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link class="aria-page:text-indigo-400 font-medium" href="#">
        Components
      </Breadcrumbs.Link>
      <Breadcrumbs.Separator class="opacity-35">/</Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link
        class="aria-page:text-indigo-400 font-medium"
        href="#"
        current
      >
        Breadcrumbs
      </Breadcrumbs.Link>
    </Breadcrumbs.Item>
  </Breadcrumbs.List>
</Breadcrumbs.Root>
