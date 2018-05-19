// Color scheme
const blue = "#3286A8";
const red = "#D5491F";
const orange = "#DA8D0F";
const green = "#80A454";
const gray = "#9DB7C1";

// Set dictionary values
var categories = new Object(); // Create dictionary of categories
categories["Workshop"] = { name: "Workshop", color: blue };
categories["Keynote"] = { name: "Keynote", color: orange };
categories["Conference"] = { name: "Conference", color: red };
categories["Java App"] = { name: "Java App", color: green };
categories["Other"] = { name: "Other", color: gray };

resourcesData = [
    {
        name: "Opening Keynote NY 2018",
        subtitle: "Pat Yongpradit",
        slug: "http://bit.ly/ignitecode",
        image: "./../assets/images/resources/hackathons.jpg",
        category: categories[ "Keynote" ].name,
        categoryColor: categories[ "Keynote" ].color,
        description: "IgniteSTEM New York 2018 opening keynote."
    },
    {
        name: "Hackathon 101",
        subtitle: "What is a hackathon?",
        slug: "https://docs.google.com/presentation/d/1FNfcHycjvCt9JaYobSpIjB6Z5F4ZZy9RzdVoSaMICcc/edit",
        image: "./../assets/images/resources/hackathons.jpg",
        category: categories[ "Workshop" ].name,
        categoryColor: categories[ "Workshop" ].color,
        description: "Hackathon presentation at IgniteSTEM New York 2018."
    },
    {
        name: "NY 2018 Schedule",
        subtitle: "Official New York 2018 Schedule",
        slug: "https://files1.mixmaxusercontent.com/qFKk2kJpMAiobyj6z/f/aU9VX610HM7UeIiyu/?messageId=MvztNu6Q1t4bPlnZ2&sc=false&rn=&re=gInJ3buMHc01GQl52bsxWYi1mI ",
        image: "./../assets/images/resources/hackathons.jpg",
        category: categories[ "Conference" ].name,
        categoryColor: categories[ "Conference" ].color,
        description: "Schedule"
    },
    {
        name: "NY 2018 Booklet",
        subtitle: "Booklet with speakers, bios, etc.",
        slug: "https://drive.google.com/file/d/14BlQeVut2lRWtqldVHkZ5S0weVeBhDE7/view",
        image: "./../assets/images/resources/hackathons.jpg",
        category: categories[ "Conference" ].name,
        categoryColor: categories[ "Conference" ].color,
        description: "Booklet"
    },
    {
        name: "Chi Nguyen",
        subtitle: "Project Manager at Major League Hacking",
        slug: "https://www.dropbox.com/s/u53dp9y8zc80zip/chinguyen.pdf?dl=0",
        image: "./../assets/images/resources/hackathons.jpg",
        category: categories[ "Conference" ].name,
        categoryColor: categories[ "Conference" ].color,
        description: "Slides"
    },
    {
        name: "Rafe Steinhauer",
        subtitle: "Princeton Design Thinking",
        slug: "https://www.dropbox.com/s/22sucvy0fw2fgm7/rafesteinhauer.pdf?dl=0",
        image: "./../assets/images/resources/hackathons.jpg",
        category: categories[ "Conference" ].name,
        categoryColor: categories[ "Conference" ].color,
        description: "Slides"
    },
    {
        name: "Ayna Agarwal",
        subtitle: "Co-Founder of She++",
        slug: "https://www.dropbox.com/s/tz2tl545fij4nrd/ayna_agarwal_isx.pdf?dl=0",
        image: "./../assets/images/resources/hackathons.jpg",
        category: categories[ "Conference" ].name,
        categoryColor: categories[ "Conference" ].color,
        description: "Slides"
    },
    {
        name: "Jason Park",
        subtitle: "Princeton Day School STEAM",
        slug: "https://www.dropbox.com/s/apv7kl2o3mto2xq/Jasonparkslides.pptx?dl=0",
        image: "./../assets/images/resources/hackathons.jpg",
        category: categories[ "Conference" ].name,
        categoryColor: categories[ "Conference" ].color,
        description: "Slides"
    },
]
