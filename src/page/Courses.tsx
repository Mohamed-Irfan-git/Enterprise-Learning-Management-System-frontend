import type { Course } from "../interfaces/Course";
import Coursecard from "../components/Coursecard";

const courseData : Course={
    id:1,
    title:"School siramadhan",
    description:"Participate everyone"
};

const Courses:React.FC=()=>{
    return(
        <>
            <Coursecard course={courseData}/>
        </>
    );
}
export default Courses