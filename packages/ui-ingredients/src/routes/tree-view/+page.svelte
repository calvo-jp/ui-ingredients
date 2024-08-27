<script lang="ts">
  import {TreeView} from '$lib/index.js';
  import {ChevronRightIcon} from '@untitled-theme/icons-svelte';
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
          <ChevronRightIcon class="size-5" />
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
          <ChevronRightIcon class="size-5" />
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
              <ChevronRightIcon class="size-5" />
            </TreeView.BranchIndicator>
            <TreeView.BranchText>Item 3.2.1</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent class="pl-6">
            <TreeView.Item value="3.1" depth={3} class="pl-6">
              <TreeView.ItemText>Item 3.2.2</TreeView.ItemText>
            </TreeView.Item>
          </TreeView.BranchContent>
        </TreeView.Branch>
      </TreeView.BranchContent>
    </TreeView.Branch>
  </TreeView.Tree>
</TreeView.Root>
