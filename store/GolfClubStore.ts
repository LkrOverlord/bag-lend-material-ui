import { ClubType } from '@/types/GolfClub';
import { create } from 'zustand';

const INITIAL_COUNT = 0;

interface GolfClubStore {
  clubs: Record<string, number>;
  handleChange: (name: string, delta: number) => void;
}

export const useGolfClubStore = create<GolfClubStore>((set) => ({
  clubs: Object.values(ClubType).reduce((acc, name) => ({ ...acc, [name]: INITIAL_COUNT }), {}),
  
  handleChange: (name: string, delta: number) => 
    set((state) => ({
      clubs: {
        ...state.clubs,
        [name]: Math.max(0, (state.clubs[name] ?? 0) + delta)
      }
    }))
}));