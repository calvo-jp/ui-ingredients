<script lang="ts">
  import {Breadcrumbs} from '$lib/index.js';
</script>

<Breadcrumbs.Root>
  <Breadcrumbs.List>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      <Breadcrumbs.Separator class="opacity-35">/</Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
      <Breadcrumbs.Separator class="opacity-35">/</Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item class="contents">
      <Breadcrumbs.Link href="#" current>Breadcrumbs</Breadcrumbs.Link>
    </Breadcrumbs.Item>
  </Breadcrumbs.List>
</Breadcrumbs.Root>
