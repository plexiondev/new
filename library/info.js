// Grab Project URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const project = urlParams.get('v')
console.log("Found project " + project + " in URL");

// Create new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Project info
const url = `https://api.github.com/repos/plex1on/${project}`;
console.log("Looking up " + project + " on " + url)

xhr.open('GET', url, true);
xhr.onload = function() {
    // Parse API data into JSON
    const data = JSON.parse(this.response);

    // Project title
    let project_title = document.getElementById('project-title');
    project_title.innerHTML = (`${data.name}`.replace(/\-/g,' '))
    let page_title = document.getElementById('page-title');
    page_title.innerHTML = (`${data.name}`.replace(/\-/g,' ') + ` • ProjectView Beta | plexion`)

    // Project description
    let project_desc = document.getElementById('project-desc');
    project_desc.innerHTML = (`${data.description}`)

    // Project cover
    let project_cover = document.getElementById('project-cover');
    project_cover.style = ('background-image: url(' + `${data.name}`.replace(/\-/g,'').toLowerCase() + '/cover-big.png);')

}

xhr.send();








// Release info
const xhr2 = new XMLHttpRequest();
const url2 = `https://api.github.com/repos/plex1on/${project}/releases/latest`;
console.log("Looking up " + project + " on " + url2)

// Open a new connection, using a GET request via url2 endpoint
// Providing 3 arguments (GET/POST, The url2, Async True/False)
xhr2.open('GET', url2, true);

// When request is received
// Process it here
xhr2.onload = function() {
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

}

// Send the request to the server
xhr2.send();

// Installation + Setup
console.log("Attempting to lookup setup markdown file")
$.get( "datapacks.md", function( data ) {
    let import_setup = document.getElementById('import-datapack-setup');
    var converter = new showdown.Converter();
    text = `${data}`;
    html = converter.makeHtml(text);
    import_setup.innerHTML = (`${html}`)       
},'text');
console.log("Found setup markdown file")