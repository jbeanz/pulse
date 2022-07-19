import React from "react"
import Loading from "./Loading"
import styled from "styled-components";

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;

  td,
  th {
    border: none;
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

const Display = ({ data }) => {
  return (
    <div >
      <StyledTable>
        <caption>Influencers Data</caption>
        <thead>
          <tr>
            <th className="text-left align-middle">Member</th>
            <th className="text-left align-middle">Type</th>
            <th className="text-left align-middle">Category</th>
            <th className="text-left align-middle">Affiliation</th>
            <th className="text-left align-middle">Title</th>
            <th className="text-left align-middle">State</th>
            <th className="text-left align-middle">Priority</th>
          </tr>
        </thead>
        {data ?
          <tbody>
            {data.map((profile, index) => {
              return (
                <tr key={1001 + index}>
                  {Object.keys(profile).map(key => {
                    return <>
                      <td > {profile[key]}</td>
                    </>
                  })}
                </tr>)
            })
            }
          </tbody>
          : <tbody>
            <tr>
              <td colSpan={3}>
                <Loading />
              </td>
            </tr>
          </tbody>}
      </StyledTable>
    </div>
  )
}

export default Display