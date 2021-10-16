const { Schema, model, Types } = require('mongoose');

const dateFormat = require('../utils/dateFormat');


// ReactionSchema will not be a model, but rather will be used 
// as the reaction field's subdocument schema in the Thought model

const ReactionSchema = new Schema(
    {
      //  Mongoose's ObjectId data type 
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },

      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
        
      },

      username: {
        type: String,
        required: true,
        trim: true
      },
      
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
);




const ThoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
      },

      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },

      username: {
        type: String,
        required: true
      },

      reactions: [ReactionSchema]

    },

    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
);



ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;