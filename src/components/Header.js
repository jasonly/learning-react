//es7 prop types: read more about this vs typescript
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = (evt) => {
    console.log('weh', evt)
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        onClick={onClick}
        color='blue'
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
