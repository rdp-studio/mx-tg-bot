import axios from 'axios'

export const fetchHitokoto = async () => {
  return (await axios.get('https://v1.hitokoto.cn/', { timeout: 20000 })).data
}
