import { LabelStoreType } from '@/typings/map.store';
import { atom } from 'jotai'

export const labelAtom = atom<LabelStoreType>({
  data: [],
  scalingFactor: 1
})
