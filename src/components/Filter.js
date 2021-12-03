import React from 'react'

const Filter = ({ filterValue, eventHandler }) => (
  <form>
    <div>
      filter shown with <input
        value={filterValue}
        onChange={eventHandler}
      />
    </div>
  </form>
)

export default Filter