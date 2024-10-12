function createStore() {
  let isSidebarOpened = $state(false);

  return {
    sidebar: {
      get isOpen() {
        return isSidebarOpened;
      },
      set isOpen(value) {
        isSidebarOpened = value;
      },
    },
  };
}

export const store = createStore();
