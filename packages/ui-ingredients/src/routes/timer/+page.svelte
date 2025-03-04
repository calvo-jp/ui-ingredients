<script lang="ts">
  import {Timer} from '$lib/index.js';
</script>

<Timer.Root
  startMs={1000 * 60 * 60}
  targetMs={1000 * 60 * 60 * 5}
  autoStart
  countdown
>
  <Timer.Area>
    <Timer.Item type="hours">
      <Timer.ItemValue />
      <Timer.ItemLabel>Hours</Timer.ItemLabel>
    </Timer.Item>
    <Timer.Separator>:</Timer.Separator>
    <Timer.Item type="minutes">
      <Timer.ItemValue />
      <Timer.ItemLabel>Minutes</Timer.ItemLabel>
    </Timer.Item>
    <Timer.Separator>:</Timer.Separator>
    <Timer.Item type="seconds">
      <Timer.ItemValue />
      <Timer.ItemLabel>Seconds</Timer.ItemLabel>
    </Timer.Item>
  </Timer.Area>
  <Timer.Control>
    <Timer.ActionTrigger action="start">Start</Timer.ActionTrigger>
    <Timer.ActionTrigger action="resume">Resume</Timer.ActionTrigger>
    <Timer.ActionTrigger action="pause">Pause</Timer.ActionTrigger>
    <Timer.ActionTrigger action="reset">Reset</Timer.ActionTrigger>
  </Timer.Control>
</Timer.Root>

<style>
  :global([data-scope='timer'][data-part='root']) {
    display: block;
    max-width: 24rem;
  }

  :global([data-scope='timer'][data-part='area']) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  :global([data-scope='timer'][data-part='item']) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  :global([data-scope='timer'][data-part='item-value']) {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Fira Code', monospace;
  }

  :global([data-scope='timer'][data-part='item-label']) {
    font-size: 12px;
    color: var(--color-muted);
  }

  :global([data-scope='timer'][data-part='separator']) {
    display: block;
    font-size: 24px;
    font-weight: 700;
  }

  :global([data-scope='timer'][data-part='control']) {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
  }

  :global([data-scope='timer'][data-part='action-trigger']) {
    height: 36px;
    padding: 0px 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border: 1px solid var(--border-default);
  }
</style>
