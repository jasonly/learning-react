//es7 prop types: read more about this vs typescript
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        color={showAdd ? 'red' : 'blue' }
        text={ showAdd ? 'close' : 'open' }
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
