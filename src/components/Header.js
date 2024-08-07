import styles from "./styles/Header.module.css";
import Input from "./Input.js";
import Button from "./Button.js";

const Header = ({searchText, handleModal, handleSearchTextChange, handleSearchKeyDown}) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1>MyThoughts</h1>
          <div className={styles.inputSearch}>
            <Input
              id="search-input"
              name="search"
              type="text"
              value={searchText}
              handleChange={handleSearchTextChange}
              handleKeyDown={handleSearchKeyDown}
              placeholder="Search for what you want to read"
            />
          </div>
          <Button
            text="Write"
            handleClick={handleModal}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
