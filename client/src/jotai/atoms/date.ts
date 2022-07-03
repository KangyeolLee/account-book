import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

export const dateAtom = atomWithReset(new Date());

export const selectedDateAtom = atom<Date, Date>(
  (get) => get(dateAtom),
  (get, set, selected) => set(dateAtom, selected)
);
