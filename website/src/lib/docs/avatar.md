---
name: Avatar
description: A visual component for displaying a user’s profile image or initials.
---

## Usage

```svelte
<script lang="ts">
  import {Avatar} from 'ui-ingredients';
</script>

<Avatar.Root>
  <Avatar.Image src="https://i.pravatar.cc/300" alt="" />
  <Avatar.Fallback>JD</Avatar.Fallback>
</Avatar.Root>
```