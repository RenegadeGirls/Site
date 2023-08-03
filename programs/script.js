fetch("http://localhost:3000/api/programs", {
    method: "GET",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
})
    .then(data => data.json())
    .then(json => console.log(json))