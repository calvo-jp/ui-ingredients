<script lang="ts">
  import {ColorPicker} from '$lib/index.js';
  import {DropperIcon} from '@untitled-theme/icons-svelte';
</script>

<ColorPicker.Root>
  <ColorPicker.Label class="mb-1 inline-block text-neutral-400"
    >Color</ColorPicker.Label
  >
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
        <ColorPicker.AreaThumb
          class="size-4 rounded-full border-2 border-white"
        />
      </ColorPicker.Area>

      <div class="mt-5">
        <ColorPicker.ChannelSlider channel="hue" class="relative">
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb
            class="size-10 rounded-full bg-white"
          />
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
          <DropperIcon />
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
        <ColorPicker.ChannelInput
          channel="saturation"
          class="h-11 border px-3"
        />
        <ColorPicker.ChannelInput
          channel="lightness"
          class="h-11 border px-3"
        />
      </div>
    </ColorPicker.Content>
  </ColorPicker.Positioner>

  <ColorPicker.HiddenInput />
</ColorPicker.Root>
