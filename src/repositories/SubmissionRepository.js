import Submission from "../models/Submission.js";

class SubmissionRepository{
    async create(data){
        const submission = new Submission(data);
        return await submission.save();
    }

    async getAll(){
        const submissions = await Submission.find();
        return submissions;
    }

    async getById(id){
        const submission = await Submission.findById(id);
        return submission;
    }

    async update(id, data){
        const updatedSubmission = await Submission.findByIdAndUpdate(id,data);
        return updatedSubmission;

    }

    async delete(id){
        const deletedSubmission = await Submission.findByIdAndDelete(id);
        return deletedSubmission;
    }
}

export default SubmissionRepository;