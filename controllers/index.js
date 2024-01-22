const router = require('express').Router();

const apiRoutes = require('./api');
const postRoute = require('./api/postRoute');
const commentRoute = require('./api/commentRoute');
const userRoute = require('./api/userRoute');
const homepageRoute = require('./api/homepage')

router.use('/api', apiRoutes);
router.use('/', postRoute);
router.use('/', commentRoute);
router.use('/', userRoute);
router.use('/', homepageRoute);

module.exports = router;