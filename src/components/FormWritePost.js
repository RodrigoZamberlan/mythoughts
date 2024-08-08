import Form from "./Form";
import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

const FormWritePost = () => {
  const { newPost, handleNewPost, handlePublishPost } = useContext(PostContext);
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
      handleSubmit={handlePublishPost}
    />
  );
};

export default FormWritePost;
