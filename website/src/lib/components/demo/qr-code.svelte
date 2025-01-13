<script lang="ts">
  import {QrCode} from 'ui-ingredients';
</script>

<QrCode.Root
  value="UI Ingredients"
  class="mx-auto w-fit border border-neutral-200 dark:border-0"
>
  <QrCode.Frame
    class="h-[var(--qrcode-height)] w-[var(--qrcode-width)] bg-white"
  >
    <QrCode.Pattern class="size-full" />
  </QrCode.Frame>
</QrCode.Root>
