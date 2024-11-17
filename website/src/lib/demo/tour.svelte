<script lang="ts">
  import {Button} from '$lib/ui';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {twMerge} from 'tailwind-merge';
  import {Tour, type TourStepDetails} from 'ui-ingredients';
  import Container from './container.svelte';

  const length = 3;
  const steps: TourStepDetails[] = [
    // {
    //   type: 'dialog',
    //   title: 'Welcome',
    //   description: 'Welcome to the tour!',
    //   actions: [
    //     {
    //       label: 'Lets go!',
    //       action: 'next',
    //     },
    //   ],
    //   placement: 'center',
    // },
    ...Array.from({length}).map((_, idx) => {
      const n = idx + 1;

      const actions: TourStepDetails['actions'] = [];

      if (n > 1) {
        actions.push({
          label: 'Prev',
          action: 'prev',
        });
      }

      if (n < length) {
        actions.push({
          label: 'Next',
          action: 'next',
        });
      }

      if (n === length) {
        actions.push({
          label: 'Done',
          action: 'dismiss',
        });
      }

      const o: TourStepDetails = {
        type: 'tooltip',
        arrow: true,
        title: `Step ${n} Title`,
        description: `Step ${n} Description`,
        actions,
        target() {
          return document.getElementById(`step-${n}-target`);
        },
      };

      return o;
    }),
  ];
</script>

<Container>
  <Tour.Root {steps}>
    {#snippet children(tour)}
      {@const actions = tour.step?.actions ?? []}

      <Tour.Trigger>
        {#snippet asChild(attrs)}
          <Button variant="outline" {...attrs}>Start</Button>
        {/snippet}
      </Tour.Trigger>
      <Tour.Backdrop class="bg-black/75 backdrop-blur-sm" />
      <Tour.Spotlight />
      <Tour.Positioner>
        <Tour.Content
          class="relative w-[24rem] rounded border border-neutral-800 bg-neutral-900 p-5"
        >
          <Tour.Arrow
            class="[--arrow-background:theme(colors.neutral[900])] [--arrow-size:theme(spacing.4)]"
          >
            <Tour.ArrowTip />
          </Tour.Arrow>

          <Tour.ProgressText class="text-sm text-neutral-400" />
          <Tour.Title class="mt-4 text-lg font-medium" />
          <Tour.Description class="text-neutral-400" />

          <div class="mt-5 flex justify-end gap-3">
            {#each actions as action}
              <Tour.ActionTrigger {action}>
                {#snippet asChild(attrs)}
                  <Button variant="outline" class="w-24 shrink" {...attrs}>
                    {action.label}
                  </Button>
                {/snippet}
              </Tour.ActionTrigger>
            {/each}
          </div>

          <Tour.CloseTrigger class="absolute right-4 top-4">
            <XCloseIcon />
          </Tour.CloseTrigger>
        </Tour.Content>
      </Tour.Positioner>
    {/snippet}
  </Tour.Root>

  <div class="mt-10 grid gap-5 lg:grid-cols-3">
    {#each Array.from({length}) as _, idx}
      {@const n = idx + 1}

      <div
        id="step-{n}-target"
        class={twMerge(
          'grid',
          'place-items-center',
          'rounded-md',
          'aspect-video',
          'text-3xl',
          'font-mono',
          'font-bold',
          'text-white',
          'data-[tour-highlighted]:outline',
          'data-[tour-highlighted]:outline-2',
          'data-[tour-highlighted]:outline-white',
          'data-[tour-highlighted]:outline-offset-4',
          [
            'bg-gradient-to-r from-rose-700 to-red-700',
            'bg-gradient-to-r from-amber-700 to-yellow-700',
            'bg-gradient-to-r from-emerald-700 to-green-700',
          ][idx],
        )}
      >
        {n}
      </div>
    {/each}
  </div>
</Container>
