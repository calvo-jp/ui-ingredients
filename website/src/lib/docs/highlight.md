---
name: Highlight
description: A component for highlighting text within a string.
---

```svelte
<script lang="ts">
  import {Highlight} from 'ui-ingredients';

  let text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente consequatur, eos explicabo architecto exercitationem? Consequuntur repellat laboriosam ullam adipisci?';
</script>

<Highlight {text} query="consectetur" />
```