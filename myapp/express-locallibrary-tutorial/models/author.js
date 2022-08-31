const mongoose = require('mongoose'), Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

// const authorSchema = Schema({
//   name: String,
//   stories: [{
//     author: string,
//     stories: ObjectId 
//   }]
// });

// const storiesSchema = Schema({
//   author: 
// })

const authorSchema = Schema ({
  name: String,
  stories: [{type: Schema.Types.ObjectId, ref: 'Story'}]
});

const storySchema = Schema ({
  author: {type: Schema.Types.ObjectId, ref: 'Author'},
  title: String
});

const Story = mongoose.model('Story', storySchema);
const Author = mongoose.model('Author', authorSchema);