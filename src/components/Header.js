import styles from "./styles/Header.module.css";
import Input from "./Input.js";
import Button from "./Button.js";
import { ModalContext } from "../contexts/ModalContext.js";
import { PostContext } from "../contexts/PostContext.js";
import { useContext } from "react";

const Header = () => {
  const { searchText, handleSearchTextChange, handleSearchKeyDown } = useContext(PostContext);
  const { handleModal } = useContext(ModalContext);

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
