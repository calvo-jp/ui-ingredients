<script lang="ts">
  import {DatePicker, Portal, type DateValue} from '$lib/index.js';

  let value: DateValue[] = $state([]);
</script>

<DatePicker.Root
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
    <DatePicker.Label>Choose Date</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input />
      <DatePicker.Trigger>📅</DatePicker.Trigger>
    </DatePicker.Control>

    <Portal>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>&lt;</DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>&gt;</DatePicker.NextTrigger>
            </DatePicker.ViewControl>

            <div>
              <DatePicker.Table>
                <DatePicker.TableHead>
                  <DatePicker.TableRow>
                    {#each api.weekDays as weekDay}
                      <DatePicker.TableHeader>
                        <div>
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
                          <DatePicker.DayTableCellTrigger>
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
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>&lt;</DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>&gt;</DatePicker.NextTrigger>
            </DatePicker.ViewControl>

            <div>
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
            </div>
          </DatePicker.View>

          <!-- YEAR -->
          <DatePicker.View view="year">
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>&lt;</DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>&gt;</DatePicker.NextTrigger>
            </DatePicker.ViewControl>

            <div>
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
            </div>
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Portal>
  {/snippet}
</DatePicker.Root>
