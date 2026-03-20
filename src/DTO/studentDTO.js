function createStudentDTO(body){
    return{
        name:body.name,
        phone:body.phone,
        email:body.email,
        school:body.school,
        grade:body.grade
    }
}

function updateStudentDTO(body) {
  return {
    ...(body.name && { name: body.name }),
    ...(body.phone && { phone: body.phone }),
    ...(body.email && { email: body.email }),
    ...(body.school && { school: body.school }),
    ...(body.grade && { gradeLevel: body.grade })
  };
}

export default{
    createStudentDTO,
    updateStudentDTO
}