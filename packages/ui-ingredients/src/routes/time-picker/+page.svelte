<script lang="ts">
  import {TimePicker} from '$lib/index.js';
  import {ClockIcon, XCloseIcon} from '@untitled-theme/icons-svelte';
  import {IconButton, Input, Label} from '../shared/index.js';
</script>

<TimePicker.Root allowSeconds class="w-full lg:max-w-[24rem]">
  {#snippet children(context)}
    <TimePicker.Label>
      {#snippet asChild(mergedProps)}
        <Label {...mergedProps}>Choose Time</Label>
      {/snippet}
    </TimePicker.Label>

    <TimePicker.Control class="flex gap-2">
      <TimePicker.Input>
        {#snippet asChild(mergedProps)}
          <Input {...mergedProps} />
        {/snippet}
      </TimePicker.Input>
      <TimePicker.Trigger>
        {#snippet asChild(mergedProps)}
          <IconButton {...mergedProps}>
            <ClockIcon />
          </IconButton>
        {/snippet}
      </TimePicker.Trigger>
      <TimePicker.ClearTrigger>
        {#snippet asChild(mergedProps)}
          <IconButton {...mergedProps}>
            <XCloseIcon />
          </IconButton>
        {/snippet}
      </TimePicker.ClearTrigger>
    </TimePicker.Control>

    <TimePicker.Positioner>
      <TimePicker.Content class="bg-light flex rounded border p-4">
        <TimePicker.Column unit="hour" class="snap-y snap-mandatory">
          {#each context.getHours() as item}
            <TimePicker.HourCell value={item.value} class="snap-center">
              {item.label}
            </TimePicker.HourCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Column unit="minute" class="snap-y snap-mandatory">
          {#each context.getMinutes() as item}
            <TimePicker.MinuteCell value={item.value} class="snap-center">
              {item.label}
            </TimePicker.MinuteCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Column unit="second" class="snap-y snap-mandatory">
          {#each context.getSeconds() as item}
            <TimePicker.SecondCell value={item.value} class="snap-center">
              {item.label}
            </TimePicker.SecondCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Column unit="period" class="snap-y snap-mandatory">
          <TimePicker.PeriodCell value="am" class="snap-center"
            >AM</TimePicker.PeriodCell
          >
          <TimePicker.PeriodCell value="pm" class="snap-center"
            >PM</TimePicker.PeriodCell
          >
        </TimePicker.Column>
      </TimePicker.Content>
    </TimePicker.Positioner>
  {/snippet}
</TimePicker.Root>

<!-- svelte-ignore css_unused_selector -->
<style>
  :global([data-part='column']) {
    height: 1rem;
    font-size: 1rem !important;
    line-height: 1rem;
    overflow-y: auto;
    padding: 0.25rem;
  }

  :global([data-part='column']::-webkit-scrollbar) {
    display: none;
  }
</style>
