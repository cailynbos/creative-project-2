const apiKey = 'KAUsx3zACV2Xfc6rlSkyurKSWgwj5PbL';
const url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=' + apiKey;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        var articles = json.results;

        console.log(json);

        for (let i = 0; i < 5; i++) {
            var everything = '<div class="article">';

            var img_url = articles[i].media[0]['media-metadata'][2].url;
            var title = articles[i].title;
            var author = articles[i].byline;

            everything += '<img src="' + img_url + '" class="thumbnail"/>';
            everything += '<p class="title">' + title + '</p>';
            everything += '<p class="author">' + author + '</p>';
            everything += '</div>';
            document.getElementById('articles').innerHTML += everything;
        }
    })
