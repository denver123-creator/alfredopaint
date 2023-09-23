const user1 = [{
    name: "Alfredo Publico",
    profession: "<span style=\"font-style:italic;\">Masterful Brushstrokes - </span>Discover the Artistry of Canvas Creations.",
    profilepic: "users/user1/profpic/me.jpg",
    workpics: []
}];


const userWorks = [{
        workpics:[ "users/user1/workpic/pic01.jpg","users/user1/workpic/pic02.jpg","users/user1/workpic/pic04.jpg",
                   "users/user1/workpic/pic03.jpg","users/user1/workpic/pic05.jpg","users/user1/workpic/pic06.jpg",
                   "users/user1/workpic/pic21.jpg","users/user1/workpic/pic08.jpg","users/user1/workpic/pic09.jpg",
                   "users/user1/workpic/pic10.jpg","users/user1/workpic/pic11.jpg","users/user1/workpic/pic12.jpg",
                   "users/user1/workpic/pic13.jpg","users/user1/workpic/pic14.jpg","users/user1/workpic/pic15.jpg",
                   "users/user1/workpic/pic16.jpg","users/user1/workpic/pic17.jpg","users/user1/workpic/pic19.jpg",
                   "users/user1/workpic/pic18.jpg","users/user1/workpic/pic20.jpg","users/user1/workpic/pic07.jpg",           
    ]}];

////////////////////////////////
    let users = '';

    user1.forEach((userData)=>{
    users += `
      <header>
            <h1>${userData.name}</h1>
            <p><strong>${userData.profession}</strong></p>
        </header>
        <a href="#work" class="jumplink pic">
            <span class="arrow icon solid fa-chevron-right"><span>See my work</span></span>
            <img src="${userData.profilepic}" alt="profile" st/>
        </a>`;

    });

//////////////////////////////////

        let usersWork = '';

        userWorks.forEach((userWork) => {
            usersWork += `
                <section>
                    <div class="row">        
            `;
            userWork.workpics.forEach((workpic, index) => {
                usersWork += `
                        <div class="col-4 col-6-medium col-12-small" >
                            <img src="${workpic}" alt="Work Image ${index + 1}" class="image fit">
                        </div>                
                `;
            });
            usersWork += `
                </section>
            `;
        });
///////////////////////////////////

document.querySelector('.intro').innerHTML = users;   
document.getElementById('works').innerHTML = usersWork; 


