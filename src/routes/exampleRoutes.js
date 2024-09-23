const express = require('express');
const {
  createExample,
  getExamples,
  updateExample,
  deleteExample
} = require('../controllers/exampleController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Example:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the example
 *         name:
 *           type: string
 *           description: The name of the example
 *         description:
 *           type: string
 *           description: The description of the example
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the example was created
 *       example:
 *         id: d5fE_asz
 *         name: Example Name
 *         description: Example Description
 *         createdAt: 2021-05-14T10:00:00.000Z
 */

/**
 * @swagger
 * tags:
 *   name: Examples
 *   description: The examples managing API
 */

/**
 * @swagger
 * /examples:
 *   post:
 *     summary: Create a new example
 *     tags: [Examples]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Example'
 *     responses:
 *       201:
 *         description: The example was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       500:
 *         description: Some server error
 */
router.post('/examples', createExample);

/**
 * @swagger
 * /examples:
 *   get:
 *     summary: Returns the list of all the examples
 *     tags: [Examples]
 *     responses:
 *       200:
 *         description: The list of the examples
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Example'
 */
router.get('/examples', getExamples);

/**
 * @swagger
 * /examples/{id}:
 *   put:
 *     summary: Update the example by the id
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The example id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Example'
 *     responses:
 *       200:
 *         description: The example was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       404:
 *         description: The example was not found
 *       500:
 *         description: Some error happened
 */
router.put('/examples/:id', updateExample);

/**
 * @swagger
 * /examples/{id}:
 *   delete:
 *     summary: Remove the example by id
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The example id
 *     responses:
 *       200:
 *         description: The example was deleted
 *       404:
 *         description: The example was not found
 */
router.delete('/examples/:id', deleteExample);

module.exports = router;