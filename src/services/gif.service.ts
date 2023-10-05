import API from '../config/axios.config'
import { GifRes } from '../types/types'

const { VITE_GIPHY_API_KEY } = import.meta.env
const TAKE = 25

const search = async (search: string, page: number): Promise<GifRes> => {
  const offset = page * TAKE - TAKE

  const res = await API.get<GifRes>('v1/gifs/search', {
    params: {
      offset,
      q: search,
      api_key: `${VITE_GIPHY_API_KEY}`,
      limit: TAKE
    }
  })
  return res.data
}

const GifService = {
  search
}

export default GifService
