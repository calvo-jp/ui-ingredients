<script lang="ts">
  import {DatePicker, Portal, type DateValue} from '$lib/index.js';
  import CalendarIcon from '../../calendar-icon.svelte';
  import ChevronLeftIcon from '../../chevron-left-icon.svelte';
  import ChevronRightIcon from '../../chevron-right-icon.svelte';
  import XIcon from '../../x-icon.svelte';

  let value: DateValue[] = $state([]);

  $inspect({value});
</script>

<DatePicker.Root
  fixedWeeks
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  selectionMode="range"
  placeholder="Placeholder"
  positioning={{
    placement: 'bottom-start',
  }}
>
  {#snippet children(api)}
    <DatePicker.Label>Label</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input />
      <DatePicker.Input index={1} />
      <DatePicker.Trigger>
        <CalendarIcon style="width:20px;height:20px;" />
      </DatePicker.Trigger>
      <DatePicker.ClearTrigger>
        <XIcon style="width:20px;height:20px;" />
      </DatePicker.ClearTrigger>
    </DatePicker.Control>

    <Portal>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>
                <ChevronLeftIcon style="width:20px;height:20px;" />
              </DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>
                <ChevronRightIcon style="width:20px;height:20px;" />
              </DatePicker.NextTrigger>
            </DatePicker.ViewControl>

            <DatePicker.Table>
              <DatePicker.TableHead>
                <DatePicker.TableRow>
                  {#each api.weekDays as weekDay}
                    <DatePicker.TableHeader>
                      {weekDay.narrow}
                    </DatePicker.TableHeader>
                  {/each}
                </DatePicker.TableRow>
              </DatePicker.TableHead>

              <DatePicker.TableBody>
                {#each api.weeks as week}
                  <DatePicker.TableRow>
                    {#each week as day}
                      <DatePicker.DayTableCell value={day}>
                        <DatePicker.DayTableCellTrigger>
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
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>
                <ChevronLeftIcon style="width:20px;height:20px;" />
              </DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>
                <ChevronRightIcon style="width:20px;height:20px;" />
              </DatePicker.NextTrigger>
            </DatePicker.ViewControl>

            <DatePicker.Table>
              <DatePicker.TableBody>
                {#each api.getMonthsGrid( {columns: 4, format: 'short'}, ) as months}
                  <DatePicker.TableRow>
                    {#each months as month}
                      <DatePicker.MonthTableCell value={month.value}>
                        <DatePicker.MonthTableCellTrigger>
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
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>
                <ChevronLeftIcon style="width:20px;height:20px;" />
              </DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>
                <ChevronRightIcon style="width:20px;height:20px;" />
              </DatePicker.NextTrigger>
            </DatePicker.ViewControl>

            <DatePicker.Table>
              <DatePicker.TableBody>
                {#each api.getYearsGrid({columns: 4}) as years}
                  <DatePicker.TableRow>
                    {#each years as year}
                      <DatePicker.YearTableCell value={year.value}>
                        <DatePicker.YearTableCellTrigger>
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
    </Portal>
  {/snippet}
</DatePicker.Root>
