<script lang="ts">
  import {Splitter} from 'ui-ingredients';

  let panelStyle = [
    'flex',
    'h-[12rem]',
    'items-center',
    'justify-center',
    'rounded',
    'bg-white',
    'dark:bg-neutral-800/75',
    'border',
    'border-neutral-200',
    'text-3xl',
    'font-bold',
    'dark:border-neutral-800',
  ];
</script>

<Splitter.Root
  defaultSize={[
    {id: 'a', size: 50, minSize: 25},
    {id: 'b', size: 50, minSize: 25},
  ]}
  class="flex gap-2"
>
  <Splitter.Panel id="a" class={panelStyle}>A</Splitter.Panel>
  <Splitter.ResizeTrigger
    id="a:b"
    class="h-[12rem] w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"
  />
  <Splitter.Panel id="b" class={panelStyle}>B</Splitter.Panel>
</Splitter.Root>
