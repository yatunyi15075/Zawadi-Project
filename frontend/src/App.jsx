import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import ChooseUser from '../src/components/ChooseUser';
import ProtectedRoute from './auth/ProtectedRoute.jsx';
import Register from './auth/SuperAdmin/SuperAdminRegister.jsx';
import Login from './auth/SuperAdmin/SuperAdminSigin.jsx';
import AdminSignIn from '../src/auth/Admin/AdminSignIn.jsx';
import ParentSignIn from './auth/Parent/ParentSignIn.jsx';
import TeacherSignIn from '../src/auth/Teacher/TeacherSignIn.jsx';
import AdminDashboard from '../src/pages/Admin/Dashboard';
import StudentDashboard from '../src/pages/Students/Dashboard';
import TeacherDashboard from '../src/pages/Teachers/Dashboard';
import ParentDashboard from './pages/Parents/ParentDashboard.jsx';
import SuperAdminDashboard from './pages/SuperAdminDashboard/SuperAdminDashboard.jsx';
import Classes from '../src/pages/Admin/Classes';
import Teachers from '../src/pages/Admin/Teachers';
import Announcement from '../src/pages/Admin/Announcement';
import SettingsProfile from '../src/pages/Admin/SettingsProfile';
import Analytics from './pages/Admin/Analytics.jsx';
import CurriculumManagement from './pages/Admin/CurriculumManagement.jsx';
import Reports from './pages/Admin/Reports.jsx';
import Students from './pages/Admin/Students.jsx';
import AllCurriculums from "./pages/Admin/AllCurriculums.jsx";
import StudentAssignments from '../src/pages/Students/Assignments';
import ProfileSection from '../src/pages/Students/Profile';
import Feedback from './pages/Students/Feedback.jsx';
import Grades from './pages/Students/Grades.jsx';
import LearningMaterials from './pages/Students/LearningMaterials.jsx';
import Attendance from './pages/Parents/Attendance.jsx';
import Communication from './pages/Parents/Communication.jsx';
import AssignmentSection from '../src/pages/Teachers/Assignments';
import CheckAnnouncementSection from '../src/pages/Teachers/Announcement';
import TeacherProfileSection from '../src/pages/Teachers/Profile';
import CheckAttendanceSection from './pages/Teachers/Attendance.jsx';
import LessonPlans from './pages/Teachers/LessonPlans.jsx';
import StudentProgress from './pages/Teachers/StudentProgress.jsx';
import Assessments from './pages/Teachers/Assessments.jsx';
import Performance from './pages/Teachers/Performance.jsx';
import AdvancedAnalytics from './pages/SuperAdminDashboard/AdvancedAnalytics.jsx';
import IntergrationOptions from './pages/SuperAdminDashboard/IntergrationOptions.jsx';
import SystemSettings from './pages/SuperAdminDashboard/SystemSettings.jsx';
import UserManagement from './pages/SuperAdminDashboard/UserManagement.jsx';
import AllSchools from './pages/SuperAdminDashboard/AllSchools.jsx';
import AddSchoolForm from './pages/SuperAdminDashboard/AddSchoolForm.jsx';
import AllSchoolsList from './pages/SuperAdminDashboard/AllSchoolsList.jsx';
import EnterMarksSection from './pages/Teachers/EnterMarks.jsx';
import GenerateReport from './pages/Teachers/GenerateReport.jsx';
import ViewCurriculum from './pages/Teachers/ViewCurriculum.jsx'
import StudentForm from './pages/Teachers/ReportForm.jsx';
import StudentReport from './pages/Teachers/ReportData.jsx';
import Layout from './Layout';

