<script lang="ts">
  import {Breadcrumbs} from '$lib/index.js';
</script>

<Breadcrumbs.Root>
  <Breadcrumbs.List>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
      <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/components">Components</Breadcrumbs.Link>
      <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/components/breadcrumbs" current>
        Breadcrumbs
      </Breadcrumbs.Link>
    </Breadcrumbs.Item>
  </Breadcrumbs.List>
</Breadcrumbs.Root>
