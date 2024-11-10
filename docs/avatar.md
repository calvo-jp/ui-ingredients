# Avatar

A visual component for displaying a user’s profile image or initials.

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

## Props

### Root

- `ids`

  The ids of the elements

- `onStatusChange`

  Function called when the image loading status changes.
