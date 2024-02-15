import "./App.css";
import { useState } from "react"
function App() {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const handleLike = () => {
    //update the likes variable
    setLikes(likes + 1)
  };

  const handleDislike = () => {
    //update the dislikes variable
    setDislikes(dislikes + 1)
  };

  return (
    <div>
      {/* <button className="button">Click me</button> */}
      <h1 className="">Like/Dislike App</h1>

      <button onClick={ handleLike }>👍 Like</button>
      <span>{likes}</span>

      
      
      <button onClick={ handleDislike }>👎 Dislike</button>
      <span>{dislikes}</span>

      
    </div>
  )
}

export default App