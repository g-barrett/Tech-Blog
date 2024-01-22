const Post = require('./posts');
const Comment = require('./comments');
const Session = require('./sessions');
const User = require('./users');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'post_id',
});

module.exports = { Post, Comment, Session, User };