<script lang="ts">
  import {TreeView} from '$lib/index.js';

  let value = $state([0, 25]);
</script>

<TreeView.Root>
  <TreeView.Label class="mb-2 block text-neutral-600">Explorer</TreeView.Label>

  <TreeView.Tree>
    <TreeView.Item value="1" depth={3} class="pl-6">
      <TreeView.ItemText>Item 1</TreeView.ItemText>
    </TreeView.Item>

    <TreeView.Branch value="2" depth={3}>
      <TreeView.BranchControl class="flex items-center gap-1">
        <TreeView.BranchIndicator class="data-open:rotate-90 transition-transform duration-200">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5"
          >
            <path d="M9 18L15 12L9 6"></path>
          </svg>
        </TreeView.BranchIndicator>
        <TreeView.BranchText>Item 2</TreeView.BranchText>
      </TreeView.BranchControl>

      <TreeView.BranchContent class="pl-6">
        <TreeView.Item value="2.1" depth={3}>
          <TreeView.ItemText>Item 2.1</TreeView.ItemText>
        </TreeView.Item>
        <TreeView.Item value="2.2" depth={3}>
          <TreeView.ItemText>Item 2.2</TreeView.ItemText>
        </TreeView.Item>
      </TreeView.BranchContent>
    </TreeView.Branch>

    <TreeView.Branch value="3" depth={3}>
      <TreeView.BranchControl class="flex items-center gap-1">
        <TreeView.BranchIndicator class="data-open:rotate-90 transition-transform duration-200">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5"
          >
            <path d="M9 18L15 12L9 6"></path>
          </svg>
        </TreeView.BranchIndicator>
        <TreeView.BranchText>Item 3</TreeView.BranchText>
      </TreeView.BranchControl>

      <TreeView.BranchContent class="pl-6">
        <TreeView.Item value="3.1" depth={3} class="pl-6">
          <TreeView.ItemText>Item 3.1</TreeView.ItemText>
        </TreeView.Item>

        <TreeView.Branch value="3.2" depth={3}>
          <TreeView.BranchControl class="flex items-center gap-1">
            <TreeView.BranchIndicator class="data-open:rotate-90 transition-transform duration-200">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-5"
              >
                <path d="M9 18L15 12L9 6"></path>
              </svg>
            </TreeView.BranchIndicator>
            <TreeView.BranchText>Item 3.2.1</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent class="pl-6">
            <TreeView.Item value="3.1" depth={3}>
              <TreeView.ItemText>Item 3.2.2</TreeView.ItemText>
            </TreeView.Item>
          </TreeView.BranchContent>
        </TreeView.Branch>
      </TreeView.BranchContent>
    </TreeView.Branch>
  </TreeView.Tree>
</TreeView.Root>
