import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styles from "../../Assets/css/App.module.css";

const UserControl = ({ searchHandler, handler, children }) => {
  const [input, setInput] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    setInput(event.target.value)
    // searchHandler(input)
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

export default UserControl
