import React from 'react'
import test from '../../data/npcs/test_npc.json'

// TODO: make statblock component
// TODO: make JSON-parser
const NPC = () => {
  const Statblock = ({ stats }) => {
    return (
      <table>
        <tbody>
          <tr>
            <td>M</td>
            <td>WS</td>
            <td>BS</td>
            <td>S</td>
            <td>T</td>
            <td>I</td>
            <td>Agi</td>
            <td>Dex</td>
            <td>Int</td>
            <td>WP</td>
            <td>Fel</td>
            <td>W</td>
          </tr>
          <tr>
            <td>{stats['M']}</td>
            <td>{stats['WS']}</td>
            <td>{stats['BS']}</td>
            <td>{stats['S']}</td>
            <td>{stats['T']}</td>
            <td>{stats['I']}</td>
            <td>{stats['Agi']}</td>
            <td>{stats['Dex']}</td>
            <td>{stats['Int']}</td>
            <td>{stats['WP']}</td>
            <td>{stats['Fel']}</td>
            <td>{stats['W']}</td>
          </tr>
        </tbody>
      </table>
    )
  }
  return (
    <div>
      <ul>
        <li>Name: {test.name}</li>
        <li>Appearance</li>
        <ul>
          <li>General: {test.appearance.general}</li>
          <li>Clothing: {test.appearance.clothing}</li>
          <li>Other: {test.appearance.other}</li>
        </ul>
        <li>Personality: {test.personality}</li>
        <li>Location: {test.location}</li>
        <li>Home: {test.home}</li>
        <li>Position: {test.position}</li>
        <li>Useful skills: {test.useful_skills}</li>
        <li>Mission: {test.mission}</li>
        <li>First goal: {test.first_goal}</li>
        <li>Secrets/Fears: {test.secrets_fears}</li>
        <li>Contacts:</li>
        <ul>
          <li>Friends:</li>
          <ul>
            <li>{test.contacts.friends[0]}</li>
            <li>{test.contacts.friends[1]}</li>
          </ul>
          <li>Enemies:</li>
          <ul>
            <li>{test.contacts.enemies[0]}</li>
            <li>{test.contacts.enemies[1]}</li>
          </ul>
          <li>Other:</li>
          <ul>
            <li>{test.contacts.other[0]}</li>
            <li>{test.contacts.other[1]}</li>
          </ul>
        </ul>
        <Statblock stats={test.stats} />
        <li>Skills:</li>
        <ul>
          <li>{test.skills[0]}</li>
          <li>{test.skills[1]}</li>
        </ul>
        <li>Talents:</li>
        <ul>
          <li>{test.talents[0]}</li>
          <li>{test.talents[1]}</li>
        </ul>
        <li>Trappings:</li>
        <ul>
          <li>{test.trappings[0]}</li>
          <li>{test.trappings[1]}</li>
          <li>{test.trappings[2]}</li>
        </ul>
        <li>Notes:</li>
        <ul>
          <li>{test.notes[0]}</li>
          <li>{test.notes[1]}</li>
        </ul>
      </ul>
    </div>
  )

}

export default NPC