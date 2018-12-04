var urlSongs = 'https://musicdemons.com/api/v1/artist';
var names;
var id;
var output;
var namesList;

function changePage(find) {
    names = find.value.toUpperCase();
    //console.log(names)
}

function b() {
    fetch(urlSongs, {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json())
        .then(response => {

            for (i in response) {
                var namesResponse = response[i].name.toUpperCase();
                namesList +=
                    `
    <option value="${namesResponse}">

    `
                document.getElementById("datalist").innerHTML = namesList;
                if (namesŔesponse == names) {
                    console.log(names)
                    var id = response[i].id
                    //console.log(response[i].id)
                }
            }
            var allSongsFromName = `https://musicdemons.com/api/v1/artist/${id}/songs`;
            fetch(allSongsFromName, {
                    method: 'GET',
                    body: JSON.stringify(),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(rest => rest.json())
                .then(responset => {
                    console.log(responset)
                    for (xx in responset) {
                        //console.log(responset[xx].youtube_id)
                        var idsVideos = responset[xx].youtube_id;
                        //console.log(idsVideos)
                        output +=
                            `
      <li><iframe src="https://www.youtube.com/embed/${idsVideos}" height="200" width="300"></iframe></li>

      `
                        document.getElementsByTagName("BODY")[0].innerHTML = output;

                    }

                })

        })
}