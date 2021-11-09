import React from 'react'
import Button from './Button'

const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button 
            color={props.showAdd ? 'blue' : '#E63E6D'}
            text={props.showAdd ? 'Close' : 'Add'}
            onClick={props.onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
  }
  
//   Header.propTypes = {
//     title: PropTypes.string.isRequired,
//   }

export default Header;
