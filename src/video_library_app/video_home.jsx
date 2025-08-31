import {Link}from "react-router-dom";
export function VideoHome(){
    return(
        <div className="text-center">
            <h2 className="text-center text-white">Video Home</h2>
            <div className="mt-4">
                <Link to="./admin_login"className="btn btn-light">Admin</Link>
                <Link to="./user_login"className="btn btn-warning mx-2">User</Link>
            </div>

        </div>
    )
}
