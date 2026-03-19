import Assignment from "../models/Assignment.js";
import BaseRepository from "./BaseRepository.js";

class AssignmentRepository extends BaseRepository{
    constructor(){
        super(Assignment);
    }
}

export default AssignmentRepository;