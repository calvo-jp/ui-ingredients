<script lang="ts">
  import {TimePicker} from '$lib/index.js';
  import {ClockIcon, XCloseIcon} from '@untitled-theme/icons-svelte';
  import {IconButton, Input, Label} from '../shared/index.js';
</script>

<TimePicker.Root
  allowSeconds
  class="w-full lg:max-w-[24rem]"
  positioning={{
    sameWidth: true,
  }}
  open
>
  {#snippet children(context)}
    <TimePicker.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Choose Time</Label>
      {/snippet}
    </TimePicker.Label>

    <TimePicker.Control class="flex gap-2">
      <TimePicker.Input>
        {#snippet asChild(attrs)}
          <Input {...attrs} />
        {/snippet}
      </TimePicker.Input>
      <TimePicker.Trigger>
        {#snippet asChild(attrs)}
          <IconButton {...attrs}>
            <ClockIcon />
          </IconButton>
        {/snippet}
      </TimePicker.Trigger>
      <TimePicker.ClearTrigger>
        {#snippet asChild(attrs)}
          <IconButton {...attrs}>
            <XCloseIcon />
          </IconButton>
        {/snippet}
      </TimePicker.ClearTrigger>
    </TimePicker.Control>

    <TimePicker.Positioner>
      <TimePicker.Content
        class="bg-light relative aspect-square rounded border p-4"
      >
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
