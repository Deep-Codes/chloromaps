
import { LabMapStoreType } from '@/typings/lab.store'
import { atom } from 'jotai'

export const labAtom = atom<LabMapStoreType>({
  mapData: [],
  count: 10,
  paletteArr: ['red','blue']
})
