import Material from "../models/Material.js";
import BaseRepository from "./BaseRepository.js";

class MaterialRepository extends BaseRepository{
    constructor(){
        super(Material);
    }

    async getAllWithPagination(skip, limit) {
        return this.model
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();
    }
}

export default MaterialRepository;