// Create new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// GitHub endpoint, dynamically passing in specified username
const url = `https://api.github.com/repos/plex1on/haunting-hunters/releases/latest`;

// Open a new connection, using a GET request via URL endpoint
// Providing 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true);

// When request is received
// Process it here
xhr.onload = function() {
    // Parse API data into JSON
    const data = JSON.parse(this.response);
    // Grab the last updated date
    let updated = document.getElementById('updated');
    // Date formatting
    var formattedDate = new Date(`${data.published_at}`);
    var d = formattedDate.getDate();
    var m =  formattedDate.getMonth();
    m += 1;  // JavaScript months are 0-11
    var y = formattedDate.getFullYear();

    if (d < 10) {
        d = "0" + d;
    }
    if (m < 10) {
        m = "0" + m;
    }
    updated_date = (d + "/" + m + "/" + y);
    updated.innerHTML = (`${updated_date}`)

    // Release
    // Grab the last updated date
    let release_date = document.getElementById('release-date');
    // Date formatting
    var formattedDate = new Date(`${data.published_at}`);
    var d = formattedDate.getDate();
    var m =  formattedDate.getMonth();
    m += 1;  // JavaScript months are 0-11
    var y = formattedDate.getFullYear();

    if (d < 10) {
        d = "0" + d;
    }
    if (m < 10) {
        m = "0" + m;
    }
    date = (d + "/" + m + "/" + y);
    release_date.innerHTML = (`${date}`)
    // Grab the release name
    let release_name = document.getElementById('release-name');
    release_name.innerHTML = (`Version ${data.tag_name}: ${data.name}`)
    // Grab the release description
    let release_description = document.getElementById('release-description');
    release_description.innerHTML = (`${data.body}`)
    // Grab the latest release's downloads
    let release_downloads = document.getElementById('release-downloads');
    data2 = data.assets
    data3 = data2[0]
    release_downloads.innerHTML = (`${data3.download_count} \(on Github\)`)
    // Grab the release size
    let release_size = document.getElementById('release-size');
    var sizetemp = (((data3.size / 10) / 10) / 10)
    var sizetemp2 = Math.round(sizetemp * 10) / 10
    release_size.innerHTML = (`${sizetemp2}KB`)
}

// Send the request to the server
xhr.send();