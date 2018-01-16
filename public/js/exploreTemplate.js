const expf = () => {
    let source = document.getElementById("Template").innerHTML;

    let template = Handlebars.compile(source);

    let data = {
        "main-content": [
            {
                "explore-block": [
                    {
                        "title": "Homes",
                        "cover-img": "http://res.cloudinary.com/csucu/image/upload/h_70,w_96/v1515765311/home2_e2rdey.jpg"
                    },
                    {
                        "title": "Experiences",
                        "cover-img": "http://res.cloudinary.com/csucu/image/upload/h_70,w_96/v1515765313/experience-3_obcz5d.jpg"
                    },
                    {
                        "title": "Restaurants",
                        "cover-img": "http://res.cloudinary.com/csucu/image/upload/h_70,w_96/v1515765891/food_inacv8.jpg"
                    }
                ]
            }
        ]
    };

    document.querySelector(".explore-block").innerHTML = template(data);
};
expf();