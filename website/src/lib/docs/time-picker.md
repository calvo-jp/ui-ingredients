---
name: TimePicker
description: A component for selecting a time from a dropdown or input interface.
---

## Usage

```svelte
<script lang="ts">
  import {TimePicker, type Time} from 'ui-ingredients';
  import {ClockIcon, XCloseIcon} from '$lib/icons';

  let value: Time | null = $state(
    TimePicker.parse({
      hour: 16,
      minute: 0,
      second: 0,
      millisecond: 0,
    }),
  );
</script>

<TimePicker.Root
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
  allowSeconds
>
  {#snippet children(context)}
    <TimePicker.Label>Label</TimePicker.Label>

    <TimePicker.Control>
      <TimePicker.Input />
      <TimePicker.Trigger>
        <ClockIcon />
      </TimePicker.Trigger>
      <TimePicker.ClearTrigger>
        <XCloseIcon />
      </TimePicker.ClearTrigger>
    </TimePicker.Control>

    <TimePicker.Positioner>
      <TimePicker.Content>
        <TimePicker.Column unit="hour">
          {#each context.getHours() as item}
            <TimePicker.HourCell value={item.value}>
              {item.label}
            </TimePicker.HourCell>
          {/each}
        </TimePicker.Column>

        <TimePicker.Column unit="minute">
          {#each context.getMinutes() as item}
            <TimePicker.MinuteCell value={item.value}>
              {item.label}
            </TimePicker.MinuteCell>
          {/each}
        </TimePicker.Column>

        <TimePicker.Column unit="second">
          {#each context.getSeconds() as item}
            <TimePicker.SecondCell value={item.value}>
              {item.label}
            </TimePicker.SecondCell>
          {/each}
        </TimePicker.Column>

        <TimePicker.Column unit="period">
          <TimePicker.PeriodCell value="am">AM</TimePicker.PeriodCell>
          <TimePicker.PeriodCell value="pm">PM</TimePicker.PeriodCell>
        </TimePicker.Column>
      </TimePicker.Content>
    </TimePicker.Positioner>
  {/snippet}
</TimePicker.Root>
```