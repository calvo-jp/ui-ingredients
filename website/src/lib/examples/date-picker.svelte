<script lang="ts">
  import {IconButton, Input, Label} from '$lib/ui';
  import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@untitled-theme/icons-svelte';
  import {DatePicker, Portal} from 'ui-ingredients';
</script>

<DatePicker.Root
  class="mx-auto max-w-[20rem]"
  fixedWeeks
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
          class="overflow-hidden rounded border border-neutral-800 bg-neutral-900 data-open:animate-fade-in data-closed:animate-fade-out"
        >
          <DatePicker.View view="day">
            <DatePicker.ViewControl
              class="flex items-center justify-between border-b border-neutral-800 px-4 py-3"
            >
              <DatePicker.PrevTrigger
                class="flex size-10 items-center justify-center rounded transition-colors duration-200 hover:bg-neutral-800/50"
              >
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>

              <DatePicker.ViewTrigger>
                <DatePicker.RangeText
                  class="rounded px-2 py-1 font-semibold hover:bg-neutral-800/50"
                />
              </DatePicker.ViewTrigger>

              <DatePicker.NextTrigger
                class="flex size-10 items-center justify-center rounded transition-colors duration-200 hover:bg-neutral-800/50"
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
                          class="aspect-square flex w-full items-center justify-center text-sm"
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
                            class="aspect-square flex w-full items-center justify-center rounded transition-colors duration-200 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-selected:bg-indigo-500 data-selected:font-semibold data-selected:text-white hover:bg-neutral-800/50 data-disabled:hover:bg-transparent"
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
              class="flex items-center justify-between border-b border-neutral-800 px-4 py-3"
            >
              <DatePicker.PrevTrigger
                class="flex size-10 items-center justify-center rounded transition-colors duration-200 hover:bg-neutral-800/50"
              >
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>

              <DatePicker.ViewTrigger>
                <DatePicker.RangeText
                  class="rounded px-2 py-1 font-semibold hover:bg-neutral-800/50"
                />
              </DatePicker.ViewTrigger>

              <DatePicker.NextTrigger
                class="flex size-10 items-center justify-center rounded transition-colors duration-200 hover:bg-neutral-800/50"
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
                            class="flex aspect-[16/9] w-full items-center justify-center rounded transition-colors duration-200 hover:bg-neutral-800/50"
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
              class="flex items-center justify-between border-b border-neutral-800 px-4 py-3"
            >
              <DatePicker.PrevTrigger
                class="flex size-10 items-center justify-center rounded transition-colors duration-200 hover:bg-neutral-800/50"
              >
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>

              <DatePicker.ViewTrigger>
                <DatePicker.RangeText
                  class="rounded px-2 py-1 font-semibold hover:bg-neutral-800/50"
                />
              </DatePicker.ViewTrigger>

              <DatePicker.NextTrigger
                class="flex size-10 items-center justify-center rounded transition-colors duration-200 hover:bg-neutral-800/50"
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
                            class="flex aspect-[16/9] w-full items-center justify-center rounded transition-colors duration-200 hover:bg-neutral-800/50"
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
