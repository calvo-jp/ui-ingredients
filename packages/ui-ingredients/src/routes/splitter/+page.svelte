<script lang="ts">
  import {Splitter} from '$lib/index.js';
</script>

<Splitter.Root
  size={[
    {id: 'a', size: 50, minSize: 25},
    {id: 'b', size: 50, minSize: 25},
  ]}
  class="flex max-w-[32rem] gap-2"
>
  <Splitter.Panel
    id="a"
    class="flex h-[12rem] items-center justify-center rounded border text-2xl font-bold"
  >
    A
  </Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" class="h-[12rem] w-1.5 rounded-full bg-neutral-700" />
  <Splitter.Panel
    id="b"
    class="flex h-[12rem] items-center justify-center rounded border text-2xl font-bold"
  >
    B
  </Splitter.Panel>
</Splitter.Root>
