---
id: alert
title: Alert
description: A component for displaying important messages or notifications.
---

# {title}

{description}

<demo>

## Usage

```svelte
<script>
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

## API Reference

<api>
