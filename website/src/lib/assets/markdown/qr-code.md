---
title: Qr Code
description: A component for generating and displaying QR codes for quick scanning and access to information.
---

<script>
  import {QrCodeDemo} from '$lib/demo';
  import {Api} from '$lib/api';
  import {Anatomy} from '$lib/anatomy';
  import Metadata from '$lib/metadata.svelte';
  import PageHeading from '$lib/page-heading.svelte';
</script>

<svelte:head>

  <title>UI Ingredients | {title}</title>
</svelte:head>

<Metadata title="{title}" description="{description}" />
<PageHeading title="{title}" description="{description}" />

<QrCodeDemo />

## Anatomy

<Anatomy id="qr-code" />

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

<Api id="qr-code" />
