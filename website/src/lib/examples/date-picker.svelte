<script lang="ts">
  import {IconButton, Input, Label} from '$lib/ui';
  import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@untitled-theme/icons-svelte';
  import {DatePicker, Portal, type DateValue} from 'ui-ingredients';

  let value: DateValue[] = $state([]);
</script>

<DatePicker.Root
  class="w-full lg:max-w-[24rem]"
  fixedWeeks
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  positioning={{
    sameWidth: true,
  }}
>
  {#snippet children(api)}
    <DatePicker.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Choose Date</Label>
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
          class="bg-light overflow-hidden rounded data-open:animate-fade-in data-closed:animate-fade-out"
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
                            class="data-selected:text-accent hover:bg-lighter/25 aspect-square flex w-full items-center justify-center rounded transition-colors duration-200 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-selected:font-semibold data-disabled:hover:bg-transparent"
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
