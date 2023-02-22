import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import styles from "../../Assets/css/App.module.css";

const UserControl = ({ searchHandler, handler, children }) => {
  const [input, setInput] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    setInput(event.target.value)
    searchHandler(input)
  }

  return (
    <div className={styles.infoDiv}>
      <Button variant="dark" onClick={handler} className={styles.openButton}>
        {children}
      </Button>
      <input 
      className={`${styles.searchInput}, text-center`} 
      type="text" 
      placeholder="Search List"
      onChange={handleSearch}
      ></input>
    </div>
  )
}

export default UserControl
