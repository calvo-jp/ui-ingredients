<script lang="ts">
  import {COMPONENTS, UTILITIES} from '$lib/const';
</script>

<nav>
  <ul>
    <li>
      <ul>
        <li>
          <a href="/">Introduction</a>
        </li>
        <li>
          <a href="/getting-started">Getting Started</a>
        </li>
        <li>
          <a href="/styling">Styling</a>
        </li>
        <li>
          <a href="/aschild">The asChild prop</a>
        </li>
      </ul>
    </li>

    <li>
      <div>Components</div>

      <ul>
        {#each COMPONENTS as item}
          <li>
            <a href="/components/{item.slug}">{item.name}</a>
          </li>
        {/each}
      </ul>
    </li>

    <li>
      <div>Utilities</div>

      <ul>
        {#each UTILITIES as item}
          <li>
            <a href="/utilities/{item.slug}">{item.name}</a>
          </li>
        {/each}
      </ul>
    </li>
  </ul>
</nav>
