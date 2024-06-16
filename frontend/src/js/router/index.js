import { createRouter, createWebHistory } from 'vue-router';
import StudentsList from '../components/students/StudentsList.vue';
import StudentForm from '../components/students/StudentForm.vue';
import StudentFormUpdate from '../components/students/StudentFormUpdate.vue';

const routes = [
    {
        path: '/students',
        name: 'Students',
        component: StudentsList
    },
    {
        path: '/',
        name: 'Dashboard',
        component: StudentForm
    },
    {
        path: '/students/student-information-update/:id',
        name: 'studentInformationUpdate',
        component: StudentFormUpdate,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

