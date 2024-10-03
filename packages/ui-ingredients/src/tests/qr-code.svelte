<script lang="ts">
  import {QrCode} from '$lib/index.js';
  import {faker} from '@faker-js/faker';
</script>

<QrCode.Root value="UI Ingredients">
  <QrCode.Frame>
    <QrCode.Pattern />
  </QrCode.Frame>
  <QrCode.Overlay>
    <img src={faker.image.url()} alt="" />
  </QrCode.Overlay>
</QrCode.Root>
