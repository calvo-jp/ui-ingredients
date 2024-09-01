# TreeBranch

## Usage

```svelte
<script>
  import {TreeView} from 'ui-ingredients';
  import {ChevronRightIcon} from '$lib/icons';
</script>

<TreeView.Root>
  <TreeView.Label>Label</TreeView.Label>

  <TreeView.Tree>
    <TreeView.Item value="1" depth={3}>
      <TreeView.ItemText>Item 1</TreeView.ItemText>
    </TreeView.Item>

    <TreeView.Branch value="2" depth={3}>
      <TreeView.BranchControl>
        <TreeView.BranchIndicator>
          <ChevronRightIcon />
        </TreeView.BranchIndicator>
        <TreeView.BranchText>Item 2</TreeView.BranchText>
      </TreeView.BranchControl>

      <TreeView.BranchContent>
        <TreeView.Item value="2.1" depth={3}>
          <TreeView.ItemText>Item 2.1</TreeView.ItemText>
        </TreeView.Item>
        <TreeView.Item value="2.2" depth={3}>
          <TreeView.ItemText>Item 2.2</TreeView.ItemText>
        </TreeView.Item>
      </TreeView.BranchContent>
    </TreeView.Branch>

    <TreeView.Branch value="3" depth={3}>
      <TreeView.BranchControl>
        <TreeView.BranchIndicator>
          <ChevronRightIcon />
        </TreeView.BranchIndicator>
        <TreeView.BranchText>Item 3</TreeView.BranchText>
      </TreeView.BranchControl>

      <TreeView.BranchContent>
        <TreeView.Item value="3.1" depth={3}>
          <TreeView.ItemText>Item 3.1</TreeView.ItemText>
        </TreeView.Item>

        <TreeView.Branch value="3.2" depth={3}>
          <TreeView.BranchControl>
            <TreeView.BranchIndicator>
              <ChevronRightIcon />
            </TreeView.BranchIndicator>
            <TreeView.BranchText>Item 3.2.1</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.Item value="3.1" depth={3}>
              <TreeView.ItemText>Item 3.2.2</TreeView.ItemText>
            </TreeView.Item>
          </TreeView.BranchContent>
        </TreeView.Branch>
      </TreeView.BranchContent>
    </TreeView.Branch>
  </TreeView.Tree>
</TreeView.Root>
```