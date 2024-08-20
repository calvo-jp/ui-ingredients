<script lang="ts">
  import {Timer} from '$lib/index.js';

  let items = [
    {
      value: '1',
      label: 'Tab 1',
      content: 'Content 1',
    },
    {
      value: '2',
      label: 'Tab 2',
      content: 'Content 2',
    },
    {
      value: '3',
      label: 'Tab 3',
      content: 'Content 3',
    },
  ];

  let value = $state(items[0].value);

  $inspect(value);
</script>

<Timer.Root class="flex" startMs={1000 * 60 * 60} targetMs={1000 * 60 * 60 * 5} autoStart countdown>
  <Timer.Item type="hours">
    <Timer.ItemValue />
  </Timer.Item>
  <Timer.Separator>:</Timer.Separator>
  <Timer.Item type="minutes">
    <Timer.ItemValue />
  </Timer.Item>
  <Timer.Separator>:</Timer.Separator>
  <Timer.Item type="seconds">
    <Timer.ItemValue />
  </Timer.Item>
</Timer.Root>
