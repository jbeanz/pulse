export default function filterBy(data, searchTerm, keys) {
  const matches = data.filter(profile => {
    //iterate through keys
    for (const key of keys) {
      if (profile[key].toLowerCase().includes(searchTerm.toLowerCase())) return true
    }
    return false
  })
  return matches
}

