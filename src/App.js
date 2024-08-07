import "./App.css";
import { useState } from "react";
import Header from "./components/Header.js";
import Modal from "./components/Modal.js";
import Form from "./components/Form.js";
import ListOfPosts from "./components/ListOfPosts";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    titleInput: "",
    contentInput: "",
  });
  const [listOfPosts, setListOfPosts] = useState([]);
  const [filteredListOfPosts, setFilteredListOfPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      if (searchText) {
        const prevList = listOfPosts;
        const filteredList = prevList.filter(
          (post) =>
            post.titleInput.toLowerCase().includes(searchText) ||
            post.contentInput.toLowerCase().includes(searchText)
        );

        if (filteredList && filteredList.length > 0) {
          setFilteredListOfPosts(filteredList);
        }
      } else {
        setFilteredListOfPosts([]);
      }
    }
  };

  const handleModal = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  const handleNewPost = (event) => {
    const { name, value } = event.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handlePublishPost = () => {
    const post = JSON.parse(JSON.stringify(newPost));
    setListOfPosts((prevPosts) => [...prevPosts, post]);
    setNewPost({ titleInput: "", contentInput: "" });
    handleModal();
  };

  const handleRemovePost = (index) => {
    setListOfPosts((prevPosts) => prevPosts.filter((_, i) => i !== index));
  };

  const fieldsWriteForm = [
    {
      tag: "input",
      id: "titleInput",
      name: "titleInput",
      type: "text",
      value: newPost.titleInput,
      placeholder: "Type the title of your post here",
      label: "Title",
      handleChange: handleNewPost,
      handleKeyDown: () => {},
      required: true,
      maxLength: 30,
      customStyle: {},
    },
    {
      tag: "textarea",
      id: "contentInput",
      name: "contentInput",
      text: newPost.contentInput,
      label: "Content",
      rows: 5,
      handleChange: handleNewPost,
      placeholder: "Type your content here",
      required: true,
      maxLength: 500,
      customStyles: {},
    },
  ];

  const buttonsWriteForm = [
    {
      id: "btnPublish",
      text: "Publish",
      handleClick: handlePublishPost,
    },
  ];

  return (
    <div className="App">
      <Header
        handleSearchTextChange={handleSearchTextChange}
        handleSearchKeyDown={handleSearchKeyDown}
        handleModal={handleModal}
      />
      <Modal show={isModalOpen} handleModal={handleModal}>
        <div className="form-container">
          <Form fields={fieldsWriteForm} buttons={buttonsWriteForm} />
        </div>
      </Modal>
      <ul className="main-content">
        <ListOfPosts
          posts={
            filteredListOfPosts.length > 0 ? filteredListOfPosts : listOfPosts
          }
          handleRemovePost={handleRemovePost}
        />
      </ul>
    </div>
  );
}

export default App;
