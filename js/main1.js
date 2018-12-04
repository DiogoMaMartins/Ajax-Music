var urlSongs = 'https://musicdemons.com/api/v1/artist';
var names;
var id;
var output;
var namesList;
var namesResponse;

function changePage(find) {
    names = find.value.toUpperCase();
    fetch(urlSongs, {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json())
        .then(response => {

            for (i in response) {
                namesResponse = response[i].name.toUpperCase();
                if (namesResponse.startsWith(names)) {
                    //console.log(namesResponse)
                    namesList +=
                        `
    <option value="${namesResponse}">

    `
                    document.getElementById("datalist1").innerHTML = namesList;
                }
                // console.log(names)
                if (namesResponse == names) {
                    var id = response[i].id;

                    var allSongsFromName = `https://musicdemons.com/api/v1/artist/${id}/songs`;
                    fetch(allSongsFromName, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).then(rest => rest.json())
                        .then(responset => {
                            //console.log(responset)
                            for (xx in responset) {
                                //console.log(responset[xx].youtube_id)
                                var idsVideos = responset[xx].youtube_id;
                                //console.log(idsVideos)
                               
                                output +=
                                    `
      <li><iframe src="https://www.youtube.com/embed/${idsVideos}" height="200" width="300"></iframe></li>

      `
                                document.getElementById("container").innerHTML = output;
                              

                            }

                        })
                }
            }
        })
}

