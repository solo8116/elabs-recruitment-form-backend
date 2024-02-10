/**
 * @swagger
 * tags:
 *  - name: Student
 *    description: Student application registration
 * paths:
 *   /api/student/register:
 *     post:
 *       summary: register new application
 *       tags: [Student]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 domain:
 *                   type: array
 *                   items:
 *                      type: string
 *                   example: ["Web Developement"]
 *                 kiitemail:
 *                   type: string
 *                   example: "example@kiit.ac.in"
 *                 email:
 *                   type: string
 *                   example: "example@gmail.com"
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 roll:
 *                   type: integer
 *                   example: 123456
 *                 gender:
 *                   type: string
 *                   enum:
 *                     - Male
 *                     - Female
 *                   example: "Male"
 *                 contactNumber:
 *                   type: string
 *                   example: "1234567890"
 *                 yearOfStudy:
 *                   type: string
 *                   example: "3rd Year"
 *                 branch:
 *                   type: string
 *                   example: "Computer Science"
 *                 links:
 *                   type: object
 *                   properties:
 *                     Github:
 *                       type: string
 *                       example: "https://github.com/example"
 *                     Linkedin:
 *                       type: string
 *                       example: "https://linkedin.com/in/example"
 *                     Drive:
 *                       type: string
 *                       example: "https://drive.google.com/example"
 *                 existSocieties:
 *                   type: string
 *                   default: "Not Yet"
 *                   example: "Elabs Society"
 *                 whyElabs:
 *                   type: string
 *                   example: "I want to learn new technologies."
 *                 anythingElse:
 *                   type: string
 *                   example: "No"
 *       responses:
 *         '201':
 *           description: student application registered
 *         '400':
 *           description: Bad request
 */


