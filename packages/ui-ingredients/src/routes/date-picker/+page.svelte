<script lang="ts">
  import {DatePicker} from '$lib/index.js';
  import {CalendarIcon, ChevronLeftIcon, ChevronRightIcon} from '@untitled-theme/icons-svelte';
</script>

<DatePicker.Root
  class="w-full lg:max-w-[20rem]"
  fixedWeeks
  positioning={{
    sameWidth: true,
  }}
>
  {#snippet children(api)}
    <DatePicker.Label class="text-muted mb-1 inline-block font-medium">Choose Date</DatePicker.Label
    >
    <DatePicker.Control class="flex gap-2">
      <DatePicker.Input class="h-12 grow rounded border px-3.5" />
      <DatePicker.Trigger class="flex size-12 items-center justify-center rounded border">
        <CalendarIcon class="size-5" />
      </DatePicker.Trigger>
    </DatePicker.Control>

    <DatePicker.Positioner>
      <DatePicker.Content class="bg-light overflow-hidden rounded">
        <DatePicker.View view="day">
          <DatePicker.ViewControl
            class="border-b-lighter/50 flex items-center justify-between border border-b px-4 py-2"
          >
            <DatePicker.PrevTrigger class="flex size-10 items-center justify-center">
              <ChevronLeftIcon class="size-5" />
            </DatePicker.PrevTrigger>

            <DatePicker.ViewTrigger>
              <DatePicker.RangeText class="font-semibold" />
            </DatePicker.ViewTrigger>

            <DatePicker.NextTrigger class="flex size-10 items-center justify-center">
              <ChevronRightIcon class="size-5" />
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>

          <DatePicker.Table class="w-full border border-t-0 p-4">
            <DatePicker.TableHead>
              <DatePicker.TableRow class="grid grid-cols-7">
                {#each api.weekDays as weekDay}
                  <DatePicker.TableHeader
                    class="flex aspect-square w-full items-center justify-center text-sm font-semibold"
                  >
                    {weekDay.narrow}
                  </DatePicker.TableHeader>
                {/each}
              </DatePicker.TableRow>
            </DatePicker.TableHead>

            <DatePicker.TableBody>
              {#each api.weeks as week}
                <DatePicker.TableRow class="grid grid-cols-7">
                  {#each week as day}
                    <DatePicker.DayTableCell value={day} class="aspect-square w-full">
                      <DatePicker.DayTableCellTrigger
                        class="data-disabled:opacity-50 data-selected:text-accent flex size-full items-center justify-center"
                      >
                        {day.day}
                      </DatePicker.DayTableCellTrigger>
                    </DatePicker.DayTableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.View>

        <!-- MONTH -->
        <DatePicker.View view="month">
          <DatePicker.ViewControl class="flex items-center justify-between border px-4 py-2">
            <DatePicker.PrevTrigger class="flex size-10 items-center justify-center">
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
                <path d="M15 18L9 12L15 6"></path>
              </svg>
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger>
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger class="flex size-10 items-center justify-center">
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
                <path d="M9 18L15 12L9 6"></path>
              </svg>
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>

          <DatePicker.Table class="w-full border border-t-0 p-4">
            <DatePicker.TableBody>
              {#each api.getMonthsGrid({columns: 4, format: 'short'}) as months}
                <DatePicker.TableRow class="grid grid-cols-4">
                  {#each months as month}
                    <DatePicker.MonthTableCell value={month.value} class="w-full">
                      <DatePicker.MonthTableCellTrigger
                        class="data-selected:text-accent flex size-full items-center justify-center"
                      >
                        {month.label}
                      </DatePicker.MonthTableCellTrigger>
                    </DatePicker.MonthTableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.View>

        <!-- YEAR -->
        <DatePicker.View view="year">
          <DatePicker.ViewControl class="flex items-center justify-between border px-4 py-2">
            <DatePicker.PrevTrigger class="flex size-10 items-center justify-center">
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
                <path d="M15 18L9 12L15 6"></path>
              </svg>
            </DatePicker.PrevTrigger>
            <DatePicker.ViewTrigger>
              <DatePicker.RangeText />
            </DatePicker.ViewTrigger>
            <DatePicker.NextTrigger class="flex size-10 items-center justify-center">
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
                <path d="M9 18L15 12L9 6"></path>
              </svg>
            </DatePicker.NextTrigger>
          </DatePicker.ViewControl>

          <DatePicker.Table class="w-full border border-t-0 p-4">
            <DatePicker.TableBody>
              {#each api.getYearsGrid({columns: 8}) as years}
                <DatePicker.TableRow class="grid grid-cols-4">
                  {#each years as year}
                    <DatePicker.YearTableCell value={year.value} class="w-full">
                      <DatePicker.YearTableCellTrigger
                        class="data-selected:text-accent flex size-full items-center justify-center"
                      >
                        {year.label}
                      </DatePicker.YearTableCellTrigger>
                    </DatePicker.YearTableCell>
                  {/each}
                </DatePicker.TableRow>
              {/each}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  {/snippet}
</DatePicker.Root>
