const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

/**
 * @swagger
 * tags:
 *   name: Grades
 *   description: Grade management
 */

/**
 * @swagger
 * /api/grades:
 *   post:
 *     summary: Add a grade
 *     tags: [Grades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: integer
 *               subject_id:
 *                 type: integer
 *               exam_id:
 *                 type: integer
 *               grade:
 *                 type: string
 *     responses:
 *       201:
 *         description: Grade added successfully
 *       500:
 *         description: Server error
 */
router.post('/', gradeController.addGrade);

/**
 * @swagger
 * /api/grades:
 *   get:
 *     summary: Get all grades
 *     tags: [Grades]
 *     responses:
 *       200:
 *         description: List of grades
 *       500:
 *         description: Server error
 */
router.get('/', gradeController.getAllGrades);

/**
 * @swagger
 * /api/grades/{id}:
 *   get:
 *     summary: Get a grade by ID
 *     tags: [Grades]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Grade ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Grade found
 *       404:
 *         description: Grade not found
 *       500:
 *         description: Server error
 */
router.get('/:id', gradeController.getGradeById);

/**
 * @swagger
 * /api/grades/{id}:
 *   put:
 *     summary: Update a grade
 *     tags: [Grades]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Grade ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: integer
 *               subject_id:
 *                 type: integer
 *               exam_id:
 *                 type: integer
 *               grade:
 *                 type: string
 *     responses:
 *       200:
 *         description: Grade updated successfully
 *       404:
 *         description: Grade not found
 *       500:
 *         description: Server error
 */
router.put('/:id', gradeController.updateGrade);

/**
 * @swagger
 * /api/grades/{id}:
 *   delete:
 *     summary: Delete a grade
 *     tags: [Grades]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Grade ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Grade deleted successfully
 *       404:
 *         description: Grade not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', gradeController.deleteGrade);

module.exports = router;
