import dayjs, { Dayjs } from 'dayjs';
import { atom } from 'jotai';

const dateAtom = atom(new Date());

export const selectedDateAtom = atom<Date, Date>(
  (get) => get(dateAtom),
  (get, set, selected) => set(dateAtom, selected)
);

export const selectedDayAtom = atom<number, Date>(
  (get) => dayjs(get(dateAtom)).get('date'),
  (get, set, initial = new Date()) => set(dateAtom, initial)
);
