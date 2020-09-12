import React from 'react'


// TODO:FIXME:
export const parseJSON = (JSON) => {
  const keys = Object.keys(JSON)

  const mappedJSON = keys.map(k => {
    if (Array.isArray(JSON[k])) {
      parseJSON(JSON[k])
    } else if (typeof JSON[k] === 'string') {
      return (
        <p>{JSON[k]}</p>
      )
    } else if (typeof JSON[k] === 'object') {
      parseJSON(JSON[k])
    }
  }
  )

  return (
    <div>
      {mappedJSON}
    </div>
  )
}


/*

if (Array.isArray(JSON[k])) {
      parseJSON(JSON[k])
    } else if (typeof JSON[k] === 'string') {
      console.log(JSON[k])
      return (
        <p>{JSON[k]}</p>
      )
    } else if (typeof JSON[k] === 'object') {
      parseJSON(JSON[k])
    }

*/










// TODO:FIXME: inner values not rendereing properly
// OLD
/*
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
*/