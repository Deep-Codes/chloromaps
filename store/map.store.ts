import { MapStoreType } from '@/typings/map.store'
import { atom } from 'jotai'

export const mapAtom = atom<MapStoreType>({
  defaultFillColor: 'black',
  mapStrokeColor: 'white',
  mapBackgroundColor: 'black',
  mapStrokeWidth: '1',
  mapFillColor: '#ff677d',
  mapData: [],
  legendData: [],
})

export const fillAtom = atom<String>('');