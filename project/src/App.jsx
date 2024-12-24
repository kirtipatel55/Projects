import { useState, useEffect } from 'react'
import './App.css'
import CandidateTable from './components/CandidateTable'
import SearchBar from './components/SearchBar'

function App() {
  const [candidates, setCandidates] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortByExperience, setSortByExperience] = useState(false)

  // Simulating API call with mock data
  useEffect(() => {
    const mockCandidates = [
      { id: 1, name: 'John Doe', skills: 'React, JavaScript, HTML, CSS', yearsOfExperience: 3 },
      { id: 2, name: 'Jane Smith', skills: 'Python, Django, SQL', yearsOfExperience: 5 },
      { id: 3, name: 'Mike Johnson', skills: 'Node.js, Express, MongoDB', yearsOfExperience: 4 },
      { id: 4, name: 'Sarah Williams', skills: 'React, Redux, TypeScript', yearsOfExperience: 2 },
      { id: 5, name: 'Tom Brown', skills: 'Angular, JavaScript, Firebase', yearsOfExperience: 6 },
      { id: 6, name: 'Emily Davis', skills: 'Vue.js, JavaScript, HTML, CSS', yearsOfExperience: 3 },
      { id: 7, name: 'David Wilson', skills: 'React Native, JavaScript, Mobile', yearsOfExperience: 4 },
      { id: 8, name: 'Lisa Anderson', skills: 'PHP, Laravel, MySQL', yearsOfExperience: 5 },
      { id: 9, name: 'Chris Martin', skills: 'Java, Spring Boot, PostgreSQL', yearsOfExperience: 7 },
      { id: 10, name: 'Amy Roberts', skills: 'React, Node.js, MongoDB', yearsOfExperience: 4 }
    ]
    setCandidates(mockCandidates)
  }, [])

  const filteredCandidates = candidates.filter(candidate => {
    const searchLower = searchTerm.toLowerCase()
    return (
      candidate.name.toLowerCase().includes(searchLower) ||
      candidate.skills.toLowerCase().includes(searchLower)
    )
  })

  const sortedCandidates = sortByExperience
    ? [...filteredCandidates].sort((a, b) => b.yearsOfExperience - a.yearsOfExperience)
    : filteredCandidates

  return (
    <div className="app-container">
      <h1>Candidate List Viewer</h1>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <CandidateTable 
        candidates={sortedCandidates}
        sortByExperience={sortByExperience}
        setSortByExperience={setSortByExperience}
      />
    </div>
  )
}

export default App