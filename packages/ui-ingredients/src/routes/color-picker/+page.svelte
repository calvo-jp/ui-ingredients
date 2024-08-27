<script lang="ts">
  import {ColorPicker} from '$lib/index.js';
</script>

<ColorPicker.Root>
  <ColorPicker.Label class="mb-1 inline-block text-neutral-400">Color</ColorPicker.Label>
  <ColorPicker.Control class="flex gap-2">
    <ColorPicker.ChannelInput channel="hex" class="h-11 border px-3" />
    <ColorPicker.ChannelInput channel="alpha" class="h-11 border px-3" />
    <ColorPicker.Trigger class="size-11 p-2">
      <ColorPicker.TransparencyGrid />
    </ColorPicker.Trigger>
  </ColorPicker.Control>

  <ColorPicker.Positioner>
    <ColorPicker.Content class="border bg-neutral-800 p-5">
      <ColorPicker.Area class="relative aspect-square w-full">
        <ColorPicker.AreaBackground class="absolute inset-0 size-full" />
        <ColorPicker.AreaThumb class="size-4 rounded-full border-2 border-white" />
      </ColorPicker.Area>

      <div class="mt-5">
        <ColorPicker.ChannelSlider channel="hue" class="relative">
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb class="size-10 rounded-full bg-white" />
        </ColorPicker.ChannelSlider>
        <ColorPicker.ChannelSlider channel="alpha">
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>
      </div>

      <div class="flex gap-2">
        <ColorPicker.EyeDropperTrigger
          class="flex size-10 shrink-0 items-center justify-center border bg-neutral-700"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M10.5 6.49981L17.5 13.4998M2 21.9998C2 21.9998 6.5 21.4998 9 18.9998L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99982C19.8954 1.89525 18.1046 1.89524 17 2.99981L5 14.9998C2.5 17.4998 2 21.9998 2 21.9998Z"
            ></path>
          </svg>
        </ColorPicker.EyeDropperTrigger>

        <ColorPicker.SwatchGroup class="relative grow">
          <ColorPicker.Swatch value="red" class="relative">
            <ColorPicker.SwatchTrigger value="red">
              <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.Swatch>
          <ColorPicker.Swatch value="blue" class="relative">
            <ColorPicker.SwatchTrigger>
              <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.Swatch>
          <ColorPicker.Swatch value="green" class="relative">
            <ColorPicker.SwatchTrigger>
              <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.Swatch>
        </ColorPicker.SwatchGroup>
      </div>

      <div class="mt-3 flex flex-col gap-2">
        <ColorPicker.ChannelInput channel="hex" class="h-11 border px-3" />
        <ColorPicker.ChannelInput channel="alpha" class="h-11 border px-3" />
      </div>

      <div class="mt-3 flex gap-2">
        <ColorPicker.ChannelInput channel="hue" class="h-11 border px-3" />
        <ColorPicker.ChannelInput channel="saturation" class="h-11 border px-3" />
        <ColorPicker.ChannelInput channel="lightness" class="h-11 border px-3" />
      </div>
    </ColorPicker.Content>
  </ColorPicker.Positioner>

  <ColorPicker.HiddenInput />
</ColorPicker.Root>
