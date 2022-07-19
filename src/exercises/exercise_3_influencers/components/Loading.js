import React from "react"
import styled from "styled-components";

const LoadingDisplay = styled.div`
  height: 30px;
  margin-top: 5px;
  background: #eee;
  background: linear-gradient(110deg, transparent 8%, rgb(133, 138, 151) 18%, transparent 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  -webkit-animation: 2.5s shine linear infinite;
          animation: 2.5s shine linear infinite;

@-webkit-keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
  
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`

const Loading = () => {
  return (
    <LoadingDisplay className="is-LoadingDisplay"></LoadingDisplay>
  )
}

export default Loading