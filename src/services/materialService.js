import MaterialRepository from "../repositories/MaterialRepository.js";
import CourseRepository from "../repositories/courseRepository.js";
import utils from "../utils/index.js";
import appErrors from "../utils/app-errors.js";

const {formateData} = utils;
const {ConflictError, BadRequestError, InternalError} = appErrors;

class MaterialService{
    constructor(){
        this.materialRepository = new MaterialRepository();
        this.courseRepository = new CourseRepository();
    }

    async createMaterial(materialData){
        const isCourseAvailable = await this.courseRepository.findById(materialData.course);
        if(!isCourseAvailable){
            throw new BadRequestError("Course not found");
        }
        const createMaterialResult = await this.materialRepository.create(materialData);
        return formateData(createMaterialResult);

    }

    async getAllMaterial({ page = 1, limit = 10 } = {}){
        const skip = (page - 1) * limit;

        const materials = await this.materialRepository.getAllWithPagination(skip,limit);

        return formateData({
            page,
            limit,
            data: materials
        });

    }

    async getMaterialById(id){
        const material = await this.materialRepository.findById(id);
        if(!material){
            throw new BadRequestError("Material not found");
        }
        return formateData(material);
    }

    async updateMaterial(id,updateData){
        const isAvailable = await this.materialRepository.findById(id);
        if(!isAvailable){
             throw new BadRequestError("Material not found");
        }
        const updateResult = await this.materialRepository.update(id,updateData);
        return formateData(updateResult);
    }

    async deleteMaterial(id){
        const isAvailable = await this.materialRepository.findById(id);
        if(!isAvailable){
             throw new BadRequestError("Material not found");
        }
        const deleteResult = await this.materialRepository.delete(id);
        return formateData(deleteResult);
    }

}

export default new MaterialService();