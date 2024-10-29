const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: API for managing classes
 */

/**
 * @swagger
 * /api/classes:
 *   post:
 *     tags: [Classes]
 *     summary: Create a new class
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               class_name:
 *                 type: string
 *               section:
 *                 type: string
 *     responses:
 *       201:
 *         description: Class created successfully
 *       500:
 *         description: Error creating class
 */
router.post('/', classController.createClass);

/**
 * @swagger
 * /api/classes:
 *   get:
 *     tags: [Classes]
 *     summary: Retrieve all classes
 *     responses:
 *       200:
 *         description: A list of classes
 *       500:
 *         description: Error retrieving classes
 */
router.get('/', classController.getAllClasses);

/**
 * @swagger
 * /api/classes/{id}:
 *   get:
 *     tags: [Classes]
 *     summary: Retrieve a class by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Class ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Class found
 *       404:
 *         description: Class not found
 *       500:
 *         description: Error retrieving class
 */
router.get('/:id', classController.getClassById);

/**
 * @swagger
 * /api/classes/{id}:
 *   put:
 *     tags: [Classes]
 *     summary: Update a class by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Class ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               class_name:
 *                 type: string
 *               section:
 *                 type: string
 *     responses:
 *       200:
 *         description: Class updated successfully
 *       500:
 *         description: Error updating class
 */
router.put('/:id', classController.updateClass);

/**
 * @swagger
 * /api/classes/{id}:
 *   delete:
 *     tags: [Classes]
 *     summary: Delete a class by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Class ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Class deleted successfully
 *       500:
 *         description: Error deleting class
 */
router.delete('/:id', classController.deleteClass);

module.exports = router;
