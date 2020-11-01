import React from 'react'

import Talent from './Talent'

const TalentList = ({ talents }) => {
  return (
    <div>
      {talents.map(t => <Talent talent={t} key={t.id} />)}
    </div>
  )
}

export default TalentList
