export default function uniqueBy(data, key) {
  const uniqueArray = []
  const hashMap = new Map()

  for (const profile of data) {
    if (hashMap.has(profile[key])) {
      //replace uniqueArray element at original index
      const index = hashMap.get(profile[key])
      uniqueArray[index] = profile;
    }
    else {
      //set hashmap and
      hashMap.set(profile[key], data.indexOf(profile))
      uniqueArray.push(profile)
    }
  }
  return uniqueArray
}
