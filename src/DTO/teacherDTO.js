function createTeacherDTO(body){
    return{
        name:body.name,
        phone : body.phone,
        email:body.email,
        specialization:body.specialization || "general"
    }

}

function updateTeacherDTO(body){
    return{
        ...(body.name && { name: body.name }),
        ...(body.phone && { phone: body.phone }),
        ...(body.email && { email: body.email }),
        ...(body.specialization && { email: body.specialization }),
    }
}

export default{
    createTeacherDTO,
    updateTeacherDTO
}