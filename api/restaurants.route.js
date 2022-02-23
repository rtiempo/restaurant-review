import express from 'express';

const router = express.Router();

router.route('/').get((req, res) => res.send('K O N N I C H I W A'));

export default router;
