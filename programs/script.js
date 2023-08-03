fetch(`${location.origin}/api/programs/`)
    .then(data => data.json())
    .then(json => console.log(json))
