import zod from "zod";

const createStudentSchema = zod.object({
  name: zod.string().min(3),
  email: zod.email(),
  phone: zod.string().optional(),
  school: zod.string().optional(),
  gradeLevel: zod.string().optional()
});

const updateStudentSchema = zod.object({
  name: zod.string().min(3).optional(),
  email: zod.email().optional(),
  phone: zod.string().optional(),
  school: zod.string().optional(),
  grade: zod.string().optional()
});

const objectIdSchema = zod.string().length(24);

export default {
    createStudentSchema,
    updateStudentSchema,
    objectIdSchema
}