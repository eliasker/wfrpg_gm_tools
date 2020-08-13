import React from 'react'

const Statblock = ({ stats }) => {
  const keys = Object.keys(stats)
  var keyRow = []
  var valueRow = []

  keys.map(k => {
    keyRow.push(k)
    valueRow.push(stats[k])
    return true
  })

  const createRow = (values, name) =>
    <tr>{values.map((v, index) => <td key={`${name}${index}`}>{v}</td>)}</tr>

  return (
    <table>
      <tbody>
        {createRow(keyRow, 'keys')}
        {createRow(valueRow, 'values')}
      </tbody>
    </table>
  )
}

export default Statblock