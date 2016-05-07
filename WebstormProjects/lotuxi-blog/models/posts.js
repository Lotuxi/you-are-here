var mongoose = require('mongoose');

//create new post
var PostSchema = new mongoose.Schema ({
    post: {
        Title: {
            type: String,
            required: true
        },
        Post: {
            type: String,
            required: true
        },
        PostDate: Date
    }
});

module.exports = mongoose.model('Post', PostSchema);