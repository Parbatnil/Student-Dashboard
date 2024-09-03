// src/data/user.jsx

// Sample course details
export const courseDetails = [
  {
    jeca: "West Bengal Joint Entrance Examinations Board (WBJEEB) will conduct common entrance test JECA-2024 and counselling for admission into Master of Computer Application (MCA) course in various institutions in West Bengal for 2024-25 academic session.",
    jee: "The Joint Entrance Examination (JEE) is an engineering entrance assessment conducted for admission to various engineering colleges in India. It comprises two different examinations: the JEE-Main and the JEE-Advanced.",
    gate: "The Graduate Aptitude Test in Engineering (GATE) is an entrance examination conducted in India that tests the undergraduate-level knowledge in engineering and sciences for admission to technical postgraduate programs. GATE is conducted jointly by the Indian Institute of Science and seven Indian Institutes of Technologies at Roorkee, Delhi, Guwahati, Kanpur, Kharagpur, Chennai (Madras) and Mumbai (Bombay) on behalf of the National Coordination Board – GATE, Department of Higher Education, Ministry of Education (MoE), Government of India.",
  },
];
export const degreeDetails = [
  {
    mca: "MCA stands for Master of Computer Applications. It is a two-year postgraduate program that focuses on computer applications. The course is designed to provide students with the knowledge and skills that are required to develop and implement computer applications. MCA is a popular choice for students who want to pursue a career in the IT industry. MCA course allows candidates to develop computer skills which are in great demand across various IT and Software companies. Moreover, it is designed to meet the shortage of qualified professionals in the IT (Information Technology) industry in India.",
    bca: "BCA stands for Bachelor of Computer Applications. The three-year undergraduate degree programme provides a strong foundation in computer applications. It's a three-year undergraduate program designed to equip students with the knowledge and skills to develop and implement computer software application",
  },
];

const users = [
  {
    username: "parbat",
    password: "1234",
    name: "Parbat Nil Bera",
    rollNo: "13071023024",
    guardianName: "Bablu bera",
    age: "22",
    exam: "gate",
    courseStartDate: "13/07/2002",
    courseEndDate: "14/07/2004",
    courseenrolled: "Master Of Computer Application",
    coursecode: "mca",
    email: "parbatnilbera743@gmail.com",
    dob: "13/07/2002",
    photoUrl: "/Photos/ParbatNilBera.jpg",
    phoneNumber: "9163419935",
    registrationNumber: "OGHTSVUUUTN",
  },
  {
    username: "shreya",
    password: "4321",
    name: "Shreya Manna",
    rollNo: "13071023046",
    guardianName: "Ashok Kumar Manna",
    age: "22",
    exam: "",
    courseStartDate: "08/09/2002",
    courseEndDate: "09/09/2004",
    courseenrolled: "Master Of Computer Application",
    coursecode: "mca",
    email: "shreya.manna02@gmail.com",
    dob: "08/09/2002",
    photoUrl: "/Photos/ShreyaManna.jpg",
    phoneNumber: "7439365621",
    registrationNumber: "OGHTSVUUUTN",
  },
  {
    username: "raj",
    password: "5678",
    name: "Raj Kumar",
    rollNo: "13071023012",
    guardianName: "Ramesh Kumar",
    age: "23",
    exam: "jeca",
    courseStartDate: "10/08/2002",
    courseEndDate: "11/08/2004",
    courseenrolled: "Bachelor Of Computer Application",
    coursecode: "bca",
    email: "raj.kumar@gmail.com",
    dob: "10/08/2002",
    photoUrl: "/Photos/raj.jpeg",
    phoneNumber: "9876543210",
    registrationNumber: "OGHTSVUUUTN",
  },
];

// Export the users array as well if needed
export const login = (username, password) => {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    return { success: true, data: user };
  } else {
    return { success: false, message: "Invalid username or password" };
  }
};

export const getUserData = (username) => {
  const user = users.find((u) => u.username === username);
  if (user) {
    return { success: true, data: user };
  } else {
    return { success: false, message: "User not found" };
  }
};
