<template>
    <div class="mentorship-page">
      <h1>Mentorship Program</h1>
      <p>Sign up for our mentorship program to get connected with experienced professionals!</p>
  
      <div class="mentor-cards-container">
        <MentorCard v-for="mentor in mentors" :key="mentor.id" :mentor="mentor" />
      </div>
    </div>
  </template>
  
  <script>
  import MentorCard from '../components/MentorCard.vue'
  
  export default {
    name: 'Mentorship',
    components: {
      MentorCard
    },
    data() {
      return {
        mentors: [
          {
            id: 1,
            name: 'Aimen Moten',
            specialty: 'Software Engineering',
            experience: 2,
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQF5GN5lZhe2Tg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723614878840?e=1733356800&v=beta&t=0l05vJEDO6Yl53M4BIXk3v0gvjyPLHoDe09gcATAWvE'
          },
          {
            id: 2,
            name: 'Morgan Young',
            specialty: 'Data Science',
            experience: 5,
            image: 'https://media.licdn.com/dms/image/v2/D5603AQGFF0atGiGNpA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726167226226?e=1733356800&v=beta&t=ELZA8TdLBtsh8oqKqaH3xTN6kJcyb2edYYa1juyIsS8'
          },
          {
            id: 3,
            name: 'Alex Kim',
            specialty: 'Full Stack Development',
            experience: 4,
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQGBhL_JC4gIoA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707609222606?e=1733356800&v=beta&t=sxmFq62GpSQOuFM1xqMcO4efwZaFOaaizPUI5MPx7OQ'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .mentor-cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
  </style>
  