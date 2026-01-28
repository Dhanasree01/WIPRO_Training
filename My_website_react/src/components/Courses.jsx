import { useState } from "react";

export default function Courses(){
    const[getHeading ] = useState("Courses are here...");
    const [getCourses,setCourses] = useState([]);

    function  HeadingChange(){
        setCourses("power BI, data science")
    }
    return(<>
    <div className="border-amber-400">
    <h2 className="text-blue-950 border-2 font-bold"> {getHeading} </h2>
    <h1 className="flex-wrap"> {getCourses} </h1>
    <p> You can see my courses now!</p>
    <button onClick={HeadingChange} className="bg-red-500" px-2 py-2 rounded> Upcoming Courses </button> 
    </div> </>)

}