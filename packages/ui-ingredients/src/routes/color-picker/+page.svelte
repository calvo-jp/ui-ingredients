<script lang="ts">
  import {ColorPicker} from '$lib/index.js';
</script>

<ColorPicker.Root>
  <ColorPicker.Label>Color</ColorPicker.Label>
  <ColorPicker.Control>
    <ColorPicker.ChannelInput channel="hex" />
    <ColorPicker.ChannelInput channel="alpha" />
    <ColorPicker.ValueText />
    <ColorPicker.Trigger>
      <ColorPicker.TransparencyGrid />
      x
    </ColorPicker.Trigger>
  </ColorPicker.Control>

  <ColorPicker.Positioner>
    <ColorPicker.Content>
      <ColorPicker.Area>
        <ColorPicker.AreaBackground />
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>

      <ColorPicker.ChannelSlider channel="hue">
        <ColorPicker.ChannelSliderTrack />
        <ColorPicker.ChannelSliderThumb />
      </ColorPicker.ChannelSlider>
      <ColorPicker.ChannelSlider channel="alpha">
        <ColorPicker.TransparencyGrid />
        <ColorPicker.ChannelSliderTrack />
        <ColorPicker.ChannelSliderThumb />
      </ColorPicker.ChannelSlider>

      <ColorPicker.SwatchGroup>
        <ColorPicker.Swatch value="red">
          <ColorPicker.SwatchTrigger value="red">
            <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.Swatch>
        <ColorPicker.Swatch value="blue">
          <ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.Swatch>
        <ColorPicker.Swatch value="green">
          <ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.Swatch>
      </ColorPicker.SwatchGroup>

      <div>
        <ColorPicker.ChannelInput channel="hex" />
        <ColorPicker.ChannelInput channel="alpha" />
      </div>
      <div>
        <ColorPicker.ChannelInput channel="hue" />
        <ColorPicker.ChannelInput channel="saturation" />
        <ColorPicker.ChannelInput channel="lightness" />
      </div>

      <ColorPicker.EyeDropperTrigger>Pick color</ColorPicker.EyeDropperTrigger>
    </ColorPicker.Content>
  </ColorPicker.Positioner>

  <ColorPicker.HiddenInput />
</ColorPicker.Root>
