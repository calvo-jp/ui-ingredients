---
name: Alert
description: A component for displaying important messages or notifications.
---

## Usage

```svelte
<script lang="ts">
  import {Alert} from 'ui-ingredients';
  import {AlertCircleIcon} from '$lib/icons';
</script>

<Alert.Root>
  <Alert.Indicator>
    <AlertCircleIcon />
  </Alert.Indicator>
  <Alert.Title>Title</Alert.Title>
  <Alert.Description>Description</Alert.Description>
</Alert.Root>
```