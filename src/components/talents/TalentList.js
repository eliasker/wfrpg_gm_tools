import React from 'react'

import Talent from './Talent'

const TalentList = ({ talents }) => {
  return (
    <div>
      <h4>Talent list:</h4>
      <div className="columns">
        {talents.map(t => <Talent talent={t} key={t.id} />)}
      </div>
    </div>
  )
}

export default TalentList
