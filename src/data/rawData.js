const state = {
  mediaAccounts: [
    {
      name: "Facebook",
      username: "newenglandhomerestoration",
      url: "https://www.facebook.com/New-England-Home-Restoration-1116943771718268/"
    },
    {
      name: "Instagram",
      username: "newenglandhomerestoration",
      url: "https://www.instagram.com/newenglandhomerestoration/"
    }
  ],
  about: {
    owner: {
      name: "Andre LeBlanc",
      background: "The owner, Andre LeBlanc, began developing his passion for carpentry and construction at age 14. He was employed every summer during high school for a licensed builder, honing his skill set in carpentry. He went on to receive a degree in Construction Management. After graduating college, Andre acquired his real estate license and spent a few years working in the industry so that he could develop a full understanding of the residential housing market.\n He enjoyed helping individuals with the process of purchasing or selling their homes. He knew he would be working in construction, and he continued to build the knowledge and skills to succeed from all angles. For several years, he worked as a lead carpenter for a company that focused on timber framing and historical restoration. In New England, a large percentage of homes, are built pre-1900, and this niche specialty is an integral part of what makes Andre’s background unique. Growing up in Vermont, on a family-run farm, Andre naturally wanted to get involved and understand how older houses and barns were constructed at that time. He enjoys working with reclaimed lumber and timber framed houses or barns when the opportunity arises. Andre has combined his unique experience, passion, and artistry together as one to form New England Home Restoration.",
      assetId: "40183215360"
    },
    company: {
      name: "New England Home Restoration",
      background: "Whether an entire home renovation, a kitchen or bath remodel, or adding a beautiful new addition to your residence, our clients choose New England Home Restoration for our expert craftsmanship and unrivaled customer service. Integrity is at our core, and we respect both our client’s time and expectations. We offer a truly custom approach, where we take the time to carefully assess our client's goals, and provide experienced feedback. Our team always prioritizes building trust, which is why most of our clients stay with us for a lifetime.\n New England Home Restoration combines a deep commitment to customer intimacy and collaboration throughout all phases of the relationship. With a background in hands-on carpentry and years of experience in construction management, owner Andre LeBlanc prides himself and his team on quality craftsmanship and is an expert in understanding the many steps required to complete a project."
    },
    services: {
      title: "Our Work",
      description: "Transforming an undecorated room into a stylish space, this is what we are specializing in. We can change every old, teary space in your house into a lavish sanctuary. We can guide you through the design process and help ensure the vision of your new space is achieved. Every room in your house will be made to feel like a comfortable, safe haven.",
      categories: [
        {
          name: "Decks",
          assetId: "28119002968"
        },
        {
          name: "Basements",
          assetId: "28119003028"
        },
        {
          name: "Kitchens",
          assetId: "40183781420"
        },
        {
          assetId: "28119002998",
          name: 'Bathrooms'
        }
      ]
    },
    materials: {
      title: "Trusted Brands",
      description: "We use only the highest quality materials in our projects",
      brands: [
        {
          name: "BuildClean Dust Control HEPA",
          assetId: "40183636900"
        },
        {
          name: "Edgewood Brand",
          assetId: "27121196847"
        },
        {
          name: "Kohler Fixtures",
          assetId: "40183636800"
        },
        {
          name: "Wedi Remodeling Brand",
          assetId: "27121196777"
        }
      ]
    },
    reviews: [
      {
        id: 123,
        date: '04/10/2018',
        customerName: 'Javier',
        stars: 5,
        comment: 'He did high quality work on all items, and he made sure we did a walk-through to see all the finished work to ensure customer satisfaction.'
      },
      {
        id: 124,
        date: 'A month ago',
        customerName: 'Derek Libby',
        stars: 5,
        comment: 'Perhaps even more than the end result we appreciate the fact that he came back to clean up after and fix a major leak in our foundation left by our well contractor.'
      },
      {
        id: 125,
        date: 'A year ago',
        customerName: 'Amber Moore',
        stars: 5,
        comment: 'Andre built a bench over a radiator and installed crown moulding in a closet. Reliable, quick response to my questions and project completed quickly.'
      },
      {
        id: 126,
        date: '11 Months ago',
        customerName: 'Priscilla Brown',
        stars: 5,
        comment: 'Andre LeBlanc was a pleasure to work with as a contractor, and did an outstanding job from start to finish on completing the repair jobs and work that we agreed upon at my home. He did high quality work.'
      }
    ]
  },
  contact: {
    phoneNumber: "781-800-0121",
    email: "Office@NewEnglandHomeRestoration.com",
    businessHours: "Monday to Friday (7AM to 5PM)",
    areas_served: ["Acton", "Arlington", "Bedford", "Belmont", "Bolton", "Boston", "Boxborough", "Brookline", "Burlington", "Brookline", "Cambridge", "Dedham", "Framingham", "Harvard", "Hudson", "Lexington", "Littleton", "Lynnfield", "Malden", "Malborough", "Maynard", "Medford", "Melrose", "Milton", "Nahant", "Natick", "Needham", "Newton", "Norfolk", "Northborough", "North Reading", "Norton", "Norwood", "Reading", "Salem", "Somerville", "Stoneham", "Stow", "Wakefield", "Waltham", "Watertown", "Westborough", "Wellesley", "Weymouth", "Wilmington", "Winchester", "Woburn"],
    licenses: [
      {
       name: "Home Improvement Contractor (MA)",
       licenseId: 185354,
      },
      {
        name: "Massachusetts Dept of Public Safety License",
        licenseId: "CSFA-106295"
      }
    ],
    accreditation: [
      {
        name: "NARI Accredited",
        url: "https://www.nari.org/arc/"
      },
      {
        name: "Better Business Bureau",
        url: "https://www.bbb.org/council/for-businesses/about-bbb-accreditation/"
      }
    ],
    insurances: ["Mass. Workesr' Compensation", "General Liability Insurance"],
    payments: ["Cash", "Credit/Debit", "Check", "Financing"]
  },
  projectManagement: {
    title: "Project Management",
    description: "At New England Home Restoration, our online system gives you easy access to everything about your project. You can make selections, see progress, browse photos, review financial decisions, send messages, and more. All from any computer, tablet, or smartphone.",
    benefits: [
      'Make Selections Easy',
      'Single-Entry Estimating',
      'Streamline Bidding',
      'Effortless Proposals',
      'Track Change Orders & Expenses',
      'Improve Client Communication',
      'Manage & Track Leads',
      'Share Files & Photos',
      'Budget & Forecast Project Costs',
      'Track Jobsite Activity & Progress'
    ],
    video_src: "assets/pm_video.png"
  },
  gallery: {
    title: "Showcasing our work",
    slideshow: {
      activeAlbumId: "72157665060525757",
      albumsToShow: ["72157665060259447", "72157667100192078", "72157665060525757", "72157675303391157", "72157677461957488"]
    },
    showcase: {
      albumId: "72157668764515948"
    },
    albums: [
      {
        name: "Showcase Work",
        id: "72157668764515948"
      },
      {
        name: "Bathrooms",
        id: "72157665060259447"
      },
      {
        name: "Basements",
        id: "72157667100192078"
      },
      {
        name: "Kitchens",
        id: "72157665060525757"
      },
      {
        name: "Wood Work",
        id: "72157675303391157"
        // id: "72157694152735684"
      },
      {
        name: "Exterior",
        id: "72157677461957488"
        // id: "72157665060914627"
      }
    ]
  },
  financing: {
    title: "Financing Available",
    description: "We offer financing through GreenSky!"
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "At New England Home Restoration. We take the time to explain the details about the services you request. We answer all of your questions politely and explain our estimates for your home improvement project to your satisfaction. We believe an educated client is our best customer so we’ve provided this page of Common Questions for your benefit.",
    faqs: [
      {
        question: "Why are some contractors so much less expensive than others?",
        answer: "Not all contractors are created equal. Many people pose as \”contractors” who are actually unlicensed, uninsured, and/or use illegal labor. In addition, these \"contractors\" tend to use subpar materials and poor craftsmanship. If you are hiring a contractor, check their license, their insurance, and call their references (we are more than happy to supply these to you). Protect yourself. Hire a licensed, bonded, and insured contractor.\n More often than not, you get what you pay for. A good contractor provides quality input when you meet to discuss your plans. The good ones will help you realize your dreams. The bad ones will merely take down your ideas, itemize the list, add prices and ask for your signature.. and your cash. What you want is the contractor who does a thorough inspection, demonstrates knowledge of what is needed and what the options are. Never assume that all contractors know the latest building technologies, products and code requirements. You want the industry leader not the follower. At New England Home Restoration we pride ourselves on staying up to date on new products, technologies, and techniques.",
        id: 123
      },
      {
        question: "How much will my home improvement cost?",
        answer: "Projects vary widely depending on your needs and budget. New England Home Restoration’s owner, Andre LeBlanc, will visit with you to better understand your home improvement needs. At New England Home Restorations we do more than give you a quote. We provide you with the information you need to make the right decisions for your home. We take time to explain the details regarding your project’s design options and cost. We answer all of your questions and explain the estimates for your home improvement project. There is no obligation.",
        id: 124
      },
      {
        question: "Will there be a big mess during our project?",
        answer: "We respect your property by using all means to keep your home as clean and dust free as possible; these include drop cloths, furniture covers, ram boards, and BuildClean HEPA air scrubber. The BuildClean unit eliminates 90% of airborne dust and the air that it does clean is expelled outside and is not re-circulated.",
        id: 125
      },
      {
        question: "How long will my project take?",
        answer: "Once we have your order in hand, we begin production planning. Andre and the designers involved will first schedule a visit to your home to confirm the measurements and quantities needed for ordering materials. Work specifications for each trade skill are broken down into separate work orders. Purchase orders are prepared and sent to each vendor supplying the materials. Once the work is started on your home, it is our company’s policy to proceed to completion. It is important to each homeowner to understand that our concern is much the same as yours; the successful completion of your project in a timely and clean manner.",
        id: 126
      },
      {
        question: "When will the project be completed?",
        answer: "Our company provides clients with a schedule before construction begins which includes a project completion deadline. Changes made by the Owner, unforeseen circumstances (such as weather delays or concealed conditions) may add time to the overall schedule; however, the schedule will be updated and redistributed when a delay occurs so that all parties are aware of the changes. The project is completed with the final walk through with Andre at which time the final payment is expected.",
        id: 127
      },
      {
        question: "What products do you like to use the most in kitchens and bathrooms?",
        answer: "At New England Home Restorations, we really enjoy using Wedi. It is a family owned company that offers waterproof and directly tileable building panels. It is lightweight, easy to work with and best of all, creates zero dust, unlike other products available. Andre is a certified Wedi installer and takes pleasure in the opportunity to discuss how Wedi products can be used in kitchens and bathrooms.",
        id: 128
      }
    ]
  },
  pages: [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Contact',
      url: '/contact'
    },
    {
      name: 'FAQ',
      url: '/faq'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Project Management',
      url: '/project-management'
    },
    {
      name: 'Gallery',
      url: '/gallery'
    },
    {
      name: 'Financing',
      url: '/financing'
    }
  ],
  flickrAssets: [
    {
      name: "Andrew Photo",
      id: "40183215360"
    },
    {
      name: "BuildClean Dust Control HEPA",
      id: "40183636900"
    },
    {
      name: "Edgewood Brand",
      id: "27121196847"
    },
    {
      name: "Kohler Fixtures",
      id: "40183636800"
    },
    {
      name: "Wedi Remodeling Brand",
      id: "27121196777"
    },
    {
      name: "Decks",
      id: "28119002968"
    },
    {
      name: "Basements",
      id: "28119003028"
    },
    {
      name: "Kitchens",
      id: "40183781420"
    },
    {
      name: 'Bathrooms',
      id: "28119002998"
    },
    {
      name: "Failed to load",
      id: "41946547262"
    }
  ]
};
export default state;
