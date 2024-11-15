<script lang="ts">
  import {Splitter} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Splitter.Root
    size={[
      {id: 'a', size: 50, minSize: 25},
      {id: 'b', size: 50, minSize: 25},
    ]}
    class="mx-auto flex max-w-[32rem] gap-2"
  >
    <Splitter.Panel
      id="a"
      class="flex h-[12rem] items-center justify-center rounded border border-neutral-800 text-3xl font-bold"
    >
      A
    </Splitter.Panel>
    <Splitter.ResizeTrigger
      id="a:b"
      class="h-[12rem] w-1.5 rounded-full bg-neutral-700"
    />
    <Splitter.Panel
      id="b"
      class="flex h-[12rem] items-center justify-center rounded border border-neutral-800 text-3xl font-bold"
    >
      B
    </Splitter.Panel>
  </Splitter.Root>
</Container>
