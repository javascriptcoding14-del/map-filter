let students=[
    {
        Name:"Aayush",
        Marks:99,
        Class:"4th",
        Address:"Himachal"
    },
     {
        Name:"Aayansh",
        Marks:96,
        Class:"5th",
        Address:"India"
    },
 {
        Name:"Aaryan",
        Marks:92,
        Class:"6th",
        Address:"Haridawar"
    },
 {
        Name:"Ankita",
        Marks:90,
        Class:"8th",
        Address:"Hisar"
    },
 {
        Name:"Aayushi",
        Marks:89,
        Class:"9th",
        Address:"Himachal"
    },
 {
        Name:"Rohit",
        Marks:99,
        Class:"4th",
        Address:"Himachal"
    },
 {
        Name:"Riya",
        Marks:97,
        Class:"4th",
        Address:"Hisar"
    },
 {
         Name:"Aayush",
        Marks:79,
        Class:"4th",
        Address:"Dehli"
    },
 {
        Name:"Nisha",
        Marks:79,
        Class:"4th",
        Address:"Karnal"
    },
 {
        Name:"Nikhil",
        Marks:89,
        Class:"6th",
        Address:"Himachal"
    }
];
function displayStudent(studentList) {                                                                                                                                                                                                                                                                                                                                                                                                                               
const cards=studentList.map(student =>{
    return `
    <div class="student-card">
            <p>Student Name:<strong>${student.Name}</strong></p>
            <p>Marks:<strong>${student.Marks}</strong></p>
            <p>Class:<strong>${student.Class}</strong></p>
            <p>Address:<strong>${student.Address}</strong></p>
    </div>`

}); 
 const div=document.getElementById("student-data"); 
 div.innerHTML=`${cards.join(' ')}` 
}
displayStudent(students);
const searchBtn=document.getElementById("btn");
searchBtn.addEventListener("click",()=>{
    const searchText=document.getElementById("search-box").value
    .toLowerCase();

    const filterStudents=students.filter(student=>{
        return student.Name.toLocaleLowerCase().startsWith(searchText)
    });
    displayStudent(filterStudents);
    });
