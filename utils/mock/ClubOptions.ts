// utils/clubOptions.ts
import { ClubType } from '@/types/GolfClub';

export const clubOptionsByType: Record<string, Record<string, string>> = {
  [ClubType.WOODS]: {
    "3": "3 Wood",
    "4": "4 Wood",
    "5": "5 Wood",
    "7": "7 Wood",
    "9": "9 Wood"
  },
  [ClubType.IRONS]: {
    "3": "3 Iron",
    "4": "4 Iron",
    "5": "5 Iron",
    "6": "6 Iron",
    "7": "7 Iron",
    "8": "8 Iron",
    "9": "9 Iron"
  },
  [ClubType.WEDGES]: {
    "pw": "Pitching Wedge",
    "gw": "Gap Wedge",
    "sw": "Sand Wedge",
    "lw": "Lob Wedge"
  },
  [ClubType.HYBRID]: {
    "2": "2 Hybrid",
    "3": "3 Hybrid",
    "4": "4 Hybrid",
    "5": "5 Hybrid"
  },
  [ClubType.DRIVER]: {
    "driver": "Driver"
  },
  [ClubType.PUTTER]: {
    "blade": "Blade Putter",
    "mallet": "Mallet Putter",
    "insert": "Insert Putter"
  }
};

export const getClubOptions = (clubType: string): Record<string, string> => {
  return clubOptionsByType[clubType] || {};
};