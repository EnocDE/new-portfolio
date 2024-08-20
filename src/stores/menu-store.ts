import { create } from "zustand";

interface MenuStore {
  showMenu: boolean,
  openMenu: () => void,
  closeMenu: () => void
}

const useMenuStore = create<MenuStore>((set) => ({
  showMenu: false,
  openMenu: () => set(() => {
    document.body?.classList.add("overflow-hidden")
    return { showMenu: true }
  }),
  closeMenu: () => set(() => {
    document.body?.classList.remove("overflow-hidden")
    return { showMenu: false }
  })
}))

export default useMenuStore