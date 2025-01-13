---
title: Breadcrumbs
description: A component for displaying the navigation path or hierarchy of a user's location within a site.
---

## Usage

```svelte
<script>
  import {Breadcrumbs} from 'ui-ingredients';
  import {ChevronRightIcon} from '$lib/icons';
</script>

<Breadcrumbs.Root>
  <Breadcrumbs.List>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
      <Breadcrumbs.Separator>
        <ChevronRightIcon />
      </Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/components">Components</Breadcrumbs.Link>
      <Breadcrumbs.Separator>
        <ChevronRightIcon />
      </Breadcrumbs.Separator>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/components/breadcrumbs" current>
        Breadcrumbs
      </Breadcrumbs.Link>
    </Breadcrumbs.Item>
  </Breadcrumbs.List>
</Breadcrumbs.Root>
```
