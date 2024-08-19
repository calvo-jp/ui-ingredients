<script lang="ts">
  import {Progress} from '$lib/index.js';
</script>

<Progress.Root min={0} max={100} value={0} class="max-w-[16rem]">
  {#snippet children(context)}
    <div class="flex gap-2 items-center">
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText class="text-sm text-neutral-500" />
    </div>
    <Progress.Circle class="mt-3 [--size:theme(spacing.16)] [--thickness:theme(spacing.2)]">
      <Progress.CircleTrack class="stroke-neutral-600" />
      <Progress.CircleRange class="stroke-indigo-500 transition-all duration-200" />
    </Progress.Circle>

    <Progress.Track class="mt-5 h-2.5 rounded-full bg-neutral-600 overflow-hidden">
      <Progress.Range
        class="bg-indigo-500 h-full transition-all duration-200 [--translate-x:100%]"
      />
    </Progress.Track>

    <div class="mt-5 flex gap-3">
      <button
        type="button"
        class="h-10 text-sm px-3 border"
        onclick={() => {
          context.setValue((context.value ?? 0) - 10);
        }}
      >
        Decrease
      </button>
      <button
        type="button"
        class="h-10 text-sm px-3 border"
        onclick={() => {
          context.setValue((context.value ?? 0) + 10);
        }}
      >
        Increase
      </button>
    </div>
  {/snippet}
</Progress.Root>
