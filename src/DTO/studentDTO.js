function createStudentDTO(body){
    return{
        name:body.name,
        phone:body.phone,
        email:body.email,
        school:body.school,
        grade:body.grade
    }
}

export default{
    createStudentDTO
}