<script lang="ts">
  import {TimePicker} from '$lib/index.js';
  import {ClockIcon, XCloseIcon} from '@untitled-theme/icons-svelte';
</script>

<TimePicker.Root allowSeconds>
  {#snippet children(context)}
    <TimePicker.Label class="text-muted mb-1 inline-block font-medium">Choose Time</TimePicker.Label
    >
    <TimePicker.Control class="flex gap-2 ">
      <TimePicker.Input class="h-12 rounded border px-3.5" />
      <TimePicker.Trigger class="flex size-12 items-center justify-center rounded border">
        <ClockIcon class="size-5" />
      </TimePicker.Trigger>
      <TimePicker.ClearTrigger class="flex size-12 items-center justify-center rounded border">
        <XCloseIcon class="size-5" />
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
          <TimePicker.PeriodCell value="am" class="snap-center">AM</TimePicker.PeriodCell>
          <TimePicker.PeriodCell value="pm" class="snap-center">PM</TimePicker.PeriodCell>
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
