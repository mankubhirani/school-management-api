const express = require('express');
const router = express.Router();
const studentSubjectController = require('../controllers/studentSubjectController');

/**
 * @swagger
 * tags:
 *   name: StudentSubjects
 *   description: Student-subject management
 */

/**
 * @swagger
 * /api/student-subjects:
 *   post:
 *     summary: Add a student-subject relationship
 *     tags: [StudentSubjects]
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
 *     responses:
 *       201:
 *         description: Student-subject relationship created successfully
 *       500:
 *         description: Server error
 */
router.post('/', studentSubjectController.addStudentSubject);

/**
 * @swagger
 * /api/student-subjects:
 *   get:
 *     summary: Get all student-subject relationships
 *     tags: [StudentSubjects]
 *     responses:
 *       200:
 *         description: List of student-subject relationships
 *       500:
 *         description: Server error
 */
router.get('/', studentSubjectController.getAllStudentSubjects);

/**
 * @swagger
 * /api/student-subjects/{id}:
 *   get:
 *     summary: Get a student-subject relationship by ID
 *     tags: [StudentSubjects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Student-Subject relationship ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student-subject relationship found
 *       404:
 *         description: Student-subject relationship not found
 *       500:
 *         description: Server error
 */
router.get('/:id', studentSubjectController.getStudentSubjectById);

/**
 * @swagger
 * /api/student-subjects/{id}:
 *   delete:
 *     summary: Delete a student-subject relationship
 *     tags: [StudentSubjects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Student-Subject relationship ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student-subject relationship deleted successfully
 *       404:
 *         description: Student-subject relationship not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', studentSubjectController.deleteStudentSubject);

module.exports = router;
