import zod from "zod";

const createCourseSchema = zod.object({
    name: zod.string().min(3),
    code: zod.string(),
    teacher: zod.string(),
    students: zod.array().optional(),
})

const updateCourseSchema = zod.object({
    name: zod.string().min(3).optional(),
    code: zod.string().optional(),
    teacher: zod.string().optional(),
    students: zod.array().optional(),
    finalGrades : zod.object().optional()
})

const objectIdSchema = zod.string().length(24);

export default{
    createCourseSchema,
    updateCourseSchema,
    objectIdSchema
}