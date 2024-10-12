<script lang="ts">
  import {TimePicker} from '$lib/index.js';
</script>

<TimePicker.Root allowSeconds>
  {#snippet children(context)}
    <TimePicker.Label>Label</TimePicker.Label>
    <TimePicker.Control>
      <TimePicker.Input />
      <TimePicker.Trigger>Trigger</TimePicker.Trigger>
      <TimePicker.ClearTrigger>Clear</TimePicker.ClearTrigger>
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
        <TimePicker.Spacer />
        <TimePicker.Column unit="minute">
          {#each context.getMinutes() as item}
            <TimePicker.MinuteCell value={item.value}>
              {item.label}
            </TimePicker.MinuteCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Spacer />
        <TimePicker.Column unit="second">
          {#each context.getSeconds() as item}
            <TimePicker.SecondCell value={item.value}>
              {item.label}
            </TimePicker.SecondCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Spacer />
        <TimePicker.Column unit="period">
          <TimePicker.PeriodCell value="am">AM</TimePicker.PeriodCell>
          <TimePicker.PeriodCell value="pm">PM</TimePicker.PeriodCell>
        </TimePicker.Column>
      </TimePicker.Content>
    </TimePicker.Positioner>
  {/snippet}
</TimePicker.Root>
