import "../index.css";
import Globe from '../assets/Globe.svg'
function Header() {
  return (
    <>
      <header>
        <img src={Globe} alt=""  />
        <p>my travel journal</p>
      </header>
    </>
  );
}

export default Header;
