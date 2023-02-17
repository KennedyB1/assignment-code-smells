/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpings: number[]): number {
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => { return jumpDistanceSoFar + currentJump }
  );
};
////////////////////////////////////////////////////////////////////////
/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) { }
}

function getStudentGrade(student: Student): string {
  if (student.name === "Sebastian") {
    if (student.handedInOnTime) {
      student.passed = true;
      return "VG";
    }
  }
  student.passed = false;
  return "IG";
}



/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

class Temp {
  constructor(public city: string, public time: Date, public topTemperature: number) { }
}

function averageWeeklyTemperature(heights: Temp[]) {
  let totalTemperature = 0;
  let averageTemperature = 0;
  const timeInMs = 604800000
  const daysInAWeek = 7;

  for (let who = 0; who < heights.length; who++) {
    if (heights[who].city === "Stockholm") {
      if (heights[who].time.getTime() > Date.now() - timeInMs) {
        totalTemperature += heights[who].topTemperature;
      }
    }
  }
  averageTemperature = totalTemperature / daysInAWeek;
  return
}

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */


class Product {
  constructor(
    public name: string,
    public price: number,
    public amount: number,
    public description: string,
    public image: string
  ) { }
}

function showProduct(product: Product, parent: HTMLElement) {
  const container = document.createElement("div");

  const title = document.createElement("h4");
  title.innerHTML = `${product.name}`;
  container.appendChild(title);

  const price = document.createElement("strong");
  price.innerHTML = `${product.price}`;
  container.appendChild(price);

  const imageTag = document.createElement("img");
  imageTag.src = product.image;
  container.appendChild(imageTag);

  parent.appendChild(container);
}
/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!

*/
function createStudent(student: Student): HTMLElement {
  const container = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = student.handedInOnTime;
  container.appendChild(checkbox);
  return container;
}

function presentStudents(students: Student[]) {
  for (const student of students) {
    const container = createStudent(student);
    const listOfStudents = student.handedInOnTime
      ? document.querySelector("ul#passedstudents")
      : document.querySelector("ul#failedstudents");
    if (listOfStudents) {
      listOfStudents.appendChild(container);
    }
  }
}
/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt: Lorem, ipsum, dolor, sit, amet Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */
function getLoremIpsum(): string {
  const strings = ["Lorem", "ipsum", "dolor", "sit", "amet"];
  return strings.join(" ");
}

////////////////////////////
/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/


//////
interface User {
  name: string;
  birthday: Date;
  email: string;
  password: string;
}
function calculateAge(birthday: Date) {
  const ageDiffMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDiffMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  return age;
}

function createUser(user: User) {
  // Validation
  const age = calculateAge(user.birthday);
  const minimumUserAge = 20;
  if (age >= minimumUserAge) {
    // Logik
  } else {
    return "Du är under 20 år";
  }
}


