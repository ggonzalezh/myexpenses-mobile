import { load, Store } from '@tauri-apps/plugin-store'
import { isTauri } from '@tauri-apps/api/core'

export const useTauriStorage = () => {
  let tauriStore: Store | null = null

  const initialize = async () => {
    if (!isTauri() || tauriStore) return
    tauriStore = await load('storage.json')
  }

  const setItem = async (key: string, value: any) => {
    if (!isTauri() || !tauriStore) return
    await tauriStore.set(key, value)
    await tauriStore.save()
  }

  const getItem = async (key: string): Promise<any> => {
    if (!isTauri() || !tauriStore) return
    return await tauriStore.get<{ accessToken: string }>(key)
  }

  return { initialize, setItem, getItem }
}

export type TauriStorage = ReturnType<typeof useTauriStorage>
