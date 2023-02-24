import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import styles from "../../Assets/css/App.module.css";

const UserControl = ({ searchHandler, handler, children, onClick }) => {
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
        className={styles.navigationButton}
      >Home</Button>

      <Button variant="dark" onClick={handler} className={styles.openButton}>
        {children}
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
