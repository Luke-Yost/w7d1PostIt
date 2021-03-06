import { dbContext} from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class PicturesService{
  async getAll(query) {
    let pictures = await dbContext.Picture.find()
    .populate('creator')
    .populate('album')
    return pictures
  }


  async create(body){
    let picture = await dbContext.Picture.create(body)
    await picture.populate('creator')
    await picture.populate('album')
    return picture
  }

  async delete(id, userId){
    const picture = await dbContext.Picture.findById(id)
    if(picture.creatorId.toString() != userId){
      throw console.error(' you cant delete other peoples posts dumdum');
    }
    picture.remove()
    return `deleted picture ${picture.imgUrl}`
  }
  async update(id, update){
    const original = await dbContext.Picture.findById(id).populate('creator')
    if(original.creatorId.toString() != update.creatorId){
      throw new BadRequest('you cannot edit other peoples pictures dumdum')
    }
    else{
      original.imgUrl = update.imgUrl || original.imgUrl 
      original.save()
    }    
  }
}
export const picturesService = new PicturesService()