import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import NavButton from '../inputs-forms/NavButton';
import styles from "../../Assets/css/App.module.css";

const UserControl = ({ searchHandler, handler, children, onClick, updateList, path, buttonText, routeChange }) => {
  const [input, setInput] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }

  useEffect(() => {
    searchHandler(input)
  }, [input])

  return (
    <div className={styles.infoDiv}>
      <Button
        variant='dark'
        onClick={onClick}
        className={styles.openButton}
      >Home</Button>

      {
        buttonText === "Edit List" ?
          <Button variant="dark" onClick={handler} className={styles.openButton}>
            {children}
          </Button> : <></>
      }

      <NavButton
        type="button"
        action={routeChange}
        path={'/edit'}
      >{buttonText}</NavButton>

      <Button variant="dark" onClick={updateList} className={styles.openButton}>
        Refresh List
      </Button>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search List"
        onChange={handleSearch}
      ></input>
    </div>
  )
}

UserControl.propTypes = {
  searchHandler: PropTypes.func,
  handler: PropTypes.func,
  children: PropTypes.string,
  onClick: PropTypes.func
}

export default UserControl
