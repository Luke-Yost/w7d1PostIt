import { dbContext} from "../db/DbContext"

class PicturesService{
  // async getAll( ){

  // }

  // async getById(){

  // }

  async create(body){
    let picture = await dbContext.Pictures.create(body)
    await picture.populate('creator', '_id name')
    return picture
  }

  // async update(id, update){
  //   const original = await dbContext.Pictures.findById(id)
  // }
  async delete(id, userId){
    const picture = await dbContext.Pictures.findById(id)
    if(picture.creatorId.toString() != userId){
      throw console.error(' you cant delete other peoples posts dumdum');
    }
    picture.remove()
    return `deleted picture ${picture.imgUrl}`
  }

}

export const picturesService = new PicturesService()