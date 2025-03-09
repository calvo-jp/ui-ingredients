<script lang="ts">
  import {ColorPicker} from '$lib/index.js';
  import DropperIcon from '../dropper-icon.svelte';

  let presets = [
    'hsl(10, 81%, 59%)',
    'hsl(60, 81%, 59%)',
    'hsl(100, 81%, 59%)',
    'hsl(175, 81%, 59%)',
    'hsl(190, 81%, 59%)',
    'hsl(205, 81%, 59%)',
    'hsl(220, 81%, 59%)',
    'hsl(250, 81%, 59%)',
    'hsl(280, 81%, 59%)',
    'hsl(350, 81%, 59%)',
  ];

  let value = $state(ColorPicker.parse('#9863BF'));

  $inspect({value});
</script>

<ColorPicker.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  {#snippet children(context)}
    <ColorPicker.Label>Label</ColorPicker.Label>
    <ColorPicker.Control>
      <ColorPicker.ChannelInput channel="hex" />
      <ColorPicker.Trigger>
        <ColorPicker.Swatch value={context.value} />
      </ColorPicker.Trigger>
    </ColorPicker.Control>
    <ColorPicker.Positioner>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaBackground />
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>

        <div style="margin-top:12px;display:flex;gap:12px;">
          <ColorPicker.EyeDropperTrigger>
            <DropperIcon style="width:20px;height:20px;" />
          </ColorPicker.EyeDropperTrigger>

          <div
            style="height:40px;flex-grow:1;display:grid;grid-rows:repeat(2, 1fr);gap:5px;"
          >
            <ColorPicker.ChannelSlider channel="hue">
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
            <ColorPicker.ChannelSlider channel="alpha">
              <ColorPicker.TransparencyGrid size="8px" />
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
          </div>
        </div>

        <div style="width:100%;margin-top:12px;display:flex;gap:8px;">
          <ColorPicker.ChannelInput channel="hex" style="width:100%;" />
          <ColorPicker.ChannelInput channel="alpha" style="width:100%;" />
        </div>

        <ColorPicker.SwatchGroup>
          {#each presets as color}
            <ColorPicker.SwatchTrigger value={color}>
              <ColorPicker.Swatch value={color} />
            </ColorPicker.SwatchTrigger>
          {/each}
        </ColorPicker.SwatchGroup>
      </ColorPicker.Content>
    </ColorPicker.Positioner>
  {/snippet}
</ColorPicker.Root>

<style>
  :global([data-scope='color-picker'][data-part='root']) {
    width: 325px;
  }

  :global([data-scope='color-picker'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='color-picker'][data-part='control']) {
    display: flex;
    gap: 8px;
  }

  :global([data-scope='color-picker'][data-part='channel-input']) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
    flex-grow: 1;
  }

  :global([data-scope='color-picker'][data-part='channel-slider']) {
    height: 100%;
    position: relative;
  }

  :global([data-scope='color-picker'][data-part='channel-slider-track']) {
    height: 100%;
  }

  :global([data-scope='color-picker'][data-part='channel-slider-thumb']) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    outline: 2px solid white;
  }

  :global([data-scope='color-picker'][data-part='trigger']) {
    width: 40px;
    height: 40px;
    border: 1px solid var(--border-default);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }

  :global([data-scope='color-picker'][data-part='eye-dropper-trigger']) {
    width: 40px;
    height: 40px;
    border: 1px solid var(--border-default);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global([data-scope='color-picker'][data-part='content']) {
    width: 300px;
    border: 1px solid var(--border-default);
    padding: 12px;
    background: white;
  }

  :global([data-scope='color-picker'][data-part='area']) {
    width: 100%;
    aspect-ratio: 16/9;
  }

  :global([data-scope='color-picker'][data-part='area-background']) {
    width: 100%;
    height: 100%;
  }

  :global([data-scope='color-picker'][data-part='area-thumb']) {
    width: 16px;
    height: 16px;
    border: 2px solid white;
    border-radius: 100%;
  }

  :global([data-scope='color-picker'][data-part='swatch']) {
    width: 100%;
    height: 100%;
    background: var(--color);
  }

  :global([data-scope='color-picker'][data-part='swatch-group']) {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 6px;
    margin-top: 12px;
  }

  :global(
    [data-scope='color-picker'][data-part='swatch-group']
      [data-scope='color-picker'][data-part='swatch-trigger']
  ) {
    display: block;
    width: 100%;
    aspect-ratio: 1/1;
  }
</style>
