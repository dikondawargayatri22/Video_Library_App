import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { VideoHome } from './video_home';
import { AdminLogin } from './Admin_Login';
import { AdminDashboard } from './admin_dashboard';
import './video_index.css';
import { AddVideo } from './add_video';
import { DeleteVideo } from './delete_video';
import { Edit } from './edit';
import { UserRegister } from './user_register';
import { UserLogin } from './user_login';
import { UserDashboard } from './user_dashboard';

export function VideoIndex(){
    return(
        <div className="bg-banner">
            <BrowserRouter>
            <header className='text-center p-2 text white'>
                <div className="fs-1 fw-bold"><Link to="/"className="btn btn-light"><span className="bi bi-house-door"></span>Video Podcast</Link></div>
                <div>[Java,React,.Net]</div>
            </header>
            <section>
                
                    <Routes>
                    <Route path="/" element={<VideoHome />} />
                    <Route path="/admin_login" element={<AdminLogin />} />
                    <Route path="/admin_dashboard" element={<AdminDashboard />} />
                    <Route path="/add_video" element={<AddVideo />} />
                    <Route path="/delete-video/:id" element={<DeleteVideo />} />
                    <Route path="/edit-video/:id" element={<Edit />} />
                    <Route path="/user_register"element={<UserRegister/>}/>
                    <Route path="/user-login"element={<UserLogin/>}/>
                    <Route path="/user-dashboard"element={<UserDashboard/>}></Route>
                    </Routes>    
            </section>
            </BrowserRouter>
        </div>
    )
}