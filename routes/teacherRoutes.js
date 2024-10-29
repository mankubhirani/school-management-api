const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController.js');

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: Teacher management
 */

/**
 * @swagger
 * /api/teachers:
 *   post:
 *     summary: Create a new teacher
 *     tags: [Teachers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               subject:
 *                 type: string
 *     responses:
 *       201:
 *         description: Teacher created successfully
 *       500:
 *         description: Server error
 */
router.post('/', teacherController.addTeacher);

/**
 * @swagger
 * /api/teachers:
 *   get:
 *     summary: Get all teachers
 *     tags: [Teachers]
 *     responses:
 *       200:
 *         description: List of teachers
 *       500:
 *         description: Server error
 */
router.get('/', teacherController.getAllTeachers);

/**
 * @swagger
 * /api/teachers/{id}:
 *   get:
 *     summary: Get a teacher by ID
 *     tags: [Teachers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Teacher ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Teacher found
 *       404:
 *         description: Teacher not found
 *       500:
 *         description: Server error
 */
router.get('/:id', teacherController.getTeacherById);

/**
 * @swagger
 * /api/teachers/{id}:
 *   put:
 *     summary: Update a teacher
 *     tags: [Teachers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Teacher ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               subject:
 *                 type: string
 *     responses:
 *       200:
 *         description: Teacher updated successfully
 *       404:
 *         description: Teacher not found
 *       500:
 *         description: Server error
 */
router.put('/:id', teacherController.updateTeacher);

/**
 * @swagger
 * /api/teachers/{id}:
 *   delete:
 *     summary: Delete a teacher
 *     tags: [Teachers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Teacher ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Teacher deleted successfully
 *       404:
 *         description: Teacher not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', teacherController.deleteTeacher);

module.exports = router;
