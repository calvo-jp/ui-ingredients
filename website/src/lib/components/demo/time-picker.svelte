<script lang="ts">
  import {IconButton, Input, Label} from '$lib/components';
  import {ClockIcon, XCloseIcon} from '@untitled-theme/icons-svelte';
  import {TimePicker} from 'ui-ingredients';
</script>

<TimePicker.Root allowSeconds class="mx-auto max-w-[20rem]">
  {#snippet children(context)}
    <TimePicker.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
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
        class="relative flex h-[20rem] rounded border border-neutral-800 bg-neutral-900 py-4"
      >
        <TimePicker.Column
          unit="hour"
          class="snap-y snap-mandatory overflow-y-auto px-3 scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-700"
        >
          {#each context.getHours() as item}
            <TimePicker.HourCell
              value={item.value}
              class="cursor-pointer snap-center font-mono font-medium leading-none text-neutral-400 ui-focus:text-neutral-100 ui-selected:text-indigo-500"
            >
              {item.label}
            </TimePicker.HourCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Spacer />
        <TimePicker.Column
          unit="minute"
          class="snap-y snap-mandatory overflow-y-auto px-3 scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-700"
        >
          {#each context.getMinutes() as item}
            <TimePicker.MinuteCell
              value={item.value}
              class="cursor-pointer snap-center font-mono font-medium leading-none text-neutral-400 ui-focus:text-neutral-100 ui-selected:text-indigo-500"
            >
              {item.label}
            </TimePicker.MinuteCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Spacer />
        <TimePicker.Column
          unit="second"
          class="snap-y snap-mandatory overflow-y-auto px-3 scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-700"
        >
          {#each context.getSeconds() as item}
            <TimePicker.SecondCell
              value={item.value}
              class="cursor-pointer snap-center font-mono font-medium leading-none text-neutral-400 ui-focus:text-neutral-100 ui-selected:text-indigo-500"
            >
              {item.label}
            </TimePicker.SecondCell>
          {/each}
        </TimePicker.Column>
        <TimePicker.Spacer />
        <TimePicker.Column
          unit="period"
          class="snap-y snap-mandatory overflow-y-auto px-3 scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-700"
        >
          <TimePicker.PeriodCell
            value="am"
            class="ui-focus:text-neutr7l-100 cursor-pointer snap-center font-mono font-medium leading-none text-neutral-400 scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-800 ui-selected:text-indigo-500"
          >
            AM
          </TimePicker.PeriodCell>
          <TimePicker.PeriodCell
            value="pm"
            class="ui-focus:text-neutr7l-100 cursor-pointer snap-center font-mono font-medium leading-none text-neutral-400 scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-800 ui-selected:text-indigo-500"
          >
            PM
          </TimePicker.PeriodCell>
        </TimePicker.Column>
      </TimePicker.Content>
    </TimePicker.Positioner>
  {/snippet}
</TimePicker.Root>
