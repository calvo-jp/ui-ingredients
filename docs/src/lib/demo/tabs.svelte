<script lang="ts">
  import {Tabs} from 'ui-ingredients';
  import Container from './container.svelte';

  let items = [
    {
      value: '1',
      label: 'Tab 1',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      value: '2',
      label: 'Tab 2',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    },
    {
      value: '3',
      label: 'Tab 3',
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    },
  ];
</script>

<Container>
  <Tabs.Root value={items[0].value} class="mx-auto max-w-[32rem]">
    <Tabs.List>
      {#each items as { value, label }}
        <Tabs.Trigger
          {value}
          class="h-10 border border-l-0 border-neutral-700 px-3 transition-colors duration-200 first:rounded-l first:border-l last:rounded-r data-selected:bg-neutral-800/50"
        >
          {label}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>
    {#each items as { value, content }}
      <Tabs.Content class="mt-4 text-sm text-neutral-400 lg:text-base" {value}>
        {content}
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</Container>
