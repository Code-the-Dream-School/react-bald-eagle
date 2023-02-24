import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import NavButton from "./components/inputs-forms/NavButton";
import styles from "./Assets/css/App.module.css";

const Home = ({ user }) => {
  let navigate = useNavigate();
  let path = '/view';

  const routeChange = () => {
    navigate(path);
  }

  return (
    <>
      <div className={styles.welcomeDiv}>
        <h1 className={styles.welcomeHeader}>Welcome {user}!</h1>
        <div className={styles.buttonDiv}>
          <NavButton
            type="button"
            action={routeChange}
            path={path}
          >View Your List</NavButton>
        </div>
      </div>
    </>
  )
}

Home.propTypes = {
  user: PropTypes.string
}

export default Home
