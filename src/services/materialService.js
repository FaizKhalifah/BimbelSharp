import MaterialRepository from "../repositories/MaterialRepository.js";
import CourseRepository from "../repositories/courseRepository.js";
import utils from "../utils/index.js";
import appErrors from "../utils/app-errors.js";

const {formateData} = utils;
const {ConflictError, BadRequestError, InternalError} = appErrors;

class MaterialService{
    constructor(){
        this.MaterialRepository = new MaterialRepository();
        this.CourseRepository = new CourseRepository();
    }

    async createMaterial(materialData){
        const isCourseAvailable = await this.CourseRepository.findById(materialData.course);
        if(!isCourseAvailable){
            throw new BadRequestError("Course not found");
        }
        const createMaterialResult = await this.MaterialRepository.create(materialData);
        return formateData(createMaterialResult);

    }

}

export default new MaterialService();