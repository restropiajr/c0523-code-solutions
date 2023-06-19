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

// addEmployees function
function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', (event) => {
    function createEmployee(employeeObj) {
      business.employees[employeeObj] = {
        position: '',
        daysOfWeekWorking: '',
      };
    }

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

    function checkIfFullTime(employeeObj) {
      if (employeeObj.daysOfWeekWorking.length >= 5) {
        return true;
      } else {
        return false;
      }
    }

    for (let i = 0; i < 4; i++) {
      const employeeName = xhr.response[i].name;
      if (i === 0) {
        createEmployee(employeeName);
        business.employees[employeeName].position = 'HR';
        business.employees[employeeName].daysOfWeekWorking = randomWorkingDays(
          business.daysOpen
        );
        business.employees[employeeName].fullTime = checkIfFullTime(
          business.employees[employeeName]
        );
        business.totalEmployees++;
      } else if (i === 1) {
        createEmployee(employeeName);
        business.employees[employeeName].position = 'custodian';
        business.employees[employeeName].daysOfWeekWorking = randomWorkingDays(
          business.daysOpen
        );
        business.employees[employeeName].fullTime = checkIfFullTime(
          business.employees[employeeName]
        );
        business.totalEmployees++;
      } else if (i === 2) {
        createEmployee(employeeName);
        business.employees[employeeName].position = 'writer';
        business.employees[employeeName].daysOfWeekWorking = randomWorkingDays(
          business.daysOpen
        );
        business.employees[employeeName].fullTime = checkIfFullTime(
          business.employees[employeeName]
        );
        business.totalEmployees++;
      } else if (i === 3) {
        createEmployee(employeeName);
        business.employees[employeeName].position = 'staff engineer';
        business.employees[employeeName].daysOfWeekWorking = randomWorkingDays(
          business.daysOpen
        );
        business.employees[employeeName].fullTime = checkIfFullTime(
          business.employees[employeeName]
        );
        business.totalEmployees++;
      }
    }
  });
  xhr.send();
}

// deleteEmployee function
function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees--;
}

// DOMContentLoaded event listener
window.addEventListener('DOMContentLoaded', (event) => {
  addWeekends();

  function checkIfFullTimeCurrentEmployee() {
    for (const employeeName in business.employees) {
      if (business.employees[employeeName].daysOfWeekWorking.length >= 5) {
        business.employees[employeeName].fullTime = true;
      } else {
        business.employees[employeeName].fullTime = false;
      }
    }
  }
  checkIfFullTimeCurrentEmployee();

  addEmployees();
  deleteEmployee('david');
});
