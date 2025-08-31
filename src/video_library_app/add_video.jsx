
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export function AddVideo(){


    let navigate = useNavigate();

    const [categories, setCategories] = useState([{category_id:0, category_name:null}])

    function LoadCategories(){
        axios.get(`http://localhost:3000/categories`)
        .then(response=>{
            response.data.unshift({category_id:-1, category_name:'Select Category'});
            setCategories(response.data);
        })
    }

    const formik = useFormik({
        initialValues: {
            video_id: 0,
            title: '',
            url: '',
            description: '',
            category_id: 0, 
            likes: 0,
            views:0,
            dislikes: 0,
            comments: ''
        },
        onSubmit: (video)=> {
             video.category_id = parseInt(video.category_id);
             axios.post(`http://localhost:3000/videos`, video)
             .then(()=>{
                console.log('Video Added');
             })
             alert('Video Added');
             navigate('/admin-dashboard');
        }
    })

    useEffect(()=>{
        LoadCategories();
    },[])

    return(
        <div className="bg-light w-50 p-4">
            <h3>Add Video</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl className="row">
                    <dt className="col-3">Video Id</dt>
                    <dd className="col-9"><input onChange={formik.handleChange} type="number" name="video_id" /></dd>
                    <dt className="col-3">Title</dt>
                    <dd className="col-9"><input onChange={formik.handleChange} type="text" name="title" /></dd>
                    <dt className="col-3">Url</dt>
                    <dd className="col-9"><input onChange={formik.handleChange} type="text" name="url" /></dd>
                    <dt className="col-3">Description</dt>
                    <dd className="col-9"><input onChange={formik.handleChange} type="text" name="description" /></dd>
                    <dt className="col-3">Likes</dt>
                    <dd className="col-9"><input onChange={formik.handleChange} type="number" name="likes" /></dd>
                    <dt className="col-3">Dislikes</dt>
                    <dd className="col-9"><input onChange={formik.handleChange} type="number" name="dislikes" /></dd>
                    <dt className="col-3">Views</dt>
                    <dd className="col-9"><input onChange={formik.handleChange} type="number" name="views" /></dd>
                    <dt className="col-3">Category</dt>
                    <dd className="col-9">
                        <select name="category_id" onChange={formik.handleChange}>
                            {
                                categories.map(category=>
                                    <option value={category.category_id}>
                                        {category.category_name}
                                    </option>
                                )
                            }
                        </select>
                    </dd>
                    <dt className="col-3">Comments</dt>
                    <dd className="col-9"><input onChange={formik.handleChange} type="text" name="comments" /></dd>
                </dl>
                <button className="btn btn-warning mx-2">Add Video</button>
                <Link to="/admin-dashboard" className="btn btn-danger"> Cancel </Link>
            </form>
            
        </div>
    )
}
