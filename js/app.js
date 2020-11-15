// var tweets = [
//     "hey! good morning",
//     "happy saturday",
//     "it's too cold",
//     "we can not waste time",
//     "i love canada",
//     "never give up",
//     "success is not easy to achieve",
//     "chocolate is too sweet",
//     "anger is not good for health",
//     "save animals"
// ];


// for
// for (var counter = 0; counter < tweets.length; counter++){
//     console.log(tweets[counter]);
// }


//bonus part

// var tweets = [
//     {
//         tweet: "hey! good morning",
//         username: "Dhwani",
//         age: 23,
//         created_at: "10-09-2020"
//     },
//     {
//         tweet: "happy saturday",
//         username: "tina",
//         age: 24,
//         created_at: "10-07-2020"
//     },
//     {
//         tweet: "it's too cold",
//         username: "mina",
//         age: 25,
//         created_at: "10-06-2020"
//     },
//     {
//         tweet: "we can not waste time",
//         username: "jina",
//         age: 26,
//         created_at: "10-05-2020"
//     },
//     {
//         tweet: "i love canada",
//         username: "joy",
//         age: 27,
//         created_at: "10-04-2020"
//     },
//     {
//         tweet: "never give up",
//         username: "roy",
//         age: 28,
//         created_at: "10-03-2020"
//     },
//     {
//         tweet: "success is not easy to achieve",
//         username: "loy",
//         age: 29,
//         created_at: "10-02-2020"
//     },
//     {
//         tweet: "chocolate is too sweet",
//         username: "rahul",
//         age: 30,
//         created_at: "10-01-2020"
//     },
//     {
//        tweet: "anger is not good for health",
//         username: "jack",
//         age: 31,
//         created_at: "10-29-2020"
//     },
//     {
//         tweet:  "save animals",
//         username: "angel",
//         age: 32,
//         created_at: "10-19-2020"
//     }
// ];
// for(var counter = 0; counter < tweets.length; counter++){
//         console.log(tweets[counter].tweet);
//         console.log(tweets[counter].username);
//         console.log(tweets[counter].created_at);
        
// }





//w9e
var tweets = [
    {
        tweet: "hey! good morning",
        username: "Dhwani",
        age: 23,
        created_at: "10-09-2020"
    },
    {
        tweet: "happy saturday",
        username: "tina",
        age: 4,
        created_at: "10-07-2020"
    },
    {
        tweet: "it's too cold",
        username: "mina",
        age: 2,
        created_at: "10-06-2020"
    },
    {
        tweet: "we can not waste time",
        username: "jina",
        age: 26,
        created_at: "10-05-2020"
    },
    {
        tweet: "i love canada",
        username: "joy",
        age: 7,
        created_at: "10-04-2020"
    },
    {
        tweet: "never give up",
        username: "roy",
        age: 28,
        created_at: "10-03-2020"
    },
    {
        tweet: "success is not easy to achieve",
        username: "loy",
        age: 9,
        created_at: "10-02-2020"
    },
    {
        tweet: "chocolate is too sweet",
        username: "rahul",
        age: 3,
        created_at: "10-01-2020"
    },
    {
       tweet: "anger is not good for health",
        username: "jack",
        age: 18,
        created_at: "10-29-2020"
    },
    {
        tweet:  "save animals",
        username: "angel",
        age: 13,
        created_at: "10-19-2020"
    }
];


function age(tweet){
    if(tweet.age >= 18){
        return tweet;
    }
}


var requiretweets = tweets.filter(age);
console.log(requiretweets);