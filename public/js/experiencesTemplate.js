let expsource = document.getElementById("experienceTemplate").innerHTML;
let exptemplate = Handlebars.compile(expsource);


let expdata = {
    "exp-content": [
        {
            "exp-block": [
                {
                    "title": "Homes",
                    "subtitle": "Discover the city's party scene",
                    "price": "$35 per person",
                    "cover-img": "http://res.cloudinary.com/csucu/image/upload/w_243,h_164/v1515765313/experience-3_obcz5d.jpg"
                },
                {
                    "title": "Experiences",
                    "subtitle": "Discover the city's party scene",
                    "price": "$35 per person",
                    "cover-img": "http://res.cloudinary.com/csucu/image/upload/w_243,h_164/v1515765310/experience-2_kpowqa.jpg"
                },
                {
                    "title": "Restaurants",
                    "subtitle": "Discover the city's party scene",
                    "price": "$35 per person",
                    "cover-img": "http://res.cloudinary.com/csucu/image/upload/w_243,h_164/v1515765312/experience-4_toojw3.jpg"
                },
                {
                    "title": "Restaurants",
                    "subtitle": "Discover the city's party scene",
                    "price": "$35 per person",
                    "cover-img": "http://res.cloudinary.com/csucu/image/upload/w_243,h_164/v1515765312/experience-4_toojw3.jpg"
                }
            ]
        }
    ]
};

let exp_output = exptemplate(expdata);
document.querySelector(".experiences-block").innerHTML = exp_output;