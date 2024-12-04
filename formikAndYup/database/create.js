const api="http://localhost:3000/users";
// require doesnt exist on clinet side


const createUser=async(name,email,password,selectVal)=>{
    await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email:email,
          password:password,
          selectVal:selectVal,
        }),
      });
}




export default createUser;