import { MapStoreType } from '@/typings/map.store'
import { atom } from 'jotai'

export const mapAtom = atom<MapStoreType>({
  defaultFillColor: '#ff677d',
  mapStrokeColor: 'white',
  mapBackgroundColor: 'black',
  mapStrokeWidth: '1',
  mapFillColor: '#ff677d',
  mapData: [],
})

export const fillAtom = atom<String>('');