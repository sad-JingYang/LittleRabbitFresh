import { http } from '@/utils/http'

export function FetchBanner() {
  return http({
    method: 'GET',
    url: '/home/banner',
  })
}
