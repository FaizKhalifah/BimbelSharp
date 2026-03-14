import Assignment from "../models/Assignment.js";

class AssignmentRepository{
    async createAssignment(data){
        const assignment = new Assignment(data);
        return await assignment.save();
    }

    async getAllAssignment(){
        const assignments = await Assignment.find()
        return assignments;
    }

    async getAssignmentById(id){
        const assignment = await Assignment.findById(id);
        return assignment;
    }

    async updateAssignment(id, data){
        const updatedAssignment = await Assignment.findByIdAndUpdate(id,data,{new:true});
        return updatedAssignment;
    }

    async deleteAssignment(id){
        const deletedAssignment = await Assignment.findByIdAndDelete(id);
        return deletedAssignment;
    }
}

export default AssignmentRepository;