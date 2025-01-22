---
id: qr-code
title: Qr Code
description: A component for generating and displaying QR codes for quick scanning and access to information.
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {QrCode} from 'ui-ingredients';
</script>

<QrCode.Root value="https://ui-ingredients.vercel.app">
  <QrCode.Frame>
    <QrCode.Pattern />
  </QrCode.Frame>
  <QrCode.DownloadTrigger>Download</QrCode.DownloadTrigger>
</QrCode.Root>
```

## API Reference

<api>
