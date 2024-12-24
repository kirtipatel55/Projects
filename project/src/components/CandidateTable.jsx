function CandidateTable({ candidates, sortByExperience, setSortByExperience }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th onClick={() => setSortByExperience(!sortByExperience)} className="sortable">
              Years of Experience {sortByExperience ? '↓' : '↑'}
            </th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.skills}</td>
              <td>{candidate.yearsOfExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CandidateTable