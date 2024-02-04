import { create } from 'zustand';

interface ISectionStore {
  openMemberSection: boolean;
  setOpenMemberSection: () => void;
}

export const useSectionStore = create<ISectionStore>((set) => ({
  openMemberSection: false,
  setOpenMemberSection: () =>
    set((state) => ({ openMemberSection: !state.openMemberSection })),
}));
