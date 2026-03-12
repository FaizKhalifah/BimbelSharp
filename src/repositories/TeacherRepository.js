import Teacher from "../models/Teacher.js";

class TeacherRepository{
    async create(data){
        const teacher = new Teacher(data);
        return await teacher.save();
    }

    async getAll(){
        const teachers = await Teacher.find();
        return teachers;
    }

    async getById(id){
        const teacher = await Teacher.findById(id);
        return teacher;
    }

    async update(id, data){
        const updatedTeacher = await Teacher.findByIdAndUpdate(id, data);
        return updatedTeacher;
    }

    async delete(id){
        const deletedTeacher = await Teacher.findByIdAndDelete(id);
        return deletedTeacher;
    }
}

export default TeacherRepository;