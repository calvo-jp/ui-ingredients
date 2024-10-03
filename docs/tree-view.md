# TreeBranch

A component for displaying hierarchical data in a tree structure, allowing users to expand and collapse branches.

## Usage

```svelte
<script>
  import {TreeView} from 'ui-ingredients';
  import {ChevronRightIcon} from '$lib/icons';
</script>

<TreeView.Root>
  <TreeView.Label>Label</TreeView.Label>

  <TreeView.Tree depth={3}>
    <TreeView.Item value="1">
      <TreeView.ItemText>Item 1</TreeView.ItemText>
    </TreeView.Item>

    <TreeView.Branch value="2">
      <TreeView.BranchControl>
        <TreeView.BranchIndicator>
          <ChevronRightIcon />
        </TreeView.BranchIndicator>
        <TreeView.BranchText>Item 2</TreeView.BranchText>
      </TreeView.BranchControl>

      <TreeView.BranchContent>
        <TreeView.Item value="2.1">
          <TreeView.ItemText>Item 2.1</TreeView.ItemText>
        </TreeView.Item>
        <TreeView.Item value="2.2">
          <TreeView.ItemText>Item 2.2</TreeView.ItemText>
        </TreeView.Item>
      </TreeView.BranchContent>
    </TreeView.Branch>

    <TreeView.Branch value="3">
      <TreeView.BranchControl>
        <TreeView.BranchIndicator>
          <ChevronRightIcon />
        </TreeView.BranchIndicator>
        <TreeView.BranchText>Item 3</TreeView.BranchText>
      </TreeView.BranchControl>

      <TreeView.BranchContent>
        <TreeView.Item value="3.1">
          <TreeView.ItemText>Item 3.1</TreeView.ItemText>
        </TreeView.Item>

        <TreeView.Branch value="3.2">
          <TreeView.BranchControl>
            <TreeView.BranchIndicator>
              <ChevronRightIcon />
            </TreeView.BranchIndicator>
            <TreeView.BranchText>Item 3.2.1</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.Item value="3.1">
              <TreeView.ItemText>Item 3.2.2</TreeView.ItemText>
            </TreeView.Item>
          </TreeView.BranchContent>
        </TreeView.Branch>
      </TreeView.BranchContent>
    </TreeView.Branch>
  </TreeView.Tree>
</TreeView.Root>
```
