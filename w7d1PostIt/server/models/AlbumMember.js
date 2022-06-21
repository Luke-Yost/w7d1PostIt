import mongoose from 'mongoose'
import { AlbumSchema } from "./Album"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const AlbumMemberSchema = new Schema({
  accountId: {type: ObjectId, required: true },
  albumId: { type: ObjectId, required: true},
},
{
  timestamps: true, toJSON: {virtuals: true}
})

AlbumMemberSchema.virtual('account',{
  localField: 'accountId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

AlbumMemberSchema.virtual('album', {
  localField: 'albumId',
  foreignField: '_id',
  ref: 'Album',
  justOne: true
})