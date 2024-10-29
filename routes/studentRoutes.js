const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

/**
 * @swagger
 * tags:
 *   name: Subjects
 *   description: API for managing subjects
 */

/**
 * @swagger
 * /api/subjects:
 *   post:
 *     tags: [Subjects]
 *     summary: Create a new subject
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Subject created successfully
 *       500:
 *         description: Error creating subject
 */
router.post('/', subjectController.createSubject);

/**
 * @swagger
 * /api/subjects:
 *   get:
 *     tags: [Subjects]
 *     summary: Retrieve all subjects
 *     responses:
 *       200:
 *         description: A list of subjects
 *       500:
 *         description: Error retrieving subjects
 */
router.get('/', subjectController.getAllSubjects);

/**
 * @swagger
 * /api/subjects/{id}:
 *   get:
 *     tags: [Subjects]
 *     summary: Retrieve a subject by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Subject ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Subject found
 *       404:
 *         description: Subject not found
 *       500:
 *         description: Error retrieving subject
 */
router.get('/:id', subjectController.getSubjectById);

/**
 * @swagger
 * /api/subjects/{id}:
 *   put:
 *     tags: [Subjects]
 *     summary: Update a subject by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Subject ID
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
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Subject updated successfully
 *       500:
 *         description: Error updating subject
 */
router.put('/:id', subjectController.updateSubject);

/**
 * @swagger
 * /api/subjects/{id}:
 *   delete:
 *     tags: [Subjects]
 *     summary: Delete a subject by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Subject ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Subject deleted successfully
 *       500:
 *         description: Error deleting subject
 */
router.delete('/:id', subjectController.deleteSubject);

module.exports = router;
