import type { Course } from "../interfaces/Course"

interface Props{
    course : Course
}

const Coursecard: React.FC<Props>=({course})=>{
    return(
        <div>
            <h2>{course.title}</h2>
            <h2>{course.description}</h2>
        </div>
    );
}

export default Coursecard;
