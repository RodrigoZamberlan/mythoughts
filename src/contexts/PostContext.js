import { createContext, useState } from "react";

export const PostContext = createContext("");

export const PostProvider = ({ children }) => {
  const [newPost, setNewPost] = useState({ titleInput: "", contentInput: "" });
  const [listOfPosts, setListOfPosts] = useState([]);
  const [filteredListOfPosts, setFilteredListOfPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [hasResults, setHasResults] = useState(true);

  const handleNewPost = (event) => {
    const { name, value } = event.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

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
          setHasResults(true);
        } else {
          setHasResults(false);
        }
      } else {
        setFilteredListOfPosts([]);
        setHasResults(true);
      }
    }
  };

  const handlePublishPost = (event) => {
    event.preventDefault();
    const post = JSON.parse(JSON.stringify(newPost));
    setListOfPosts((prevPosts) => [...prevPosts, post]);
    setNewPost({ titleInput: "", contentInput: "" });
  };

  const handleRemovePost = (index) => {
    setListOfPosts((prevPosts) => prevPosts.filter((_, i) => i !== index));
  };

  return (
    <PostContext.Provider
      value={{
        newPost,
        listOfPosts,
        filteredListOfPosts,
        searchText,
        hasResults,
        handleNewPost,
        handleSearchTextChange,
        handleSearchKeyDown,
        handlePublishPost,
        handleRemovePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
