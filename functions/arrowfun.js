studentList = ['ashwin','athulan','sriram','haris','viki']

const getDetail = (studentName) => {
  const getStudent = studentList.filter((student) => student === studentName)
  return getStudent;
}

console.log(getDetail('athulan'))
