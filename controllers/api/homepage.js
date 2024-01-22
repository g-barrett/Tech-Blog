const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
    });
    const blogs = blogData.map((Post) => Post.get({ plain: true}));

    res.render('homepage', {
        Post,
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                },
            ],
        });
        const blog = blogData.get({ plain: true });
        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
})