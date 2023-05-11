/* exported getStudentNames */
function getStudentNames(students) {
  const result = [];

  for (const student of students) {
    for (const name in student) {
      result.push(student[name]);
    }
  }

  return result;
}
