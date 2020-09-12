import React, { useState } from 'react'
import { hitLocations, critTableImages } from '../../../data/tables'
import useContent from '../../../hooks/useContent'

const HitLocation = () => {
  const [image, setImage] = useState({ img: null })
  const [current, showCurrent] = useContent()

  const generateTable = () => {

    const handleClick = (e, type) => {
      e.preventDefault()
      if (current === type) {
        setImage({ img: null })
        showCurrent(null)
        return
      }
      const foundImage = critTableImages.find(i => i.type === type)
      setImage(foundImage)
      showCurrent(foundImage.type)
    }

    return (
      <table>
        <tbody>
          {hitLocations.map(r =>
            <tr className="pointer" onClick={(e) => handleClick(e, r.type)} key={r.diceRoll}>
              <td>{r.diceRoll}</td>
              <td>{r.location}</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <p>Reverse hit roll, i.e 31 = 13</p>
      {generateTable()}
      {image.img === null ? null : <img className='tableImage' src={image.img} alt='Crit table' />}
    </div>
  )
}

export default HitLocation
