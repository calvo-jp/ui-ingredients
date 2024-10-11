<script lang="ts">
  import {DatePicker, Portal} from '$lib/index.js';
  import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    XCloseIcon,
  } from '@untitled-theme/icons-svelte';
  import {twMerge} from 'tailwind-merge';
  import {IconButton, Input, Label} from '../../shared/index.js';

  let value: string[] = $state([]);
</script>

<DatePicker.Root
  class="w-full lg:max-w-[24rem]"
  fixedWeeks
  positioning={{
    sameWidth: true,
  }}
  {value}
  onValueChange={(detail) => {
    value = detail.valueAsString;
  }}
  selectionMode="range"
>
  {#snippet children(api)}
    <DatePicker.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Choose Date</Label>
      {/snippet}
    </DatePicker.Label>
    <DatePicker.Control class="flex gap-2">
      <DatePicker.Input index={0}>
        {#snippet asChild(attrs)}
          <Input {...attrs} />
        {/snippet}
      </DatePicker.Input>
      <DatePicker.Input index={1}>
        {#snippet asChild(attrs)}
          <Input {...attrs} />
        {/snippet}
      </DatePicker.Input>
      <DatePicker.ClearTrigger>
        {#snippet asChild(attrs)}
          <IconButton {...attrs}>
            <XCloseIcon />
          </IconButton>
        {/snippet}
      </DatePicker.ClearTrigger>
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
          class="bg-light data-open:animate-fade-in data-closed:animate-fade-out overflow-hidden rounded"
        >
          <DatePicker.View view="day">
            <DatePicker.ViewControl
              class="border-b-lighter/50 flex items-center justify-between border border-b px-4 py-3"
            >
              <DatePicker.PrevTrigger
                class="hover:bg-lighter/25 flex size-10 items-center justify-center rounded transition-colors duration-200"
              >
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>

              <DatePicker.ViewTrigger>
                <DatePicker.RangeText
                  class="hover:bg-lighter/25 rounded px-2 py-1 font-semibold"
                />
              </DatePicker.ViewTrigger>

              <DatePicker.NextTrigger
                class="hover:bg-lighter/25 flex size-10 items-center justify-center rounded transition-colors duration-200"
              >
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
                            class={twMerge(
                              'flex',
                              'items-center',
                              'justify-center',
                              'w-full',
                              'rounded',
                              'aspect-square',
                              'font-medium',
                              'transition-colors',
                              'duration-200',
                              'hover:bg-lighter/25',
                              'data-today:text-accent',
                              'data-selected:bg-accent',
                              'data-selected:text-white',
                              'data-range-start:bg-accent',
                              'data-range-end:bg-accent',
                              'data-in-range:bg-accent/75',
                              'data-in-range:text-white',
                              'data-disabled:hover:bg-transparent',
                              'data-disabled:data-range-start:bg-transparent',
                              'data-disabled:data-range-start:text-inherit',
                              'data-disabled:data-range-end:bg-transparent',
                              'data-disabled:data-range-end:text-inherit',
                              'data-disabled:data-in-range:text-inherit',
                              'data-disabled:data-in-range:bg-transparent',
                              'data-disabled:data-selected:text-inherit',
                              'data-disabled:data-selected:bg-transparent',
                            )}
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
            <DatePicker.ViewControl
              class="border-b-lighter/50 flex items-center justify-between border border-b px-4 py-3"
            >
              <DatePicker.PrevTrigger
                class="hover:bg-lighter/25 flex size-10 items-center justify-center rounded transition-colors duration-200"
              >
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>

              <DatePicker.ViewTrigger>
                <DatePicker.RangeText
                  class="hover:bg-lighter/25 rounded px-2 py-1 font-semibold"
                />
              </DatePicker.ViewTrigger>

              <DatePicker.NextTrigger
                class="hover:bg-lighter/25 flex size-10 items-center justify-center rounded transition-colors duration-200"
              >
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
                            class="hover:bg-lighter/25 flex aspect-[16/9] w-full items-center justify-center rounded transition-colors duration-200"
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
            <DatePicker.ViewControl
              class="border-b-lighter/50 flex items-center justify-between border border-b px-4 py-3"
            >
              <DatePicker.PrevTrigger
                class="hover:bg-lighter/25 flex size-10 items-center justify-center rounded transition-colors duration-200"
              >
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>

              <DatePicker.ViewTrigger>
                <DatePicker.RangeText
                  class="hover:bg-lighter/25 rounded px-2 py-1 font-semibold"
                />
              </DatePicker.ViewTrigger>

              <DatePicker.NextTrigger
                class="hover:bg-lighter/25 flex size-10 items-center justify-center rounded transition-colors duration-200"
              >
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
                            class="hover:bg-lighter/25 flex aspect-[16/9] w-full items-center justify-center rounded transition-colors duration-200"
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
