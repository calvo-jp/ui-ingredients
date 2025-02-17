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
