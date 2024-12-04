// logic of finding the user with the email and then password
const api="http://localhost:3000/users";


const findUserForlogin=async(email,password)=>{
    console.log(email,password)
    try {
      const userData=await fetch(api,{
        method:'GET',
      });
      // response object aauch ani tyaslai hami json ma convert gariracham
      const users=await userData.json();
      // find rerurns the first entry that matched the condition
      const findUserFromDb=await users.find(user=>user.email===email)
      if(!findUserFromDb){
        return {success:false,message:"Invalid email sign up first!"}
      }

      if(findUserFromDb.password===password){
        return {success:true,message:"Login Successfull"}
      }else{
        return { success: false, message: "Invalid password." };
      }
      
  
  
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  export default findUserForlogin;