import Button from 'react-bootstrap/Button';
import styles from "../../Assets/css/App.module.css";

const UserControl = ({ handler, children }) => {
  return (
    <div className={styles.infoDiv}>
      <Button variant="dark" onClick={handler} className={styles.openButton}>
        {children}
      </Button>
      <input className={styles.searchInput} type="text"></input>
    </div>
  )
}

export default UserControl
