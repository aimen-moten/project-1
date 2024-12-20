<template>
    <div class="job-card">
      <h3>{{ job.title }}</h3>
      <p><strong>Company:</strong> {{ job.company }}</p>
      <p><strong>Location:</strong> {{ job.location }}</p>
      <p><strong>Type:</strong> {{ job.type }}</p>
      <p><strong>Salary:</strong> {{ job.salary }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JobCard',
    props: {
      job: {
        type: Object,
        required: true
      }
    }
  }
  </script>
