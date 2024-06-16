<template>
  <default-wrapper>
    <div v-if="selectedUser">
      <form class="form" @submit.prevent="updateForm">
        <h1>User Profile Update</h1>
        <div class="form__group">
          <label for="firstName" class="form__label">First Name</label>
          <input type="text" id="firstName" name="firstName" class="form__input" placeholder="Write your name" v-model="selectedUser.name" />
        </div>
        <div class="form__group">
          <label for="lastName" class="form__label">Last Name</label>
          <input type="text" id="lastName" name="lastName" class="form__input" placeholder="Write your surname" v-model="selectedUser.surname" />
        </div>
        <div class="form__group">
          <label for="email" class="form__label">Email</label>
          <input type="text" id="email" name="email" class="form__input" placeholder="Write email address" v-model="selectedUser.email" />
        </div>
        <div class="form__group">
          <label for="age" class="form__label">Age</label>
          <input type="text" id="age" name="age" class="form__input" placeholder="Write age" v-model="selectedUser.age" />
        </div>

        <div class="form__group">
          <label class="form__label">Country:</label>
          <select id="country" v-model="selectedUser.country" @change="fetchCities">
            <option value="">Select a country</option>
            <option v-for="country in countries" :key="country.isoCode" :value="country.isoCode">
              {{ country.name }}
            </option>
          </select>
        </div>
        <div class="form__group">
          <label class="form__label">City:</label>
          <select id="city" v-model="selectedUser.city">
            <option >Select a city</option>
            <option v-for="city in cities" :key="city.id">
              {{ city.name }}
            </option>
          </select>
        </div>

        <div class="form__btn">
          <button class="button" type="submit">Update User</button>
        </div>
      </form>
    </div>
  </default-wrapper>
</template>

<script setup>
import DefaultWrapper from "../DefaultWrapper.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axiosInstance from "../../apiClient.js";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const studentData = ref([]);
const error = ref(null);
const formError = ref(null);
const countries = ref([]);
const cities = ref([]);

onMounted(async () => {
  try {
    const res = await axiosInstance.get('/').then(res => res.data);
    studentData.value = res;
  } catch (err) {
    error.value = err.message;
  }
  console.log(studentData.value)
  fetchCountries();
});

const fetchCountries = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/countries');
    countries.value = response.data;
  } catch (error) {
    if(error.message){
      formError.value = error.message
    }
  }
};

const fetchCities = async () => {
  try {
    if (!selectedUser.value.country) return;
    const response = await axios.get(`http://localhost:3000/api/cities/${selectedUser.value.country}`);
    cities.value = response.data;
  } catch (error) {
    if(error.message){
      formError.value = error.message
    }
  }
};

const selectedUser = computed(() => {
  return studentData.value.find(student => student._id === route.params.id);
});

const updateForm = () => {
  axiosInstance.put(`/${route.params.id}`, {
    name: selectedUser.value.name,
    surname: selectedUser.value.surname,
    email: selectedUser.value.email,
    age: selectedUser.value.age,
    country: selectedUser.value.country,
    city: selectedUser.value.city,
  })
      .then(res => {
        if (res.status == "200") {
          router.push('/students');
        }
      })
      .catch(error => {
        if (error.message) {
          formError.value = error.message;
        }
      });
};
</script>

<style scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #cccccc;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #cccccc;
}

button[disabled]{
  background-color: #cccccc;
  color: #000000;
  padding: 16px 32px;
  font-size: 16px;
}

form div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 24px;
}

.form__btn {
  display: flex;
  justify-content: end;
  background-color: transparent;
}

.button {
  background-color: #303f9e;
  border: none;
  color: #ffffff;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}
</style>