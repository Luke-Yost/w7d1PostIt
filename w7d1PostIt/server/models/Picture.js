import mongoose from 'mongoose'
import { AlbumSchema } from "./Album"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PictureSchema = new Schema({
  imgUrl: { type: String, required: true},
  albumId: { type: ObjectId, required: true, ref: 'Album'},
  creatorId: { type: ObjectId, required: true, ref: 'Account' }
},
{timestamps: true, toJSON: {virtuals: true}})

PictureSchema.virtual('album',{
  localField:'albumId',
  foreignField: '_id',
  ref: 'Album',
  justOne: true
})

PictureSchema.virtual('creator',{
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

