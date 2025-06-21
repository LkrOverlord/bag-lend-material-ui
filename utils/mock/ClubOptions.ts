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
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "PW"
  },
  [ClubType.WEDGES]: {
    "pw": "Pitching Wedge",
    "gw": "Gap Wedge",
    "sw": "Sand Wedge",
    "lw": "Lob Wedge"
  },
  [ClubType.HYBRID]: {
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6"
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