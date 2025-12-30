import { Link } from 'react-router-dom'

function NotFound(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-bold text-4xl text-center">Page Not found</h1>
            <Link to="/">
                <button className="color font-bold text-4xl text-center mt-4 border border-gray-300 rounded-lg p-2">HomePage</button>
                <button className="font-bold text-4xl text-center mt-4 border border-gray-300 rounded-lg p-2">HomePage</button>
            </Link>
        </div>
    )
}
export default NotFound
