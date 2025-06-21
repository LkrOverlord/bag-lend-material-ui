import { ClubType } from '@/types/GolfClub';
import { create } from 'zustand';

const INITIAL_COUNT = 0;
const MAX_TOTAL_CLUBS = 18;

interface GolfClubStore {
  clubs: Record<string, number>;
  handleChange: (name: string, delta: number) => void;
  getTotalClubs: () => number;
  getAvailableSlots: () => number;
  canAddClub: (clubType: string) => boolean;
}

export const useGolfClubStore = create<GolfClubStore>((set, get) => ({
  clubs: Object.values(ClubType).reduce((acc, name) => ({ ...acc, [name]: INITIAL_COUNT }), {}),
  
  getTotalClubs: () => {
    const state = get();
    return Object.values(state.clubs).reduce((total, count) => total + count, 0);
  },
  
  getAvailableSlots: () => {
    const state = get();
    return MAX_TOTAL_CLUBS - state.getTotalClubs();
  },
  
  canAddClub: (clubType: string) => {
    const state = get();
    return state.getTotalClubs() < MAX_TOTAL_CLUBS;
  },
  
  handleChange: (name: string, delta: number) =>
    set((state) => {
      const currentCount = state.clubs[name] ?? 0;
      const newCount = currentCount + delta;
      
      // Validaciones
      if (newCount < 0) return state; // No permitir valores negativos
      
      if (delta > 0) {
        // Si estamos incrementando, verificar límite total
        const currentTotal = Object.values(state.clubs).reduce((total, count) => total + count, 0);
        if (currentTotal >= MAX_TOTAL_CLUBS) {
          return state; // No permitir exceder el límite
        }
      }
      
      return {
        clubs: {
          ...state.clubs,
          [name]: newCount
        }
      };
    })
}));