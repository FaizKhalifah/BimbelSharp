import zod from "zod";

const createStudentSchema = zod.object({
  name: zod.string().min(3),
  email: zod.email(),
  phone: zod.string().optional(),
  school: zod.string().optional(),
  gradeLevel: zod.string().optional()
});

export default {
    createStudentSchema
}