import axios from "axios";
import  {useEffect,useState} from "react";
export function JsonPlaceholder(){
    const [users,setUsers]=useState([]); 
     const[posts,setPosts]=useState([]);
      const [photos, setPhotos] = useState([]);
      const [albums, setAlbums] = useState([]);


       useEffect(()=>{
        LoadUsers();
        LoadPosts();
        LoadPhotos();
        LoadAlbums();

        },[])
     function LoadUsers(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            setUsers(response.data);
        })
     }
     function LoadPosts(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            setPosts(response.data);
        })
     }
     function LoadPhotos(){
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=50")
        .then(response=>{
            setPhotos(response.data);
            console.log(response.data)
        })
     }
     function LoadAlbums(){
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(response=>{
                setAlbums(response.data);
            })
        }
     
   
    return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>

      <h2>Posts List</h2>
      <main>
        {posts.map(post => {
          const user = users.find(u => u.id === post.userId);
          return (
            <div key={post.id} style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <small> {user ? user.name : "Unknown User"}</small>
            </div>
          );
        })}
      </main>

      <h2>Albums List</h2>
      <div>
        {albums.slice(0, 5).map(album => {
          const user = users.find(u => u.id === album.userId);
          return (
            <div key={album.id} style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}>
              <h4>{album.title}</h4>
              <small> {user ? user.name : "Unknown User"}</small>
            </div>
          );
        })}
      </div>

      <h2>Photos List</h2>
      {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {photos.map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} width="100" />
        ))}
      </div> */}
      {
        photos.map((item, inde)=>(
          <p key={inde}>id:{item.id}<img src={item.thumbnailUrl} alt="img-notfound" />{item.url} title:{item.title}</p>
        ))
      }
       </div>
  );
}

    
    