function createClassRoom(numberOfStudents){

  function studentSeat(seat) {

    return function() {
      return seat;
    }
  }

  let students = [];
  for (let index = 0; index < numberOfStudents ; index++) {
    students[index] = studentSeat(index + 1);
  };
  return students;

}

const classRoom = createClassRoom(10);