---
name: QrCode
description: A component for generating and displaying QR codes for quick scanning and access to information.
---

```svelte
<script lang="ts">
  import {QrCode} from 'ui-ingredients';
</script>

<QrCode.Root value="Your value here">
  <QrCode.Frame>
    <QrCode.Pattern />
  </QrCode.Frame>
</QrCode.Root>
```
