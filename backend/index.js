import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import timetableRouter from './routers/timetableRouter.js';
import teachersRouter from './routers/teachersRouter.js';
import studentRouter from './routers/studentRouter.js';
import studentAssignmentsRouter from './routers/studentAssignmentsRouter.js';
import schoolRouter from './routers/schoolRouter.js';
import progressRouter from './routers/progressRouter.js';
import performanceRouter from './routers/performanceRouter.js';
import lessonPlansRouter from './routers/lessonPlansRouter.js';
import learningMaterialsRouter from './routers/learningMaterialsRouter.js';
import gradesRouter from './routers/gradesRouter.js';
import feedbackRouter from './routers/feedbackRouter.js';

import enteredMarksRouter from './routers/enteredMarksRouter.js';
import attendanceRouter from './routers/attendanceRouter.js';
import communicationRouter from './routers/communicationRouter.js';
import curriculumManagementRouter from './routers/curriculumManagementRouter.js';
import classRouter from './routers/classRouter.js';
import attendanceRecordRouter from './routers/attendanceRecordRouter.js';
import assignmentsRouter from './routers/assignmentsRouter.js';
import assessmentReportRouter from './routers/assessmentReportRouter.js';
import announcementRouter from './routers/announcementRouter.js';
import assessmentRouter from './routers/assessmentRouter.js';
import config from './config.js';
import Student from './models/studentModel.js';
import studentPerformanceRouter from './routers/studentPerformanceRouter.js';
import contactRouter from './routers/contactRouter.js';
import demoRouter from './routers/demoRouter.js';
import assessments from './routers/assessments.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || config.port || 3000;  // Set PORT to use environment variable or fallback to config or 3000

app.use(express.json());
app.use(cors());

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Your routes
app.use('/api/users', userRouter);
app.use('/api/timetable', timetableRouter);
app.use('/api/teachers', teachersRouter);
app.use('/api/students', studentRouter);
app.use('/api/studentAssignments', studentAssignmentsRouter);
app.use('/api/schools', schoolRouter);
app.use('/api/progress', progressRouter);
app.use('/api/performance', performanceRouter);
app.use('/api/lessonPlans', lessonPlansRouter);
app.use('/api/learningMaterials', learningMaterialsRouter);
app.use('/api/grades', gradesRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/enteredMarks', enteredMarksRouter);
app.use('/api/attendance', attendanceRouter);
app.use('/api/communication', communicationRouter);
app.use('/api/curriculum', curriculumManagementRouter);
app.use('/api/classes', classRouter);
app.use('/api/attendanceRecord', attendanceRecordRouter);
app.use('/api/assignments', assignmentsRouter);
app.use('/api/assessmentReports', assessmentReportRouter);
app.use('/api/announcements', announcementRouter);
app.use('/api/assessments', assessmentRouter);
app.use('/api/studentPerformance', studentPerformanceRouter);
app.use('/api/contact', contactRouter);
app.use('/api/demo', demoRouter);
app.use('/api/assessments', assessments);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import userRouter from './routers/userRouter.js';
// import timetableRouter from './routers/timetableRouter.js';
// import teachersRouter from './routers/teachersRouter.js';
// import studentRouter from './routers/studentRouter.js';
// import studentAssignmentsRouter from './routers/studentAssignmentsRouter.js';
// import schoolRouter from './routers/schoolRouter.js';
// import progressRouter from './routers/progressRouter.js';
// import performanceRouter from './routers/performanceRouter.js';
// import lessonPlansRouter from './routers/lessonPlansRouter.js';
// import learningMaterialsRouter from './routers/learningMaterialsRouter.js';
// import gradesRouter from './routers/gradesRouter.js';
// import feedbackRouter from './routers/feedbackRouter.js';

// import enteredMarksRouter from './routers/enteredMarksRouter.js';
// import attendanceRouter from './routers/attendanceRouter.js';
// import communicationRouter from './routers/communicationRouter.js';
// import curriculumManagementRouter from './routers/curriculumManagementRouter.js';
// import classRouter from './routers/classRouter.js';
// import attendanceRecordRouter from './routers/attendanceRecordRouter.js';
// import assignmentsRouter from './routers/assignmentsRouter.js';
// import assessmentReportRouter from './routers/assessmentReportRouter.js';
// import announcementRouter from './routers/announcementRouter.js';
// import assessmentRouter from './routers/assessmentRouter.js';
// import config from './config.js';
// import Student from './models/studentModel.js';
// import studentPerformanceRouter from './routers/studentPerformanceRouter.js';
// import contactRouter from './routers/contactRouter.js';
// import demoRouter from './routers/demoRouter.js';
// import assessments from './routers/assessments.js';
// // import lessonplanResourceRouter from './routers/lessonplanResourceRouter.js';

// dotenv.config(); 

// const app = express();
// const PORT = config.port;
// const { sequelize } = config; 

// app.use(express.json());
// app.use(cors());

// // Middleware to log requests
// app.use((req, res, next) => {
//   console.log("Request Method:", req.method);
//   console.log("Request Headers:", req.headers);
//   console.log("Request Body:", req.body);
//   next();
// });

// // Define the new route for fetching students by class
// app.get('/api/students-by-class', async (req, res) => {
//   try {
//     const classId = req.query.class_id;

//     if (!classId) {
//       return res.status(400).json({ error: 'Class ID is required' });
//     }

//     // Fetch students by classId from your database
//     const students = await Student.findAll({ where: { class_id: classId } });

//     if (students.length === 0) {
//       return res.status(404).json({ message: 'No students found for the selected class' });
//     }

//     // Respond with the student data
//     res.json(students);
//   } catch (error) {
//     console.error('Error fetching students:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // // Static folder for file uploads
// // app.use('/uploads', express.static('uploads'));

// // // Routes
// // app.use('/api/lessonPlanResources', lessonplanResourceRouter);

// // Routers
// app.use('/api/users', userRouter);
// app.use('/api/timetables', timetableRouter);
// app.use('/api/teachers', teachersRouter);
// app.use('/api/students', studentRouter);
// app.use('/api/student-assignments', studentAssignmentsRouter);
// app.use('/api/schools', schoolRouter);
// app.use('/api/progress', progressRouter);
// app.use('/api/performances', performanceRouter);
// app.use('/api/lesson-plans', lessonPlansRouter);
// app.use('/api/learning-materials', learningMaterialsRouter);
// app.use('/api/grades', gradesRouter);
// app.use('/api/feedbacks', feedbackRouter);


// app.use('/api/entered-marks', enteredMarksRouter);
// app.use('/api/attendance', attendanceRouter);
// app.use('/api/communications', communicationRouter);
// app.use('/api/curriculum-entries', curriculumManagementRouter);
// app.use('/api/classes', classRouter);
// app.use('/api/attendance-records', attendanceRecordRouter);
// app.use('/api/assignments', assignmentsRouter);
// app.use('/api/assessment-reports', assessmentReportRouter);
// app.use('/api/announcements', announcementRouter);
// app.use('/api/assessment', assessmentRouter);
// app.use('/api/student-performance', studentPerformanceRouter);
// app.use('/api/get-in-touch', contactRouter);
// app.use('/api/request-demo', demoRouter);
// app.use('/api/summative-assessments', assessments);

// // Sync database
// sequelize.sync()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch(error => {
//     console.error('Unable to connect to the database:', error);
//   });
