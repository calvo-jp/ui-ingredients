<script lang="ts">
  import {DatePicker} from '$lib/index.js';

  let months = [
    /**/
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
</script>

<DatePicker.Root
  class="max-w-[20rem]"
  fixedWeeks
  positioning={{
    sameWidth: true,
  }}
>
  {#snippet children(api)}
    <DatePicker.Label class="mb-1 inline-block text-neutral-400">Choose Date</DatePicker.Label>
    <DatePicker.Control class="flex gap-2">
      <DatePicker.Input class="h-11 grow border px-3 placeholder:text-neutral-500" />
      <DatePicker.Trigger class="flex size-11 items-center justify-center border">
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
            d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
          ></path>
        </svg>
      </DatePicker.Trigger>
    </DatePicker.Control>

    <DatePicker.Positioner>
      <DatePicker.Content class="bg-neutral-800">
        <DatePicker.View view="day">
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

            <button
              onclick={() => {
                api.setView('month');
              }}
            >
              {months[api.focusedValue.month]}
              {api.focusedValue.year}
            </button>

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
                        class="data-disabled:opacity-50 data-selected:text-indigo-500 flex size-full items-center justify-center"
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
            <button
              onclick={() => {
                api.setView('year');
              }}
            >
              {api.focusedValue.year}
            </button>
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
                        class="data-selected:text-indigo-500 flex size-full items-center justify-center"
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
            <button
              onclick={() => {
                api.setView('day');
              }}
            >
              {api.getYears()[0].label}-
              {api.getYears().at(-1)?.label}
            </button>
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
                        class="data-selected:text-indigo-500 flex size-full items-center justify-center"
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
