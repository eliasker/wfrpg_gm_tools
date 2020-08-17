import React from 'react'

// TODO:FIXME: inner values not rendereing properly
export const parseNPC = (JSON) => {
  const keys = Object.keys(JSON)

  const handleKey = (key, material) => {
    switch (typeof material[key]) {
      case 'string':
        return (<li>{key}: {material[key]}</li>)
      case 'object':
        const innerkeys = Object.keys(material[key])
        if (Array.isArray(material[key])) {
          return (
            <ul>
              {material[key].map(innerValue => <li>{innerValue}</li>)}
            </ul>
          )
        } else {
          return innerkeys.map(iKey => <li>{iKey}: {material[key][iKey]}</li>)
        }
      default:
        break
    }
  }
  return (
    <div>
      <ul>
        {keys.map(key => handleKey(key, JSON))}
      </ul>
    </div>
  )
}