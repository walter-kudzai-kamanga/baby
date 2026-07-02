const dailyMessages = [
  {
    day: 1,
    date: "July 2",
    title: "The Final Stretch Begins",
    text: "It has been three long years since I last held your hand, looked into your eyes in person, and felt your warmth. Today starts the final countdown. We're finally closing the distance."
  },
  {
    day: 2,
    date: "July 3",
    title: "A Thousand Days of Waiting",
    text: "Three years is over a thousand days of missing you across miles, time zones, and screens. Every single day of waiting has been worth it because it brought me closer to this moment."
  },
  {
    day: 3,
    date: "July 4",
    title: "Your Smile on My Mind",
    text: "I was looking at your photos today, and my heart did that familiar little flutter. I can't wait to see your smile live and in person, not behind a glass screen."
  },
  {
    day: 4,
    date: "July 5",
    title: "Scent of Memories",
    text: "Do you remember the last hug we shared three years ago? I still remember the warmth of it. Soon, we will create new hugs, new memories, and new laughter."
  },
  {
    day: 5,
    date: "July 6",
    title: "Counting the Sunsets",
    text: "With every sunset that passes, we subtract one more day from the distance. The sun goes down, and we are one step closer to waking up in the exact same time zone."
  },
  {
    day: 6,
    date: "July 7",
    title: "The Sound of Your Voice",
    text: "Voice calls and video chats have been our lifeline. But hearing your voice vibrate in the air right next to me, whispering sweet things... that is going to be magical."
  },
  {
    day: 7,
    date: "July 8",
    title: "Dreaming of the Airport",
    text: "I keep playing the airport reunion scene over and over in my mind. Seeing you walk through those doors is going to feel like the final scene of the best movie ever made."
  },
  {
    day: 8,
    date: "July 9",
    title: "Through Thick and Thin",
    text: "We proved that love isn't about being inseparable; it's about being separated and nothing changing. Three years only made us stronger, more patient, and more in love."
  },
  {
    day: 9,
    date: "July 10",
    title: "A Love Without Borders",
    text: "No ocean was deep enough and no continent was wide enough to keep our hearts apart. We conquered the distance, my love. Just a little longer."
  },
  {
    day: 10,
    date: "July 11",
    title: "Little Things I Miss",
    text: "I miss the quiet moments with you—drinking coffee in silence, walking aimlessly, sharing a silly joke. I can't wait to do absolutely nothing with you."
  },
  {
    day: 11,
    date: "July 12",
    title: "The Warmth of Your Hand",
    text: "My hand feels empty without yours. I am counting down to the exact second our fingers interlock and I know I don't have to let go for a very long time."
  },
  {
    day: 12,
    date: "July 13",
    title: "Three Years, One Heart",
    text: "Time and space tried to test us, but our hearts beat in perfect sync. We kept the fire burning through the coldest nights, and now it's time to bask in the warmth."
  },
  {
    day: 13,
    date: "July 14",
    title: "The Countdown Accelerates",
    text: "Time is starting to feel like it's moving faster, or maybe it's just my heartbeat. Every tick of the clock is a step towards you."
  },
  {
    day: 14,
    date: "July 15",
    title: "Your Laugh is My Favorite Song",
    text: "I can't wait to make you laugh so hard your eyes crinkle. Hearing that laugh in person is going to heal every single day of loneliness from the past three years."
  },
  {
    day: 15,
    date: "July 16",
    title: "No More Goodbyes",
    text: "Soon, the word 'Goodbye' will be replaced by 'See you tomorrow morning.' No more airport departures, no more tears at the terminal. Only hello."
  },
  {
    day: 16,
    date: "July 17",
    title: "An Ocean of Love",
    text: "We crossed an ocean of time and space to get here. My love for you has grown deeper, wider, and more resilient than ever before."
  },
  {
    day: 17,
    date: "July 18",
    title: "Halfway There!",
    text: "We are officially deep into the final month. The days are flying by now. Can you feel the excitement? I certainly can!"
  },
  {
    day: 18,
    date: "July 19",
    title: "Whispers in the Dark",
    text: "No more sleeping with my phone next to my pillow just to feel like you're close. Soon, you will be right there, breathing softly beside me."
  },
  {
    day: 19,
    date: "July 20",
    title: "A Canvas of Dreams",
    text: "We have painted so many dreams of what we will do when we meet. In just two weeks, we start turning those dreams into our daily reality."
  },
  {
    day: 20,
    date: "July 21",
    title: "Two Weeks Left",
    text: "Exactly two weeks. Fourteen days. The countdown is reaching single digits of weeks. I am packing my bags and packing all my love for you."
  },
  {
    day: 21,
    date: "July 22",
    title: "The Sweetest Anticipation",
    text: "They say anticipation makes the reward sweeter. After 36 months of waiting, our reunion is going to be the sweetest thing the universe has ever witnessed."
  },
  {
    day: 22,
    date: "July 23",
    title: "A Flame Unbroken",
    text: "Many relationships falter under the weight of distance. Ours flourished. We watered it with trust, communication, and endless love. I'm so proud of us."
  },
  {
    day: 23,
    date: "July 24",
    title: "The Sound of My Name",
    text: "I can't wait to hear you say my name in person. Not filtered through a microphone, but standing right in front of me. It's my favorite sound."
  },
  {
    day: 24,
    date: "July 25",
    title: "10 Days to Go",
    text: "Ten days! We have officially hit the single-digit countdown starting tomorrow. The finish line is in sight, and I am running towards it."
  },
  {
    day: 25,
    date: "July 26",
    title: "Nine Days of Wonder",
    text: "Every day from here on feels like a spark of magic. Nine more sleeps until I don't have to sleep alone anymore."
  },
  {
    day: 26,
    date: "July 27",
    title: "Eight Days of Grace",
    text: "Eight days left. The nervous excitement is real! I find myself smiling at random times during the day just thinking of you."
  },
  {
    day: 27,
    date: "July 28",
    title: "One Week Left",
    text: "Exactly seven days. One week from today, my arms will be wrapped around you. I will hold you so tight and never want to let go."
  },
  {
    day: 28,
    date: "July 29",
    title: "Six Days of Hope",
    text: "Six days. The countdown is shrinking so fast. I'm double-checking everything, making plans, but mostly just dreaming of you."
  },
  {
    day: 29,
    date: "July 30",
    title: "Five Days of Light",
    text: "Five days. Five more sunrises. The distance is crumbling around us, unable to stand against the strength of our love."
  },
  {
    day: 30,
    date: "July 31",
    title: "Four Days of Joy",
    text: "Four days left. July is ending, and our month has arrived. The month of August, the month of US."
  },
  {
    day: 31,
    date: "August 1",
    title: "Three Days Left",
    text: "Three days. The number of years we waited is now the number of days left. The irony is beautiful. We are almost there."
  },
  {
    day: 32,
    date: "August 2",
    title: "Two Days Left",
    text: "Two days. The excitement is electric. I can barely sleep, but when I do, I only dream of hugging you. See you soon!"
  },
  {
    day: 33,
    date: "August 3",
    title: "The Final Sleep",
    text: "One day left. Tonight is the very last night we sleep apart. Tomorrow, the waiting ends. Tomorrow, our new chapter begins. Sleep well, my love."
  },
  {
    day: 34,
    date: "August 4",
    title: "The Reunion Day!",
    text: "Today is the day! No more countdowns, no more miles, no more screens. Today, I get to look into your eyes, hold you in my arms, and say: 'I am home.'"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = dailyMessages;
}
