// const fetchA = async()=>{
//     try{
//         const res= await fetch('http://localhost:3000/task/get');
//         const data =await res.json();
//         data.map((n)=>{console.log(n)
//     })
//     }catch(err){
//         console.log("Internal server error",err)
//     }
// }
// fetchA();

// ...existing code... did not work because Because res.json() returns an object, not an array. Your backend sends { message, tasks } (or an error object like { message: "Unauthorized access" }), so data is an object and data.map is undefined. Also if the request is 401 res.ok is false and the JSON is an error message, not an array.
const fetchA = async () => {
    try {
        const res = await fetch('http://localhost:3000/task/get');
        if (!res.ok) {
            console.log('Request failed', res.status, await res.text());
            return;
        }
        const data = await res.json();
        const list = Array.isArray(data) ? data : Array.isArray(data.tasks) ? data.tasks : null;
        if (list) list.forEach(n => console.log(n));
        else console.log('Unexpected response shape:', data);
    } catch (err) {
        console.log('Internal server error', err);
    }
}
fetchA();
// ...existing code...