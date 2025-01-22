---
id: environment-provider
title: Environment Provider
description: A component for providing environment information to the rest of the application.
---

## Usage

```svelte
<!-- src/+layout.svelte -->
<script>
  import {EnvironmentProvider} from 'ui-ingredients';

  let {children} = $props();
</script>

<EnvironmentProvider rootNode={() => document}>
  {@render children()}
</EnvironmentProvider>
```

## API Reference

<api>
