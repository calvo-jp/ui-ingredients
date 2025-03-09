<script lang="ts">
  import {QrCode} from '$lib/index.js';
</script>

<QrCode.Root value="UI Ingredients">
  <QrCode.Frame>
    <QrCode.Pattern />
  </QrCode.Frame>

  <QrCode.DownloadTrigger
    fileName="qr-code.png"
    mimeType="image/png"
    quality={0.8}
  >
    Download
  </QrCode.DownloadTrigger>
</QrCode.Root>

<style>
  :global([data-scope='qr-code'][data-part='root']) {
    max-width: 325px;
  }

  :global([data-scope='qr-code'][data-part='frame']) {
    border: 1px solid var(--border-default);
  }

  :global([data-scope='qr-code'][data-part='download-trigger']) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    width: 100%;
    border: 1px solid var(--border-default);
    margin-top: 12px;
  }
</style>
