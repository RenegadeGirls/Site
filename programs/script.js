fetch(`${ location.origin }/api/programs/`)
    .then(data => data.json())
    .then(json => generatePrograms(json))

const displayMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const displayDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dateSettings = {
    timeZone: "America/Los_Angeles",
    timeStyle: "short"
};

function time(date) {
    let time = date.toLocaleTimeString([], dateSettings);
    time = time.replaceAll(" AM", "AM");
    time = time.replaceAll(" PM", "PM");
    return time;
};

function spotText(spots) {
    if(spots == 0) {
        return "Sold out!";
    } else if(spots <= 3) {
        return `Only ${ spots } spot${ spots == 1 ? "" : "s" } left!`;
    } else {
        return "";
    }
}

function generatePrograms(json) {
    const programs = document.getElementById("programs");

    if(json.series.length != 0) programs.hidden = false;

    json.series.forEach(program => {
        const location = program.location_series.location.name;
        const neighborhood = program.location_series.location.neighborhood;
        const title = program.title;
        const spots = program.available_spots;
        const price = program.price_integer / 100;
        const ageMin = program.start_months_old / 12;
        const ageMax = program.end_months_old / 12;
        const days = program.sessions;
        const url = program.web_url;

        const startEpochTime = days.at(0).start_time;
        const endEpochTime = days.at(-1).end_time;

        const startTime = new Date(startEpochTime * 1000);
        const endTime = new Date(endEpochTime * 1000);

        programs.innerHTML += `<li class="program">
            <div class="timeholder">
                <p class="timeframe">
                    ${ displayMonths[startTime.getMonth()] } ${ startTime.getDate() }–${ endTime.getDate() }
                </p>
                <p class="days">
                    ${ displayDays[startTime.getDay()] }–${ displayDays[endTime.getDay()] }, ${ time(startTime) }–${ time(endTime) }
                </p>
                <p class="age-range">
                    ${ ageMin } to ${ ageMax } years olds
                </p>
            </div>
            <div class="info">
                <a class="name" target="_blank" href="${ url }">
                    ${ title }
                </a>
                <p class="location">
                    @ ${ location } (${ neighborhood })
                </p>
                <p class="price">
                    $${ price }
                </p>
            </div>
            <p class="status">
                ${ spotText(spots) }
            </p>
        </li>`;
    });
};