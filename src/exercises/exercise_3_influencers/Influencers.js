import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import data from '../../data.json'
import './styles.css'

import uniqueBy from '../exercise_1_uniqueBy'
import filterBy from '../exercise_2_filterBy'

import SearchBar from './SearchBar'
import Display from './components/Display'
const Container = styled.div({
  border: '1px solid black',
  borderRadius: 4,
  padding: 24,
  margin: 24,
  background: '#E8EBEC',
})

/*
  TODOs:
    1. Wire in our influencers display on line 44
    2. Wire in a click handler to the button on line 43 that will sort 
       our data by priority
*/

const Influencers = () => {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  // control re-renders
  useEffect(() => {
    const uniqueData = uniqueBy(data, 'member') // use the uniqueBy util to unique our data by the "member" values
    const filtered = filterBy(uniqueData, search, [
      'indicationCategory',
      'affiliation',
      'affiliationPosition',
    ]) // use the filterBy util to filter our data by the given search term
    setFilteredData(filtered)
  }, [search])

  const handleSort = (data) => {
    //sort by priority
    const priorityArray = ["High", "Medium", "Low"]

    const arr = [...data].sort((a, b) => {
      const first = priorityArray.indexOf(a.priority);
      const second = priorityArray.indexOf(b.priority)
      return first - second
    });
    setFilteredData(arr)
  }
  return (
    <Container>
      <h1>Pulse Analytics Take Home Assignment ✏️ </h1>
      <SearchBar setSearch={setSearch} search={search} />
      <button onClick={() => handleSort(filteredData)}>Sort by Priority</button>
      <Display data={filteredData} />
    </Container>
  )
}

export default Influencers
