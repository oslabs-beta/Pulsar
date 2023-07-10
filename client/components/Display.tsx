import React from 'react'
import Graph from './Graph'
import GraphData from './GraphData'
import { useState } from 'react'


//move graph data to graph component, set an array of 6 graph data key's and assign that index to the key value of each graph being pushed. set initial state
// to be equal to a position in that array. Have graph render new URL based on setUrl setState defined in graphMenu.

export default function Display() {
  const result = GraphData()
  const data = result.graphData

  const graphDataArray = [data['messagesIn'], data['messagesOut'], data['backlog']]


  const [name, setName] = useState<string>('messagesIn');
  const [url, setUrl] = useState<string>('')
  let graphArr = [];
  for (let i = 0; i < 6; i++) {
    graphArr.push(<Graph name={name} setName={setName} url={url} setUrl={setUrl} key={i} />)
  }
  return (
    <div className='DisplayContainer'>
      {graphArr}
    </div>
  )
}
