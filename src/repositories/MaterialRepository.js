import Material from "../models/Material.js";
import BaseRepository from "./BaseRepository.js";

class MaterialRepository extends BaseRepository{
    constructor(){
        super(Material);
    }
}

export default MaterialRepository;