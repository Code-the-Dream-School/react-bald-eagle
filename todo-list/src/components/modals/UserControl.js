import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import styles from "../../Assets/css/App.module.css";

const UserControl = ({ searchHandler, handler, children }) => {
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
      <Button variant="dark" onClick={handler} className={styles.openButton}>
        {children}
      </Button>
      <input
        className={`${styles.searchInput}, text-center`}
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      ></input>
    </div>
  )
}

UserControl.propTypes = {
  searchHandler: PropTypes.func,
  handler: PropTypes.func,
  children: PropTypes.string
}

export default UserControl
