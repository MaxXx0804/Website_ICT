contentArray = 
{
    "users":
    [
        {
            "lastname": "CASTILLO",
            "firstname":"Weegee Andrea M.",
            "biodata": "Please stop this madness",
            "quote": "\"Haha eto pagod kaka edit\"",
            "imageURL":"image/GEE.png",
            "position":"MEMBER"
        },
        {
           "lastname": "RUINA",
            "firstname":"Jhaecel Faith",
            "biodata": "Straight as a circle",
            "quote": "\"As long as I believe it, I'm sure that I can Achieve it.\"",
            "imageURL":"image/RUINA.png",
            "position":"MEMBER"
        }, 
        {
            "lastname": "LAMPA",
            "firstname":"Rency",
            "biodata": "I love reading books",
            "quote": "\"What’s comin’ will come, an’ we’ll meet it when it does.\"",
            "imageURL":"image/ALICE HUO.png",
            "position":"MEMBER"


        },
    ],
}

outputContentArray = 
{
    "contents":
    [
        {
            "title":"Q1 ACT 5",
            "maintext":"This activity is entitled Elephant and Friends Story where i’ve decided to use div as their divider to make it easy to understand. On the left side of the div, you can witness the story itself–a moral lesson was also stated at the bottom part of the story. On the right side, I’ve decided to put an image for you to foresee what the story looks like. ",
            "image":"image/q1_act5.png" ,
            "htmlsrc":"output/Q1_ACT5.html"
        },
        {
            "title":"Q2",
            "maintext":"This activity is same with ACT 2. This activity showcases the stories of Aesop, we all know that Aesop is well known and one story is not enough–providing a story list will help the readers know more about his literature.",
            "image":"image/q2_act2.png",
            "htmlsrc":"output/Q2_ACT2.html"
        },
        {
            "title":"Q3",
            "maintext":"This activity is entitled POS (Point Of Sale) ACT 3 where we sell different types of traditional dishes. Filipino cuisine is one of the best in the Southeast Asian countries, providing an accessible shop will help other people to try our traditional dishes.",
            "image":"image/q3_act2.png",
            "htmlsrc":"output/Q3_ACT3.html"
        },
        {
            "title":"Q4",
            "maintext":"This activity is a Vowel Extractor, where when you input random words, the following vowels will be extracted in the input. Vowel extractor can be helpful in some cases. ",
            "image":"image/q4_act4.png",
            "htmlsrc":"output/Q4_ACT4.html"
        },
    ],
}

currentIndex = 0;

let biodataTypeWriter;
let quoteTypeWriter;

function MembersButtonClick(e)
{
    biodata = document.querySelector(".cm-biodata");
    imageURL = document.querySelector(".cm-imageURL");
    firstname = document.querySelector(".cm-firstname");
    lastname = document.querySelector(".cm-lastname");
    position = document.querySelector(".cm-position");
    quote = document.querySelector(".cm-quote");


    if (e == "left")
    {
        if(currentIndex > 0)
        {
            currentIndex--;
            let i = 0;
            let j = 0;
            clearInterval(biodataTypeWriter);
            biodata.textContent = "";
            quote.textContent = "";
            biodataTypeWriter = setInterval(()=>{
                
                if(i < contentArray.users[currentIndex].biodata.length)
                {
                    biodata.textContent += contentArray.users[currentIndex].biodata.charAt(i);
                    i++;
                }
                else
                {
                    if(j < contentArray.users[currentIndex].quote.length)
                    {
                        quote.textContent += contentArray.users[currentIndex].quote.charAt(j);
                        j++;
                    }
                    else
                    {
                        clearInterval(biodataTypeWriter);
                    }
                }
            },25)
            
            imageURL.src = contentArray.users[currentIndex].imageURL;
            firstname.textContent = contentArray.users[currentIndex].firstname;
            lastname.textContent = contentArray.users[currentIndex].lastname + ",";
            position.textContent = contentArray.users[currentIndex].position;
        }
    }
    else
    {
        if (currentIndex < contentArray.users.length - 1)
        {
            currentIndex++;
            let i = 0;
            let j = 0;
            biodata.textContent = "";
            quote.textContent = "";
            clearInterval(biodataTypeWriter);
            biodataTypeWriter = setInterval(()=>{
                
                if(i < contentArray.users[currentIndex].biodata.length)
                {
                    biodata.textContent += contentArray.users[currentIndex].biodata.charAt(i);
                    i++;
                }
                else
                {

                    if(j < contentArray.users[currentIndex].quote.length)
                    {
                        quote.textContent += contentArray.users[currentIndex].quote.charAt(j);
                        j++;
                    }
                    else
                    {
                        clearInterval(biodataTypeWriter);
                    }
                }
            },25)
            imageURL.src = contentArray.users[currentIndex].imageURL;
            firstname.textContent = contentArray.users[currentIndex].firstname;
            lastname.textContent = contentArray.users[currentIndex].lastname + ",";
            position.textContent = contentArray.users[currentIndex].position;
        }
    }
    console.log(currentIndex);
}

let outputCurrentIndex = 0;
let outputSetInterval;

function OutputFunction(direction)
{
    title = document.querySelector(".output-title");
    main = document.querySelector(".output-main-text");
    quarterBtn = document.querySelector(".quarter-btn");
    image = document.querySelector(".output-image");
    src = document.querySelector(".output-src");

    if (direction == "left")
    {
        
        if (outputCurrentIndex > 0)
        {
            clearInterval(outputSetInterval);
            outputCurrentIndex--;
            let i = 0;
            let j = 0;
            title.textContent = "";
            main.textContent = "";
            outputSetInterval = setInterval(()=>{
                
            console.log("check");
            if(i < outputContentArray.contents[outputCurrentIndex].title.length)
            {
                title.textContent += outputContentArray.contents[outputCurrentIndex].title.charAt(i);
                i++;
            }
            else
            {

                if(j < outputContentArray.contents[outputCurrentIndex].maintext.length)
                {
                    main.textContent += outputContentArray.contents[outputCurrentIndex].maintext.charAt(j);
                    j++;
                }
                else
                {
                    clearInterval(outputSetInterval);
                }
            }
            }, 15);
        }
    }
    else
    {
        if (outputCurrentIndex < outputContentArray.contents.length - 1)
            {
                clearInterval(outputSetInterval);
                outputCurrentIndex++;
                let i = 0;
                let j = 0;
                title.textContent = "";
                main.textContent = "";
                outputSetInterval = setInterval(()=>{
                    
                    if(i < outputContentArray.contents[outputCurrentIndex].title.length)
                    {
                        title.textContent += outputContentArray.contents[outputCurrentIndex].title.charAt(i);
                        i++;
                    }
                    else
                    {
    
                        if(j < outputContentArray.contents[outputCurrentIndex].maintext.length)
                        {
                            main.textContent += outputContentArray.contents[outputCurrentIndex].maintext.charAt(j);
                            j++;
                        }
                        else
                        {
                            clearInterval(outputSetInterval);
                        }
                    }
                },15)
                
            }
    }
    image.src = outputContentArray.contents[outputCurrentIndex].image;
    quarterBtn.textContent = QuarterButtonText();
    src.href = outputContentArray.contents[outputCurrentIndex].htmlsrc;
}

function QuarterButtonText()
{
    switch(outputCurrentIndex)
    {
        case 0:
            return "1ST QUARTER";
            break;
        case 1:
            return "2ND QUARTER";
            break;
        case 2:
            return "3RD QUARTER";
            break;
        case 3:
            return "4TH QUARTER";
            break;
    }
}