const resumeData = {
  Name: "Barath.N",
  Contact: [
    {
      Email: "Barath@example.com",
      Phone: "+919080170190",
      Address: "24a.3,iqbal,colony,tvs tollgate, trichy 20",
    },
  ],
  Summary: "Experienced in Assistant manager in ICICI Bank.ltd",
  Experience: [
    {
      Title: "ASSISTANT MANAGER",
      Company: "icici bank ltd",
      Location: "Chennai, Tamil nadu",
      Dates: "August 2023 - December 2023",
      Responsibilities: [
        "Led a team and making a profit in my control branch and achieving targets",
      ],
    },
  ],
  Education: [
    {
      Degree: "Bachelor of commerce",
      Institution: "Bharathiyar univercity",
      Location: "Coimbatore, tamil nadu",
      Dates: "2018 - 2021",
    },
    {
      Degree: "MBA ",
      Institution: "anna  univercity",
      Location: "trichy, tamil nadu",
      Dates: "2021 - 2023",
    },
  ],
  Skills: ["TEAM LEAD", "TEAM MANAGEMENT ", "JavaScript", "HTML", "CSS"],
};

// Using for...in loop
for (const key in resumeData) {
  if (Array.isArray(resumeData[key])) {
    console.log(`${key}:`);
    resumeData[key].forEach((item) => console.log(item));
  } else {
    console.log(`${key}: ${resumeData[key]}`);
  }
}

// Using for...of loop
for (const [key, value] of Object.entries(resumeData)) {
  if (Array.isArray(value)) {
    console.log(`${key}:`);
    value.forEach((item) => console.log(item));
  } else {
    console.log(`${key}: ${value}`);
  }
}

// Using forEach method
Object.entries(resumeData).forEach(([key, value]) => {
  if (Array.isArray(value)) {
    console.log(`${key}:`);
    value.forEach((item) => console.log(item));
  } else {
    console.log(`${key}: ${value}`);
  }
});

var xhr = new XMLHttpRequest(); //CREAT A OBJECT

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.onload = function () {
  //console.log("XMLHttpRequest- status", xhr.status);
  var countries = JSON.parse(xhr.responseText);
};
