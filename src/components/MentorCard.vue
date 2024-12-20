<template>
    <div class="mentor-card">
      <img :src="mentor.image" alt="mentor picture" class="mentor-image" />
      <h3>{{ mentor.name }}</h3>
      <p>{{ mentor.specialty }}</p>
      <p>{{ mentor.experience }} years of experience</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MentorCard',
    props: {
      mentor: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  