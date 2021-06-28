
 const getCandidates = () => {
  return  fetch('http://localhost:3333/api/candidates')
  .then((res) => res.json())
 }
 const getReports = () => {
  return  fetch('http://localhost:3333/api/reports')
  .then((res) => res.json())
 }
 const getCompanies = () => {
  return  fetch('http://localhost:3333/api/companies')
  .then((res) => res.json())
 }

 const getToken = (email, password) =>{
     return fetch ('http://localhost:3333/login',{
         method: 'POST',
         headers: {
             "Content-Type" : 'application/json'
         },
         body: JSON.stringify({
             email: email,
             password: password,
         })
     })
     .then(data => data.json())
 }





 export {getCandidates, getReports, getCompanies, getToken}