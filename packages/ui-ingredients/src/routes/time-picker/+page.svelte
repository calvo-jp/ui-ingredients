<script lang="ts">
  import {TimePicker} from '$lib/index.js';
</script>

<TimePicker.Root allowSeconds>
  {#snippet children(context)}
    <TimePicker.Label class="mb-1 inline-block text-neutral-400">Choose Time</TimePicker.Label>
    <TimePicker.Control class="flex gap-2">
      <TimePicker.Input class="h-11 border px-3" />
      <TimePicker.Trigger class="flex size-11 items-center justify-center border">
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
            d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          ></path>
        </svg>
      </TimePicker.Trigger>
      <TimePicker.ClearTrigger class="flex size-11 items-center justify-center border">
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
          <path d="M18 6L6 18M6 6L18 18"></path>
        </svg>
      </TimePicker.ClearTrigger>
    </TimePicker.Control>
    <TimePicker.Positioner>
      <TimePicker.Content class="flex border bg-neutral-800 p-4">
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
