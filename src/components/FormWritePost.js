import Form from "./Form";
import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import { ModalContext } from "../contexts/ModalContext";

const FormWritePost = () => {
  const { newPost, handleNewPost, addPostToList } = useContext(PostContext);
  const { handleModal} = useContext(ModalContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = JSON.parse(JSON.stringify(newPost));
    addPostToList(post);
    handleModal();
  }

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
      type: "Submit",
    },
  ];

  return (
    <Form
      fields={fieldsWriteForm}
      buttons={buttonsWriteForm}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormWritePost;
