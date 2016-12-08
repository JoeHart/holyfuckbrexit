export const IDEAS_LIST = [
  {
    text: 'LET’S GET THIS PARTY STARTED',

    buttons: [
      {
        text: 'DON’T RUSH ME, DAMMIT',
        stepsForward: 1
      },
      {
        text: 'I GOTTA CHANNEL THIS RAGE',
        stepsForward: 2
      }
    ]
  },

  {
    text: 'WE FEEL YOU',
    posttext: 'AND IT\'S GONNA BE LIKE THIS FOR AGES, SO YOU\'D BEST PACE YOURSELVES.',
    analyticsTag: 'selfcare',

    buttons: [
      {
        text: 'LOOK AT THESE FUCKING CATS AND CUCUMBERS',
        link: 'https://www.youtube.com/watch?v=cNycdfFEgBc'
      },
      {
        text: 'THANK FUCK FOR BRITISH PEOPLE ON TWITTER',
        link: 'https://www.buzzfeed.com/tomphillips/does-backflip?utm_term=.sajoEoVWk#.wpO0j01bV '
      },
      {
        text: 'AND THANK FUCK FOR FLO AND JOAN',
        link: 'https://www.youtube.com/watch?v=9yv_rl3MYKA&feature=youtu.be'
      },
      {
        text: 'TAKE CARE OF YOUR-FUCKING-SELF',
        link: 'http://eponis.tumblr.com/post/113798088670/everything-is-awful-and-im-not-okay-questions-to '
      },
      {
        text: 'WRITE DOWN YOUR POST-BREXIT LEAST SHIT SCENARIO FEELS',
        link: 'http://diybrexit.38degrees.org.uk/ '
      },
      {
        text: 'REMEMBER LESLIE FUCKING KNOPE HAS YOUR BACK',
        link: 'http://www.vox.com/first-person/2016/11/10/13580582/leslie-knope-donald-trump'
      },
      {
        text: 'OH BUT ONE MORE THING...',
        stepsForward: 4,
        class: 'idea-button--accent'
      }
    ]
  },

  {
    pretext: 'GLAD TO HAVE YOU ON BOARD',
    text: "WHAT'S YOUR BEEF?",

    buttons: [
      {
        text: 'THE MOTHERFUCKING REFUGEE CRISIS',
        topic: 'refugees'
      },
      {
        text: 'EQUALITY FOR OVER HALF THE FUCKING POPULATION',
        topic: 'women'
      },
      {
        text: 'TORY AUSTERITY FUCKING NONSENSE',
        topic: 'austerity'
      },
      {
        text: 'FUCKING RELENTLESS LGBTQ+PHOBIA',
        topic: 'lgbtq'
      },
      {
        text: 'RACIST AND ISLAMOPHOBIC FUCKHEADS',
        topic: 'racism'
      },
      {
        text: 'OUR FUCKING PLANET BECAUSE I DON\'T WANT MY KIDS TO FRY YEAH CHEERS',
        topic: 'environment'
      }
    ]
  },

  {
    pretext: 'FUCK YEAH.',
    text: 'WHAT CAN YOU SPARE?',

    buttons: [
      {
        text: 'MONEY',
        action: 'donate'
      },
      {
        text: 'TIME',
        action: 'volunteer'
      }
    ]
  },

  {
    linkList: true
  },

  {
    text: 'TELL YOUR FUCKING FRIENDS',
    analyticsTag: 'share',
    buttons: [
      {
        text: 'FACEBOOK',
        link: 'https://www.facebook.com/sharer/sharer.php?u=http%3A//www.holyfuckbrexit.co.uk'
      },
      {
        text: 'TWITTER',
        link: 'https://twitter.com/intent/tweet?text=HOLY%20FUCK%20NOW%20WHAT%20&url=http%3A//www.holyfuckbrexit.co.uk/'
      }
    ]

  }

];

export const IDEAS_COUNT = IDEAS_LIST.length;
