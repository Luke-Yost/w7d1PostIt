import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AlbumSchema = new Schema({
  name: { type: String, required: true},
  coverImg: { type: String, required: true},
  creatorId: { type: String, required: true},

},
{ timestamps: true, toJSON: { virtuals: true}}
)

AlbumSchema.virtual('creator',{
  localField: 'creatorId',
  ref: 'Account'
})