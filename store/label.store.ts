import { LabelStoreType } from '@/typings/label.store';
import { atom } from 'jotai'

export const labelAtom = atom<LabelStoreType>({
  data: [],
  scalingFactor: 1
})
