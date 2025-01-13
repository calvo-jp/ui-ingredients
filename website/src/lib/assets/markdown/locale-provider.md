---
title: Locale Provider
description: A component for providing locale information to the rest of the application.
---

## Usage

```svelte
<!-- src/+layout.svelte -->
<script>
  import {LocaleProvider} from 'ui-ingredients';

  let {children} = $props();
</script>

<LocaleProvider locale="en-US">
  {@render children()}
</LocaleProvider>
```
