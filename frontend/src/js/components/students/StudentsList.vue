<template>
  <default-wrapper>
    <form @submit.prevent="searchStudents" class="form form--search">
      <input type="text" v-model="query" placeholder="Write name or surname for the search result...">
    </form>
    <table class="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Age</th>
        <th>Country</th>
        <th>City</th>
        <th>Profile Creation Date</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <g-loading v-if="loading"></g-loading>
      <tr v-if="filteredStudents.length === 0 && !loading">
        <td colspan="6" class="text-center">No students found.</td>
      </tr>
      <tr v-for="student in filteredStudents" :key="student._id">
        <td>{{ student.name }}</td>
        <td>{{ student.surname }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.country }}</td>
        <td>{{ student.city }}</td>
        <td>{{ student.createdAt }}</td>
        <td>
          <router-link :to="`/students/student-information-update/${student._id}`" class="btn">Edit</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </default-wrapper>
</template>

<script setup>
import axiosInstance from "../../apiClient";
import { onMounted, ref, computed } from "vue";
import DefaultWrapper from "../DefaultWrapper.vue";
import GLoading from "../general/GLoading.vue";

const students = ref([]);
const loading = ref(false);
const error = ref(null);
const query = ref('');

onMounted(() => {
  getStudents();
});

const getStudents = async () => {
  loading.value = true;
  try {
    const res = await axiosInstance.get('/');
    students.value = res.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const filteredStudents = computed(() => {
  if (!query.value.trim()) {
    return students.value;
  } else {
    const searchTerm = query.value.trim().toLowerCase();
    return students.value.filter(student => {
      return (
          student.name.toLowerCase().includes(searchTerm) ||
          student.surname.toLowerCase().includes(searchTerm)
      );
    });
  }
});

const searchStudents = () => {
  getStudents();
};
</script>

<style>
.form--search input {
  width: 50% !important;
}
.table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.table td, .table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.table tr:nth-child(even){background-color: #f2f2f2;}

.table tr:hover {background-color: #ddd;}

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #e8ecef;
  color: #000000;
}

.btn {
  background-color: #303f9e;
  border: none;
  color: #ffffff;
  padding: 8px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}
</style>
