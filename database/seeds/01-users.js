const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(() => {
      return knex("users").insert([
        {
          username: "oswin",
          name: "Clara Oswin Oswald",
          password: bcrypt.hashSync("password"),
          bio: "Run you clever boy, and remember!",
          owner: false,
          avatar:
            "https://steamuserimages-a.akamaihd.net/ugc/264967316455868003/EB685FC16EF794F9E8ADD3F69A4677CF51D35E0A/"
        },
        {
          username: "tardis",
          name: "John Smith",
          password: bcrypt.hashSync("123456"),
          bio:
            "I have 29 businesses on the side away from my 80 hour a week desk job. I placed that hardship onto myself to come out of it stronger than ever!",
            owner: false,
            avatar:
            "https://media.glamour.com/photos/5696d04c01ed531c6f007e25/master/w_400%2Cc_limit/sex-love-life-2011-08-0824-04-start-with-smile_li.jpg"
        },
        {
          username: "kefimochi",
          name: "Kate Efimova",
          password: bcrypt.hashSync("Qwerty"),
          bio: "Interested to start my own business some day!",
          owner: false,
          avatar:
            "https://ca.slack-edge.com/T4JUEB3ME-UJZ8W50QN-b159b0cdf5db-512"
        },
        {
          username: "elonmusk",
          name: "Elon Musk",
          bio: "Tesla is quite cool, isn't it?",
          password: bcrypt.hashSync("space"),
          owner: true,
          avatar:
            "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        },
        {
          username: "zuckk",
          name: "Mark Zuckerberg",
          password: bcrypt.hashSync("plaintext"),
          bio: "The secret to making money is to run ads!",
          owner: true,
          avatar:
            "https://timedotcom.files.wordpress.com/2018/07/mark-zuckerberg-holocaust.jpg"
        }
      ]);
    });
};
