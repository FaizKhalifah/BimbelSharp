import Material from "../models/Material.js";

class MaterialRepository{
    async createMaterial(data){
        const material = new Material(data);
        return await material.save();
    }

    async getAllMaterial(){
        const materials = await Material.find();
        return materials;
    }

    async getMaterialById(id){
        const material = await Material.findById(id);
        return material;
    }

    async updateMaterial(data,id){
        const updatedMaterial = await Material.findByIdAndUpdate(id,data,{new:true});
        return updatedMaterial;
    }

    async deleteMaterial(id){
        const deletedMaterial = await Material.findByIdAndDelete(id);
        return deletedMaterial;
    }
}

export default MaterialRepository;