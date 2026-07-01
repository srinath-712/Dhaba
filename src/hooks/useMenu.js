import { useState, useMemo } from 'react'
import menuData from '../data/menu.json'

export function useMenu() {
  const [category, setCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [vegOnly, setVegOnly] = useState(false)

  const filteredMenu = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory = category === 'all' || item.category === category
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (item.description || '').toLowerCase().includes(searchQuery.toLowerCase())
      const matchesVeg = !vegOnly || item.isVeg === true
      return matchesCategory && matchesSearch && matchesVeg
    })
  }, [category, searchQuery, vegOnly])

  return {
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    vegOnly,
    setVegOnly,
    filteredMenu,
  }
}
