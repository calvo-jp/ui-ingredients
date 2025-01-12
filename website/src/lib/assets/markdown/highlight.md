---
title: Highlight
description: A component for highlighting text within a string.
---

# Highlight

A component for highlighting text within a string.

## Usage

```svelte
<script>
  import {Highlight} from 'ui-ingredients';

  let text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente consequatur, eos explicabo architecto exercitationem? Consequuntur repellat laboriosam ullam adipisci?';
</script>

<Highlight {text} query="consectetur" />
```
