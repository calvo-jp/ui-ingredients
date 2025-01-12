<script lang="ts">
  import {IconButton, Input, Label} from '$lib/components';
  import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@untitled-theme/icons-svelte';
  import {twMerge} from 'tailwind-merge';
  import {DatePicker, Portal} from 'ui-ingredients';

  let cellStyle = twMerge(
    'flex',
    'items-center',
    'justify-center',
    'rounded',
    'transition-colors',
    'duration-150',

    'hover:bg-neutral-50',
    'hover:ui-selected:bg-indigo-600',
    'dark:hover:ui-selected:bg-indigo-500',
    'dark:hover:bg-neutral-800/50',
    'hover:ui-disabled:bg-transparent',

    'ui-disabled:cursor-not-allowed',
    'ui-disabled:opacity-50',

    'ui-selected:font-semibold',
    'ui-selected:text-white',
    'ui-selected:bg-indigo-600',
    'dark:ui-selected:bg-indigo-500',

    'ui-today:text-indigo-500',
    'ui-today:ui-selected:text-white',
    'dark:ui-today:text-indigo-600',
    'dark:ui-today:ui-selected:text-white',
  );

  let viewControlStyle = twMerge(
    'flex',
    'items-center',
    'justify-between',
    'border-b',
    'border-neutral-200',
    'px-4',
    'py-3',
    'dark:border-neutral-800',
  );

  let prevOrNextTriggerStyle = twMerge(
    'flex',
    'size-10',
    'items-center',
    'justify-center',
    'rounded',
    'transition-colors',
    'duration-150',
    'hover:bg-neutral-50',
    'dark:hover:bg-neutral-800/50',
  );

  let rangeTextStyle = twMerge(
    'rounded',
    'px-2',
    'py-1',
    'font-semibold',
    'hover:bg-neutral-50',
    'dark:hover:bg-neutral-800/50',
  );
</script>

<DatePicker.Root
  class="mx-auto max-w-[20rem]"
  fixedWeeks
  lazyMount
  positioning={{
    sameWidth: true,
  }}
>
  {#snippet children(api)}
    <DatePicker.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </DatePicker.Label>
    <DatePicker.Control class="flex gap-2">
      <DatePicker.Input>
        {#snippet asChild(attrs)}
          <Input {...attrs} />
        {/snippet}
      </DatePicker.Input>
      <DatePicker.Trigger>
        {#snippet asChild(attrs)}
          <IconButton {...attrs}>
            <CalendarIcon />
          </IconButton>
        {/snippet}
      </DatePicker.Trigger>
    </DatePicker.Control>

    <Portal>
      <DatePicker.Positioner>
        <DatePicker.Content
          class="overflow-hidden rounded border border-neutral-200 bg-white ui-open:animate-fade-in ui-closed:animate-fade-out dark:border-neutral-800 dark:bg-neutral-900"
        >
          <DatePicker.View view="day">
            <DatePicker.ViewControl class={viewControlStyle}>
              <DatePicker.PrevTrigger class={prevOrNextTriggerStyle}>
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText class={rangeTextStyle} />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger class={prevOrNextTriggerStyle}>
                <ChevronRightIcon />
              </DatePicker.NextTrigger>
            </DatePicker.ViewControl>

            <div class="p-4">
              <DatePicker.Table class="w-full">
                <DatePicker.TableHead>
                  <DatePicker.TableRow>
                    {#each api.weekDays as weekDay}
                      <DatePicker.TableHeader>
                        <div
                          class="flex aspect-square w-full items-center justify-center text-sm"
                        >
                          {weekDay.narrow}
                        </div>
                      </DatePicker.TableHeader>
                    {/each}
                  </DatePicker.TableRow>
                </DatePicker.TableHead>

                <DatePicker.TableBody>
                  {#each api.weeks as week}
                    <DatePicker.TableRow>
                      {#each week as day}
                        <DatePicker.DayTableCell value={day}>
                          <DatePicker.DayTableCellTrigger
                            class={twMerge(cellStyle, 'aspect-square w-full')}
                          >
                            {day.day}
                          </DatePicker.DayTableCellTrigger>
                        </DatePicker.DayTableCell>
                      {/each}
                    </DatePicker.TableRow>
                  {/each}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </div>
          </DatePicker.View>

          <!-- MONTH -->
          <DatePicker.View view="month">
            <DatePicker.ViewControl class={viewControlStyle}>
              <DatePicker.PrevTrigger class={prevOrNextTriggerStyle}>
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText class={rangeTextStyle} />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger class={prevOrNextTriggerStyle}>
                <ChevronRightIcon />
              </DatePicker.NextTrigger>
            </DatePicker.ViewControl>

            <div class="p-4">
              <DatePicker.Table class="w-full">
                <DatePicker.TableBody>
                  {#each api.getMonthsGrid( {columns: 4, format: 'short'}, ) as months}
                    <DatePicker.TableRow>
                      {#each months as month}
                        <DatePicker.MonthTableCell value={month.value}>
                          <DatePicker.MonthTableCellTrigger
                            class={twMerge(cellStyle, 'aspect-[16/9] w-full')}
                          >
                            {month.label}
                          </DatePicker.MonthTableCellTrigger>
                        </DatePicker.MonthTableCell>
                      {/each}
                    </DatePicker.TableRow>
                  {/each}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </div>
          </DatePicker.View>

          <!-- YEAR -->
          <DatePicker.View view="year">
            <DatePicker.ViewControl class={viewControlStyle}>
              <DatePicker.PrevTrigger class={prevOrNextTriggerStyle}>
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText class={rangeTextStyle} />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger class={prevOrNextTriggerStyle}>
                <ChevronRightIcon />
              </DatePicker.NextTrigger>
            </DatePicker.ViewControl>

            <div class="p-4">
              <DatePicker.Table class="w-full">
                <DatePicker.TableBody>
                  {#each api.getYearsGrid({columns: 4}) as years}
                    <DatePicker.TableRow>
                      {#each years as year}
                        <DatePicker.YearTableCell value={year.value}>
                          <DatePicker.YearTableCellTrigger
                            class={twMerge(cellStyle, 'aspect-[16/9] w-full')}
                          >
                            {year.label}
                          </DatePicker.YearTableCellTrigger>
                        </DatePicker.YearTableCell>
                      {/each}
                    </DatePicker.TableRow>
                  {/each}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </div>
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Portal>
  {/snippet}
</DatePicker.Root>
