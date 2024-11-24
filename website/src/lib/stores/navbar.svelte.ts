function createNavbarStore() {
  let isDrawerOpen = $state(false);

  return {
    drawer: {
      get isOpen() {
        return isDrawerOpen;
      },
      open() {
        isDrawerOpen = true;
      },
      close() {
        isDrawerOpen = false;
      },
      toggle() {
        isDrawerOpen = !isDrawerOpen;
      },
    },
  };
}

export const navbarStore = createNavbarStore();
