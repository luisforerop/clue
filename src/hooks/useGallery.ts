import { useEffect, useState } from 'react'
import { AwardType } from '../shared/models'

export const useGallery = () => {
  const [gallery, setGallery] = useState<AwardType[]>([])

  const newAward = (award: AwardType) => {
    setGallery((curr) => curr.concat([award]))
  }

  useEffect(() => {
    try {
      const galleryFromLocal = localStorage.getItem('gallery') ?? '[]'
      const localGallery = JSON.parse(galleryFromLocal)
      setGallery(localGallery)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('gallery', JSON.stringify(gallery))
  }, [gallery])

  return {
    gallery,
    newAward,
  }
}
