// Creating the business Object
const business = {
  opens: '8:00AM',
  closes: '5:00PM',
  totalEmployees: 4,
  daysOpen: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  employees: {
    david: {
      position: 'director',
      daysOfWeekWorking: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    amit: {
      position: 'mechanical engineer',
      daysOfWeekWorking: ['Monday', 'Wednesday', 'Thursday'],
    },
    christian: {
      position: 'project manager',
      daysOfWeekWorking: ['Monday', 'Wednesday', 'Friday'],
    },
    jr: {
      position: 'software engineer',
      daysOfWeekWorking: ['Friday'],
    },
  },
};
console.log(business);

// addWeekends function
function addWeekends() {
  business.daysOpen.push('Saturday', 'Sunday');
  for (const employeeName in business.employees) {
    business.employees[employeeName].daysOfWeekWorking.push(
      'Saturday',
      'Sunday'
    );
  }
}

// createEmployee function
function createEmployee(employeeObj) {
  business.employees[employeeObj] = {
    position: '',
    daysOfWeekWorking: '',
  };
}

// randomWorkingDays function
function randomWorkingDays(daysOpen) {
  const numDaysWorking = Math.floor(Math.random() * 5 + 1);
  const daysWorking = [];

  for (let i = 0; i < numDaysWorking; i++) {
    const randomDayIndex = Math.floor(Math.random() * daysOpen.length);
    if (!daysWorking.includes(daysOpen[randomDayIndex])) {
      daysWorking.push(daysOpen[randomDayIndex]);
    }
  }
  return daysWorking;
}

// checkIfFullTime function
function checkIfFullTime(employeeObj) {
  if (employeeObj.daysOfWeekWorking.length >= 5) {
    return true;
  } else {
    return false;
  }
}

// addEmployees function
function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', (event) => {
    for (let i = 0; i < 4; i++) {
      const employeeName = xhr.response[i].name;
      createEmployee(employeeName);
      business.employees[employeeName].daysOfWeekWorking = randomWorkingDays(
        business.daysOpen
      );
      business.employees[employeeName].fullTime = checkIfFullTime(
        business.employees[employeeName]
      );
      if (i === 0) {
        business.employees[employeeName].position = 'HR';
      } else if (i === 1) {
        business.employees[employeeName].position = 'custodian';
      } else if (i === 2) {
        business.employees[employeeName].position = 'writer';
      } else if (i === 3) {
        business.employees[employeeName].position = 'staff engineer';
      }
      business.totalEmployees++;
    }
  });
  xhr.send();
}

// deleteEmployee function
function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees--;
}

// checkIfFullTimeCurrentEmployee function
function checkIfFullTimeCurrentEmployee() {
  for (const employeeName in business.employees) {
    if (business.employees[employeeName].daysOfWeekWorking.length >= 5) {
      business.employees[employeeName].fullTime = true;
    } else {
      business.employees[employeeName].fullTime = false;
    }
  }
}

// DOMContentLoaded event listener
window.addEventListener('DOMContentLoaded', (event) => {
  addWeekends();

  checkIfFullTimeCurrentEmployee();

  addEmployees();
  deleteEmployee('david');
});
