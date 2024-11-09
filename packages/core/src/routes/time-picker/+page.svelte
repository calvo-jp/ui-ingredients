<script lang="ts">
  import {TimePicker, type Time} from '$lib/index.js';
  import {ClockIcon, XCloseIcon} from '@untitled-theme/icons-svelte';
  import {IconButton, Input, Label} from '../shared/index.js';

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
  onValueChange={(detail) => {
    value = detail.value;
  }}
  allowSeconds
  class="w-full lg:max-w-[24rem]"
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
        class="bg-light relative flex h-[20rem] gap-2 rounded border p-4"
      >
        <TimePicker.Column
          unit="hour"
          class="overflow-y-invisible snap-y snap-mandatory"
        >
          {#each context.getHours() as item}
            <TimePicker.HourCell
              value={item.value}
              class="data-selected:text-accent data-focus:text-neutral-100 cursor-pointer snap-center font-mono font-medium leading-none"
            >
              {item.label}
            </TimePicker.HourCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Spacer />
        <TimePicker.Column
          unit="minute"
          class="overflow-y-invisible snap-y snap-mandatory"
        >
          {#each context.getMinutes() as item}
            <TimePicker.MinuteCell
              value={item.value}
              class="data-selected:text-accent data-focus:text-neutral-100 cursor-pointer snap-center font-mono font-medium leading-none"
            >
              {item.label}
            </TimePicker.MinuteCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Spacer />
        <TimePicker.Column
          unit="second"
          class="overflow-y-invisible snap-y snap-mandatory"
        >
          {#each context.getSeconds() as item}
            <TimePicker.SecondCell
              value={item.value}
              class="data-selected:text-accent data-focus:text-neutral-100 cursor-pointer snap-center font-mono font-medium leading-none"
            >
              {item.label}
            </TimePicker.SecondCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Spacer />
        <TimePicker.Column unit="period">
          <TimePicker.PeriodCell
            value="am"
            class="data-selected:text-accent data-focus:text-neutral-100 cursor-pointer snap-center font-mono font-medium leading-none"
          >
            AM
          </TimePicker.PeriodCell>
          <TimePicker.PeriodCell
            value="pm"
            class="data-selected:text-accent data-focus:text-neutral-100 cursor-pointer snap-center font-mono font-medium leading-none"
          >
            PM
          </TimePicker.PeriodCell>
        </TimePicker.Column>
      </TimePicker.Content>
    </TimePicker.Positioner>
  {/snippet}
</TimePicker.Root>
