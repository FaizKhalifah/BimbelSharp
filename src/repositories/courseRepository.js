import Course from "../models/Course.js";
import BaseRepository from "./BaseRepository.js";

class CourseRepository extends BaseRepository{
    constructor(){
        super(Course);
    }
}
export default{
    CourseRepository
}