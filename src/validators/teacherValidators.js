import zod from "zod";

const createTeacherSchema = zod.object({
    name: zod.string().min(3),
    email: zod.email(),
    phone: zod.string().optional(),
    specialization : zod.string().optional()
})

const updateTeacherSchema = zod.object({
    name: zod.string().min(3).optional,
    email: zod.email().optional,
    phone: zod.string().optional(),
    specialization : zod.string().optional()
})

const objectIdSchema = zod.string().length(24);

export default{
    createTeacherSchema,
    updateTeacherSchema,
    objectIdSchema
}