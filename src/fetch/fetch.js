// const data = {
//     email: "dev@dev.com",
//     password: "developer",
//   };

//   fetch("http://localhost:3333/login", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data.accessToken));
  

 const getCandidates = () => {
  return  fetch('http://localhost:3333/api/candidates')
  .then((res) => res.json())
 }
 const getReports = () => {
  return  fetch('http://localhost:3333/api/reports')
  .then((res) => res.json())
 }





 export {getCandidates, getReports}