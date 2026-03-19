import Submission from "../models/Submission.js";
import BaseRepository from "./BaseRepository.js";

class SubmissionRepository extends BaseRepository{
    constructor(){
        super(Submission);
    }
}

export default SubmissionRepository;