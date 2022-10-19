import React from 'react';
import Navbaractive from '../components/Navbaractive';
import CourseList from '../components/course-content/CourseList';
import Header from '../components/course-content/Header';
function Course() {
  return (
    <div>
      <Navbaractive />
      <Header />
      <CourseList />
    </div>
  )
}

export default Course
