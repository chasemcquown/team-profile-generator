module.exports = (teamMember1, teamMember2, teamMember3) => {
    
   return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
       <link rel="stylesheet" href="./style.css">
       <title>Document</title>
   </head>
   <body>
   
       <nav class="navbar navbar-light bg-danger">
           <div class="container-fluid">
             <span class="navbar-brand mb-0 h1 mx-auto text-light">My Team</span>
           </div>
         </nav>
   
       <div class="container">
   
           <div class="m-4 row align-items-center">
   
               <div class="col-4">
               <div class="card" style="width: 18rem;">
               <div class="card-body">
                   <h5 class="card-title">${teamMember1.getName()}</h5>
                   <h6 class="card-text "> <i class="fas fa-mug-hot"></i> Manager</h6>
               </div>
                   <ul class="list-group list-group-flush">
                   <li class="list-group-item">Employee ID number: ${teamMember1.getId()}</li>
                   <li class="list-group-item">Email address: ${teamMember1.getEmail()}</li>
                   <li class="list-group-item">Office number: ${teamMember1.getOfficeNumber()}</li>
                   </ul>
               </div>
               </div>
   
               <div class="col-4">
               <div class="card" style="width: 18rem;">
               <div class="card-body">
                   <h5 class="card-title">${teamMember3.getName()}</h5>
                   <h6 class="card-text "><i class="fas fa-glasses"></i> Engineer</h6>
               </div>
                   <ul class="list-group list-group-flush">
                   <li class="list-group-item">Employee ID number: ${teamMember3.getId()} </li>
                   <li class="list-group-item">Email address: ${teamMember3.getEmail()}</li>
                   <li class="list-group-item">GitHub: <a href="https://github.com/${teamMember3.getGithub()}" target="_blank">GitHub</a></li>
                   </ul>
               </div>
               </div>
   
               <div class="col-4">
               <div class="card" style="width: 18rem;">
               <div class="card-body">
                   <h5 class="card-title">${teamMember2.getName()}</h5>
                   <h6 class="card-text "><i class="fas fa-graduation-cap"></i> Intern</h6>
               </div>
                   <ul class="list-group list-group-flush">
                   <li class="list-group-item">Employee ID number: ${teamMember2.getId()} </li>
                   <li class="list-group-item">Email address: ${teamMember2.getEmail()}</li>
                   <li class="list-group-item">Attending school at: ${teamMember2.getSchool()}</li>
                   </ul>
               </div>
               </div>
   
           </div>
   
       </div>
   </body>
   </html>
    `; 
  };