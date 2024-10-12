<script lang="ts">
  import {QrCode} from '$lib/index.js';
</script>

<QrCode.Root value="UI Ingredients" class="w-fit rounded bg-white p-2">
  <QrCode.Frame class="h-[var(--qrcode-height)] w-[var(--qrcode-width)]">
    <QrCode.Pattern class="size-full" />
  </QrCode.Frame>
</QrCode.Root>
