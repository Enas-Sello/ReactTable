/////////// IMPORTS
///
//import classes from './Search.module.css'
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Filter = ({ column }) => {
  /////////// VARIABLES
  ///
    const { filterValue, setFilter } = column
  /////////// CUSTOM HOOKS
  ///
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///

  ///
  return (
    <div>
      <input
        value={filterValue}
        onChange={(e) => setFilter(e.target.value)}
        type="text"
        placeholder="بحث"
      />
    </div>
  )
}
