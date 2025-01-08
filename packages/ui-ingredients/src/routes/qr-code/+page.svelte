<script lang="ts">
  import {QrCode} from '$lib/index.js';
</script>

<QrCode.Root value="UI Ingredients">
  <QrCode.Frame
    class="h-[var(--qrcode-height)] w-[var(--qrcode-width)] bg-white"
  >
    <QrCode.Pattern class="size-full" />
  </QrCode.Frame>

  <QrCode.DownloadTrigger
    fileName="qr-code.png"
    mimeType="image/png"
    quality={0.8}
    class="mt-2"
  >
    Download
  </QrCode.DownloadTrigger>
</QrCode.Root>
