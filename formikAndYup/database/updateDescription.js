const api="http://localhost:3000/users";


const updateDescription=async(id,content,image)=>{
    console.log(id,image)

    try {
        await fetch(`http://localhost:3000/users/${id}`,{method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                description:content,
                image:image
            }),
        })
        return {success:true,message:"Description and image submitted successfully!"}
    } catch (error) {
        return {success:false,message:error.message}
    }

}
    
    export default updateDescription;