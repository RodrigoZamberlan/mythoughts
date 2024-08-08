import "./App.css";
import Header from "./components/Header.js";
import Modal from "./components/Modal.js";
import FormWritePost from "./components/FormWritePost.js";
import ListOfPosts from "./components/ListOfPosts";
import { PostProvider } from "./contexts/PostContext.js";
import { ModalProvider } from "./contexts/ModalContext.js";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <ModalProvider>
          <Header />
          <Modal>
            <div className="form-container">
              <FormWritePost />
            </div>
          </Modal>
        </ModalProvider>
        <div className="main-content">
          <ListOfPosts />
        </div>
      </PostProvider>
    </div>
  );
}

export default App;
