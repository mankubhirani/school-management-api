const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: API for managing students
 */

/**
 * @swagger
 * /api/students:
 *   post:
 *     tags: [Students]
 *     summary: Create a new student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               classId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Student created successfully
 *       500:
 *         description: Error creating student
 */
router.post('/', studentController.createStudent);

/**
 * @swagger
 * /api/students:
 *   get:
 *     tags: [Students]
 *     summary: Retrieve all students
 *     responses:
 *       200:
 *         description: A list of students
 *       500:
 *         description: Error retrieving students
 */
router.get('/', studentController.getAllStudents);

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     tags: [Students]
 *     summary: Retrieve a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Student ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student found
 *       404:
 *         description: Student not found
 *       500:
 *         description: Error retrieving student
 */
router.get('/:id', studentController.getStudentById);

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     tags: [Students]
 *     summary: Update a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Student ID
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
 *               age:
 *                 type: integer
 *               classId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       500:
 *         description: Error updating student
 */
router.put('/:id', studentController.updateStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     tags: [Students]
 *     summary: Delete a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Student ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       500:
 *         description: Error deleting student
 */
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
