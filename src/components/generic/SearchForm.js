import React from 'react'

const SearchForm = ({ searchInput, setSearchInput, placeholder }) => {
  return (
    <div className="search-container">
      <form onSubmit={e => e.preventDefault()}>
        <input type='search'
          placeholder={placeholder}
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchForm
