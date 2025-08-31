import { useParams } from "react-router-dom";
import{Link,useNavigate}from "react-router-dom";
import{useEffect,useState}from "react";
import axios from "axios";
export function DeleteVideo(){
    let params=useParams();
    let navigate=useNavigate();
     const [video, setVideo] = useState(
            {
            id: 0,
            video_id: 0,
            title: null,
            url: null,
            description: null,
            category_id: 0, 
            likes: 0,
            views:0,
            dislikes: 0,
            comments: null
         }
        )
        useEffect(()=>{
             axios.get(`http://localhost:3000/videos/${params.id}`)  
             .then(response=>{
                setVideo(response.data);
             })
        },[params.id])

        function handleYesClick(){
            axios.delete(`http://localhost:3000/videos/${params.id}`)
            .then(()=>{
                console.log(`delete`);
            })
            alert('Deleted successfully!..');
            navigate('/admin_dashboard');
        }
           return(
            <div className="bg-light p-2 w-25">
                <h3>Delete video</h3>
                <p>Are you sure? you want to delete?</p>
                <dl>
                    <dt>Title</dt>
                    <dd>{video.title}</dd>
                    <dt>Preview</dt>
                    <dd><iframe width="200"height="100" src={video.url}></iframe></dd>
                </dl>
                <button onClick={handleYesClick}className="btn btn-danger">Yes</button>
                <Link to="/admin_dashboard"className="btn btn-warning mx-2">No</Link>
            </div>
           )
        }
    

