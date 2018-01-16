const homestemp = () => {
    let homeSource = document.getElementById("homesTemplate").innerHTML;
    let homesTemplate = Handlebars.compile(homeSource);
    let homesData = {
        "home-content": [
            {
                "homes-block": [
                    {
                        "title": "Homes",
                        "subtitle": "Discover the city's party scene",
                        "price": "$35 per person",
                        "cover-img": "http://res.cloudinary.com/csucu/image/upload/w_332,h_222/v1515765311/home2_e2rdey.jpg"
                    },
                    {
                        "title": "Home",
                        "subtitle": "Discover the city's party scene",
                        "price": "$35 per person",
                        "cover-img": "http://res.cloudinary.com/csucu/image/upload/w_332,h_222/v1515765311/home-1_jw2hmi.jpg"
                    },
                    {
                        "title": "Home",
                        "subtitle": "Discover the city's party scene",
                        "price": "$35 per person",
                        "cover-img": "http://res.cloudinary.com/csucu/image/upload/w_332,h_222/v1515765309/home-3_vbp9af.jpg"
                    }
                ]
            }
        ]
    };

    document.querySelector(".homes-block").innerHTML = homesTemplate(homesData);
};
homestemp();