import { ANSIM_STORAGE_KEY } from '@/constants';
import { storage } from '@/mmkv';
import { LocationType } from '@/types';
import { create } from 'zustand';

interface useAnsimStoreProps {
  destinations: LocationType[];
  selectedDestination: LocationType | null;
  selectDestination: (v: LocationType) => void;
  addDestination: (v: LocationType) => void;
  removeDestination: (name: string) => void;
  getDestinations: () => void;
  clearDestinations: () => void;
}

const useAnsimStore = create<useAnsimStoreProps>(set => ({
  destinations: [],
  selectedDestination: null,

  addDestination: v => {
    set(state => {
      const newDestinations = [...state.destinations, v];
      storage.set(ANSIM_STORAGE_KEY, JSON.stringify(newDestinations));
      return { destinations: newDestinations };
    });
  },

  selectDestination: v => {
    set({ selectedDestination: v });
  },
  removeDestination: name => {
    set(state => {
      const filteredDestinations = state.destinations.filter(
        dest => dest.name !== name,
      );
      storage.set(ANSIM_STORAGE_KEY, JSON.stringify(filteredDestinations));
      return { destinations: filteredDestinations };
    });
  },

  getDestinations: () => {
    const savedDestinations = storage.getString(ANSIM_STORAGE_KEY);
    if (savedDestinations) {
      const parsed = JSON.parse(savedDestinations);
      set({
        destinations: parsed,
      });
    }
  },

  clearDestinations: () => {
    storage.delete(ANSIM_STORAGE_KEY);
    set({ destinations: [] });
  },
}));

export default useAnsimStore;
