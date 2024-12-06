const api="http://localhost:3000/users";

const updateDescription=async(id,content)=>{
    console.log(id)
    try {
        await fetch(`http://localhost:3000/users/${id}`,{method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                description:content
            }),
        })
        return {success:true,message:"Description submitted successfully!"}
    } catch (error) {
        return {success:false,message:error.message}
    }

}
    
    export default updateDescription;