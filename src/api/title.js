export const TitleData = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8000/title/", {
        method: "GET",
        headers: {
            "auth-token": token
        }
    });

    return await response.json();
};

export const CreateTitle = async (formData) => {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8000/title/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token
        },
        body: JSON.stringify(formData),
    });

    return await response.json();
};


export const DeleteTitle = async(titleid)=>{
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8000/title/delete/${titleid}`,{method:"DELETE", headers:{"auth-token":token},});
    return await response.json()
}

export const UpdateTitle = async(titleid, formData)=>{
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8000/title/update/${titleid}`,{method:"PUT",headers:{"Content-Type":"application/json" ,"auth-token":token},
    body: JSON.stringify(formData),
});
return await response.json();
}