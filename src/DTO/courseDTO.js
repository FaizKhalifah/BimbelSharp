function createCourseDTO(body){
    return{
        name:body.name,
        code:body.code,
        teacher:body.teacher,
    }
}

function updateCourseDTO(body){
    return{
        ...(body.name && { name: body.name }),
        ...(body.code && { code: body.code }),
        ...(body.teacher && { teacher: body.teacher }),
        ...(body.students && { students: body.students }),
        ...(body.finalGrades && { finalGrades: body.finalGrades })
    }
}

export default{
    createCourseDTO,
    updateCourseDTO
}