import { Link,useNavigate } from "react-router-dom"
import{useEffect,useState}from "react";
import axios from "axios";

export function AdminDashboard(){
    const[videos, setVideos]=useState([{
        id: 0,
        video_id: 0,
        title: "",
        url: "",
        description: "",
        category_id: 0, 
        likes: 0,
        views:0,
        dislikes: 0,
        comments: ""
    }])
    let navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3000/videos`)
        .then(response=>{
            setVideos(response.data)
        })
    },[])
    function handlSignoutClick(){
        window.sessionStorage.removeItem('uname')
        navigate('/');
    }
    return(
        <div className="p-4 bg light">
            <h3 className="d-flex justify-content-between">{window.sessionStorage.getItem('uname')}-Dashboard<Link to="/add_video"className="btn btn-primary bi bi-camera-video">Add Video</Link><button onClick={handlSignoutClick}className="btn btn-link">Signout</button></h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        videos.map(video=>
                            <tr key={video.id}>
                                <td>{video.title}</td>
                                <td><iframe src={video.url}width="200" height="100"></iframe></td>
                                <td>
                                    <Link to={`/edit-video/${video.id}`}className="bi btn btn-warning bi bi-pen-fill"></Link>
                                    <Link to={`/delete-video/${video.id}`}className="bi bi-trash-fill btn btn-danger mx-2"></Link>
                                </td>
                                </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}
