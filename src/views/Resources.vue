<template>
    <div class="resources-page">
      <h1>Resources</h1>
      <p>Explore new career opportunities!</p>
  
      <div class="job-board-container">
        <JobCard v-for="job in jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </template>
  
  <script>
  import JobCard from '../components/JobCard.vue'
  
  export default {
    name: 'Resources',
    components: {
      JobCard
    },
    data() {
      return {
        jobs: [
          {
            id: 1,
            title: 'Software Engineer',
            company: 'TechCorp',
            location: 'New York, NY',
            type: 'Full-time',
            salary: '$120,000'
          },
          {
            id: 2,
            title: 'Data Scientist',
            company: 'DataSolutions',
            location: 'San Francisco, CA',
            type: 'Part-time',
            salary: '$80,000'
          },
          {
            id: 3,
            title: 'Frontend Developer',
            company: 'Web Innovations',
            location: 'Austin, TX',
            type: 'Remote',
            salary: '$100,000'
          }
        ]
      }
    }
  }
  </script>