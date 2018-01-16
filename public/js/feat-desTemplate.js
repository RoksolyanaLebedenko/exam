const feat_des = () => {
    let feat_dessource = document.getElementById("featTemplate").innerHTML;

    let feat_destemplate = Handlebars.compile(feat_dessource);

    let feat_desdata = {
        "feat_des-content": [
            {
                "feat_des-block": [
                    {
                        "title": "fffffffffffffff",
                        "subtitle": "Discover the city's party scene",
                        "price": "$35 per person",
                        "cover-img": "//i.ytimg.com/i/esO4-UStBz-iTTgkY645yw/1.jpg"
                    },
                    {
                        "title": "Experiences",
                        "cover-img": "//i.ytimg.com/i/-9-kyTW8ZkZNDHQJ6FgpwQ/1.jpg"
                    },
                    {
                        "title": "Restaurants",
                        "cover-img": "//i.ytimg.com/i/Egdi0XIXXZ-qJOFPf4JSKw/1.jpg"
                    },
                    {
                        "title": "Experiences",
                        "cover-img": "//i.ytimg.com/i/-9-kyTW8ZkZNDHQJ6FgpwQ/1.jpg"
                    }
                ]
            }
        ]
    };

    document.querySelector(".homes-block").innerHTML = feat_destemplate(feat_desdata);
};
feat_des();