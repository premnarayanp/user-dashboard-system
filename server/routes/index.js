// const express = require('express');
import express from 'express';
const router = express.Router();
console.log('router loaded');

import users from './users.js';
import letters from './letter.js';
router.use('/users', users);
router.use('/letters', letters);
// module.exports = router;
export default router;