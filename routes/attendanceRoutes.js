const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

/**
 * @swagger
 * tags:
 *   name: Attendance
 *   description: API for managing attendance
 */

/**
 * @swagger
 * /api/attendance:
 *   post:
 *     tags: [Attendance]
 *     summary: Create a new attendance record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: integer
 *               class_id:
 *                 type: integer
 *               date:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *                 enum: [Present, Absent]
 *     responses:
 *       201:
 *         description: Attendance created successfully
 *       500:
 *         description: Error creating attendance
 */
router.post('/', attendanceController.createAttendance);

/**
 * @swagger
 * /api/attendance:
 *   get:
 *     tags: [Attendance]
 *     summary: Retrieve all attendance records
 *     responses:
 *       200:
 *         description: A list of attendance records
 *       500:
 *         description: Error retrieving attendance
 */
router.get('/', attendanceController.getAllAttendance);

/**
 * @swagger
 * /api/attendance/{id}:
 *   get:
 *     tags: [Attendance]
 *     summary: Retrieve an attendance record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Attendance record found
 *       404:
 *         description: Attendance record not found
 *       500:
 *         description: Error retrieving attendance
 */
router.get('/:id', attendanceController.getAttendanceById);

/**
 * @swagger
 * /api/attendance/{id}:
 *   put:
 *     tags: [Attendance]
 *     summary: Update an attendance record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
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
 *               class_id:
 *                 type: integer
 *               date:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *                 enum: [Present, Absent]
 *     responses:
 *       200:
 *         description: Attendance updated successfully
 *       500:
 *         description: Error updating attendance
 */
router.put('/:id', attendanceController.updateAttendance);

/**
 * @swagger
 * /api/attendance/{id}:
 *   delete:
 *     tags: [Attendance]
 *     summary: Delete an attendance record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Attendance deleted successfully
 *       500:
 *         description: Error deleting attendance
 */
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;