// Axios interceptor setup
import './axiosSetup.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-signin" element={<AdminSignIn />} />
        <Route path="/parent-signin" element={<ParentSignIn />} />
        <Route path="/teacher-signin" element={<TeacherSignIn />} />

        
        <Route path="/admin/*" element={<ProtectedRoute roles={['admin', 'super-admin']}><AdminDashboard /></ProtectedRoute>} />
        <Route path="/teacher/*" element={<ProtectedRoute roles={['teacher', 'super-admin']}><TeacherDashboard /></ProtectedRoute>} />
        <Route path="/student/*" element={<ProtectedRoute roles={['student', 'parent']}><StudentDashboard /></ProtectedRoute>} />
        <Route path="/parent/*" element={<ProtectedRoute roles={['parent']}><ParentDashboard /></ProtectedRoute>} />
        <Route path="/super-admin/*" element={<ProtectedRoute roles={['super-admin']}><SuperAdminDashboard /></ProtectedRoute>} />
       
       
        <Route path="/admin/classes" element={<Layout><Classes /></Layout>} />
        <Route path="/admin/teachers" element={<Layout><Teachers /></Layout>} />
        <Route path="/admin/students" element={<Layout><Students /></Layout>} />
        <Route path="/admin/communication" element={<Layout><Announcement /></Layout>} />
        <Route path="/admin/analytics" element={<Layout><Analytics /></Layout>} />
        <Route path="/admin/curriculum-management" element={<Layout><CurriculumManagement /></Layout>} />
        <Route path="/admin/reports" element={<Layout><Reports /></Layout>} />
        <Route path="/admin/settings" element={<Layout><SettingsProfile /></Layout>} />
        <Route path="/admin/all-curriculums" element={<Layout><AllCurriculums /></Layout>} />
       
       
        <Route path="/student/assignments" element={<Layout><StudentAssignments /></Layout>} />
        <Route path="/student/settings" element={<Layout><ProfileSection /></Layout>} />
        <Route path="/student/feedback" element={<Layout><Feedback /></Layout>} />
        <Route path="/student/grades" element={<Layout><Grades /></Layout>} />
        <Route path="/student/learning-materials" element={<Layout><LearningMaterials /></Layout>} />
        <Route path="/student/attendance" element={<Layout><Attendance /></Layout>} />
        <Route path="/student/communication" element={<Layout><Communication /></Layout>} />
        
        
        <Route path="/teacher/assignments" element={<Layout><AssignmentSection /></Layout>} />
        <Route path="/teacher/announcement" element={<Layout><CheckAnnouncementSection /></Layout>} />
        <Route path="/teacher/settings" element={<Layout><TeacherProfileSection /></Layout>} />
        <Route path="/teacher/attendance" element={<Layout><CheckAttendanceSection /></Layout>} />
        <Route path="/teacher/lesson-plans" element={<Layout><LessonPlans /></Layout>} />
        <Route path="/teacher/student-progress" element={<Layout><StudentProgress /></Layout>} />
        <Route path="/teacher/assessments" element={<Layout><Assessments /></Layout>} />
        <Route path="/teacher/performance" element={<Layout><Performance /></Layout>} />
        <Route path="/teacher/enter-marks" element={<Layout><EnterMarksSection /></Layout>} />
        <Route path="/teacher/generate-reports" element={<Layout><GenerateReport /></Layout>} />
        <Route path="/teacher/view-curriculum/:grade/:subject" element={<Layout><ViewCurriculum /></Layout>} />
        <Route path="/teacher/view-curriculum" element={<Layout><ViewCurriculum /></Layout>}/>
        <Route path="/teacher/report-form" element={<Layout><StudentForm /></Layout>}/>
        <Route path="/teacher/student-report" element={<Layout><StudentReport /></Layout>}/>
        
       
       
        <Route path="/super-admin/advanced-analytics" element={<Layout><AdvancedAnalytics /></Layout>} />
        <Route path="/super-admin/integration-options" element={<Layout><IntergrationOptions /></Layout>} />
        <Route path="/super-admin/system-settings" element={<Layout><SystemSettings /></Layout>} />
        <Route path="/super-admin/user-management" element={<Layout><UserManagement /></Layout>} />
        <Route path="/super-admin/all-schools" element={<Layout><AllSchools /></Layout>} />
        <Route path="/super-admin/add-school" element={<Layout><AddSchoolForm /></Layout>} />
        <Route path="/super-admin/all-schools-list" element={<Layout><AllSchoolsList /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
