import Enrollment from "../models/Enrollment.js";

class EnrollmentRepository{
    async createEnrollment(data){
        const enrollment = new Enrollment(data);
        return await enrollment.save();
    }

    async getAllEnrollment(){
        const enrollments = await Enrollment.find();
        return enrollments; 
    }

    async getEnrollmentById(id){
        const enrollment = await Enrollment.findById(id);
        return enrollment;
    }

    async updateEnrollment(id,data){
        return await Enrollment.findByIdAndUpdate(id,data,{new:true});
    }

    async deleteEnrollment(id){
        return await Enrollment.findByIdAndDelete(id);
    }
}

export default EnrollmentRepository;