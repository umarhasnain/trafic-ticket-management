
const createTrafficViolation = ({
slug,
title,
image,
shortDescription,
}) => ({
slug,
title,
image,
shortDescription,

overview: `${title} is a traffic violation that may result in citations, fines, points on a driving record, and increased insurance premiums. Understanding your legal options may help reduce long-term consequences.`,

penalties: [
"Traffic fines",
"Points on driving record",
"Higher insurance premiums",
"Possible court appearance",
],

defenses: [
"Insufficient evidence",
"Officer observation error",
"Documentation issues",
"Special circumstances",
],

faq: [
{
question: `Can I contest a ${title} ticket?`,
answer:
"Depending on the facts and evidence, legal options may be available to challenge the citation.",
},
{
question: "Will this affect my insurance?",
answer:
"Insurance providers may consider moving violations when determining premiums.",
},
],
});

export const trafficInfractions = [
{
slug: "careless-driving",
title: "Careless Driving",
image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
shortDescription:
"Careless driving citations may result in fines, points and insurance increases.",
},

{
slug: "child-restraint",
title: "Child Restraint",
image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
shortDescription:
"Violations involving child restraint systems can carry penalties and fines.",
},

{
slug: "commercial-vehicle-securing-load",
title: "Commercial Vehicle - Securing Load",
image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
shortDescription:
"Improperly secured loads can create serious road hazards and citations.",
},

{
slug: "driving-in-opposite-direction",
title: "Driving In Opposite Direction",
image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
shortDescription:
"Driving against traffic flow may lead to penalties and safety concerns.",
},

{
slug: "wrong-way-one-way-street",
title: "Wrong Way On One Way Street",
image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
shortDescription:
"Wrong-way driving violations can result in tickets and points.",
},

{
slug: "driving-while-license-suspended-unknowingly",
title: "Driving While License Suspended Unknowingly",
image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
shortDescription:
"Driving without knowledge of a suspension may still lead to penalties.",
},

{
slug: "driving-without-lights",
title: "Driving Without Lights",
image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
shortDescription:
"Improper use of vehicle lights can result in traffic citations.",
},

{
slug: "expired-driver-license-less-than-6-months",
title: "Expired Driver License (6 Months Or Less)",
image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
shortDescription:
"Expired licenses may result in fines and legal consequences.",
},

{
slug: "expired-registration-less-than-6-months",
title: "Expired Registration (6 Months Or Less)",
image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
shortDescription:
"Driving with expired registration can result in citations and penalties.",
},

{
slug: "failure-to-change-address",
title: "Failure To Change Address",
image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
shortDescription:
"Drivers are required to keep address information updated.",
},

{
slug: "failure-to-display-driver-license",
title: "Failure To Display Driver License",
image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
shortDescription:
"Failure to present a valid driver's license can result in citations.",
},

{
slug: "failure-to-maintain-single-lane",
title: "Failure To Maintain Single Lane",
image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
shortDescription:
"Lane maintenance violations may lead to tickets and points.",
},

{
slug: "failure-to-move-over",
title: "Failure To Move Over",
image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
shortDescription:
"Failure to move over for emergency vehicles may result in penalties.",
},

{
slug: "failure-to-provide-insurance",
title: "Failure To Provide Insurance",
image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
shortDescription:
"Proof of insurance is required during traffic stops.",
},

{
slug: "failure-to-stop-at-stop-sign",
title: "Failure To Stop At Stop Sign",
image: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e",
shortDescription:
"Stop sign violations may impact driving records and insurance rates.",
},

{
slug: "failure-to-yield-right-of-way",
title: "Failure To Yield Right Of Way",
image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
shortDescription:
"Failure to yield can cause accidents and result in citations.",
},

{
slug: "following-too-close",
title: "Following Too Close",
image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
shortDescription:
"Tailgating violations may lead to tickets and liability concerns.",
},

{
slug: "improper-lane-change",
title: "Improper Lane Change",
image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
shortDescription:
"Improper lane changes can result in citations and accidents.",
},

{
slug: "red-light-violation",
title: "Red Light Violation",
image: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e",
shortDescription:
"Red light violations may affect your record and insurance.",
},

{
slug: "seat-belt",
title: "Seat Belt",
image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
shortDescription:
"Seat belt violations can lead to citations and penalties.",
},

{
slug: "speeding",
title: "Speeding",
image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
shortDescription:
"Speeding tickets may increase insurance costs and add points.",
},
].map(createTrafficViolation);


//   {
//     slug: "careless-driving",
//     title: "Careless Driving",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//     shortDescription:
//       "Careless driving citations may result in fines, points and insurance increases.",
//   },

//   {
//     slug: "child-restraint",
//     title: "Child Restraint",
//     image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
//     shortDescription:
//       "Violations involving child restraint systems can carry penalties and fines.",
//   },

//   {
//     slug: "commercial-vehicle-securing-load",
//     title: "Commercial Vehicle - Securing Load",
//     image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
//     shortDescription:
//       "Improperly secured loads can create serious road hazards and citations.",
//   },

//   {
//     slug: "driving-in-opposite-direction",
//     title: "Driving In Opposite Direction",
//     image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
//     shortDescription:
//       "Driving against traffic flow may lead to penalties and safety concerns.",
//   },

//   {
//     slug: "wrong-way-one-way-street",
//     title: "Wrong Way On One Way Street",
//     image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
//     shortDescription:
//       "Wrong-way driving violations can result in tickets and points.",
//   },

//   {
//     slug: "driving-while-license-suspended-unknowingly",
//     title: "Driving While License Suspended Unknowingly",
//     image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
//     shortDescription:
//       "Driving without knowledge of a suspension may still lead to penalties.",
//   },

//   {
//     slug: "driving-without-lights",
//     title: "Driving Without Lights",
//     image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//     shortDescription:
//       "Improper use of vehicle lights can result in traffic citations.",
//   },

//   {
//     slug: "expired-driver-license-less-than-6-months",
//     title: "Expired Driver License (6 Months Or Less)",
//     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
//     shortDescription:
//       "Expired licenses may result in fines and legal consequences.",
//   },

//   {
//     slug: "expired-registration-less-than-6-months",
//     title: "Expired Registration (6 Months Or Less)",
//     image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
//     shortDescription:
//       "Driving with expired registration can result in citations and penalties.",
//   },

//   {
//     slug: "failure-to-change-address",
//     title: "Failure To Change Address",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
//     shortDescription:
//       "Drivers are required to keep address information updated.",
//   },

//   {
//     slug: "failure-to-display-driver-license",
//     title: "Failure To Display Driver License",
//     image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
//     shortDescription:
//       "Failure to present a valid driver's license can result in citations.",
//   },

//   {
//     slug: "failure-to-maintain-single-lane",
//     title: "Failure To Maintain Single Lane",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//     shortDescription:
//       "Lane maintenance violations may lead to tickets and points.",
//   },

//   {
//     slug: "failure-to-move-over",
//     title: "Failure To Move Over",
//     image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
//     shortDescription:
//       "Failure to move over for emergency vehicles may result in penalties.",
//   },

//   {
//     slug: "failure-to-provide-insurance",
//     title: "Failure To Provide Insurance",
//     image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
//     shortDescription:
//       "Proof of insurance is required during traffic stops.",
//   },

//   {
//     slug: "failure-to-stop-at-stop-sign",
//     title: "Failure To Stop At Stop Sign",
//     image: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e",
//     shortDescription:
//       "Stop sign violations may impact driving records and insurance rates.",
//   },

//   {
//     slug: "failure-to-yield-right-of-way",
//     title: "Failure To Yield Right Of Way",
//     image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
//     shortDescription:
//       "Failure to yield can cause accidents and result in citations.",
//   },

//   {
//     slug: "following-too-close",
//     title: "Following Too Close",
//     image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
//     shortDescription:
//       "Tailgating violations may lead to tickets and liability concerns.",
//   },

//   {
//     slug: "improper-lane-change",
//     title: "Improper Lane Change",
//     image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
//     shortDescription:
//       "Improper lane changes can result in citations and accidents.",
//   },

//   {
//     slug: "red-light-violation",
//     title: "Red Light Violation",
//     image: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e",
//     shortDescription:
//       "Red light violations may affect your record and insurance.",
//   },

//   {
//     slug: "seat-belt",
//     title: "Seat Belt",
//     image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
//     shortDescription:
//       "Seat belt violations can lead to citations and penalties.",
//   },

//   {
//     slug: "speeding",
//     title: "Speeding",
//     image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
//     shortDescription:
//       "Speeding tickets may increase insurance costs and add points.",
//   },
// ];



export const criminalViolations = [
  {
    slug: "dui",
    title: "DUI",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    shortDescription:
      "DUI charges require immediate attorney review.",

    overview:
      "Driving Under the Influence (DUI) is a serious criminal traffic offense that may result in substantial penalties, license suspension, and long-term consequences.",

    penalties: [
      "Criminal fines",
      "License suspension",
      "Probation",
      "Possible jail time"
    ],

    defenses: [
      "Improper traffic stop",
      "Breathalyzer inaccuracies",
      "Field sobriety test issues",
      "Procedural violations"
    ],

    faq: [
      {
        question: "Can DUI charges be challenged?",
        answer:
          "Yes. Legal defenses may be available depending on the facts and evidence."
      }
    ]
  },

  {
    slug: "driving-while-license-suspended-knowingly",
    title: "Driving While License Suspended Knowingly",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    shortDescription:
      "Knowingly driving with a suspended license may result in criminal penalties.",

    overview:
      "Operating a vehicle while knowingly aware of a license suspension can lead to criminal charges and enhanced penalties.",

    penalties: [
      "Criminal citation",
      "Additional suspension period",
      "Court fines",
      "Possible incarceration"
    ],

    defenses: [
      "Lack of notice",
      "Administrative errors",
      "Identity issues",
      "Insufficient evidence"
    ],

    faq: [
      {
        question: "Does knowledge of suspension matter?",
        answer:
          "In many jurisdictions, proving knowledge of the suspension is a key element."
      }
    ]
  },

  {
    slug: "expired-driver-license-more-than-6-months",
    title: "Expired Driver License (6+ Months)",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    shortDescription:
      "Long-expired licenses can result in criminal traffic charges.",

    overview:
      "Driving with a significantly expired driver's license may be treated as a criminal traffic offense.",

    penalties: [
      "Criminal traffic citation",
      "Court costs",
      "Additional licensing requirements",
      "Potential probation"
    ],

    defenses: [
      "Administrative delays",
      "Documentation issues",
      "Clerical errors",
      "Valid renewal attempts"
    ],

    faq: [
      {
        question: "Can expired licenses lead to criminal charges?",
        answer:
          "Extended expiration periods may trigger more serious legal consequences."
      }
    ]
  },

  {
    slug: "expired-registration-more-than-6-months",
    title: "Expired Registration (6+ Months)",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
    shortDescription:
      "Extended registration violations may carry serious penalties.",

    overview:
      "Driving a vehicle with significantly expired registration can result in criminal traffic allegations.",

    penalties: [
      "Court fines",
      "Vehicle-related penalties",
      "Administrative sanctions",
      "Possible court appearance"
    ],

    defenses: [
      "Registration processing delay",
      "Clerical errors",
      "Ownership transfer issues",
      "Documentation proof"
    ],

    faq: [
      {
        question: "Can registration issues be corrected?",
        answer:
          "Depending on the circumstances, proof of correction may help resolve the matter."
      }
    ]
  },

  {
    slug: "fleeing-and-eluding",
    title: "Fleeing And Eluding",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
    shortDescription:
      "Fleeing law enforcement can result in severe criminal penalties.",

    overview:
      "Fleeing and eluding involves intentionally failing to stop for law enforcement after receiving a lawful signal.",

    penalties: [
      "Felony charges",
      "Heavy fines",
      "License suspension",
      "Possible imprisonment"
    ],

    defenses: [
      "Lack of intent",
      "Officer identification issues",
      "Emergency circumstances",
      "Insufficient evidence"
    ],

    faq: [
      {
        question: "Is fleeing and eluding a felony?",
        answer:
          "In many cases it may be prosecuted as a felony offense."
      }
    ]
  },

  {
    slug: "leaving-children-unattended",
    title: "Leaving Children Unattended",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
    shortDescription:
      "Leaving children unattended in a vehicle may lead to criminal charges.",

    overview:
      "Leaving children unattended in a vehicle may expose them to danger and result in criminal allegations.",

    penalties: [
      "Criminal fines",
      "Child welfare investigation",
      "Court supervision",
      "Possible criminal record"
    ],

    defenses: [
      "Insufficient evidence",
      "Lack of danger",
      "Emergency circumstances",
      "Factual disputes"
    ],

    faq: [
      {
        question: "Can this result in criminal charges?",
        answer:
          "Yes. Depending on the circumstances, criminal penalties may apply."
      }
    ]
  },

  {
    slug: "leaving-scene-of-accident",
    title: "Leaving The Scene Of An Accident",
    image: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e",
    shortDescription:
      "Leaving an accident scene may lead to criminal consequences.",

    overview:
      "Drivers involved in an accident are generally required to stop and exchange information as required by law.",

    penalties: [
      "Criminal charges",
      "License suspension",
      "Fines",
      "Potential incarceration"
    ],

    defenses: [
      "Unaware of collision",
      "Mistaken identity",
      "Insufficient evidence",
      "Emergency situation"
    ],

    faq: [
      {
        question: "Is leaving an accident scene serious?",
        answer:
          "Yes. It may result in substantial criminal and administrative penalties."
      }
    ]
  },

  {
    slug: "no-valid-driver-license",
    title: "No Valid Driver License",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    shortDescription:
      "Driving without a valid license may result in criminal charges.",

    overview:
      "Operating a vehicle without possessing a valid driver's license can lead to criminal traffic proceedings.",

    penalties: [
      "Court fines",
      "Criminal citation",
      "Additional licensing requirements",
      "Probation"
    ],

    defenses: [
      "Licensing records error",
      "Recently issued license",
      "Identity issues",
      "Administrative mistakes"
    ],

    faq: [
      {
        question: "Can I be arrested for driving without a license?",
        answer:
          "Depending on local laws and circumstances, criminal penalties may apply."
      }
    ]
  },

  {
    slug: "racing",
    title: "Racing",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    shortDescription:
      "Street racing offenses can carry significant legal consequences.",

    overview:
      "Street racing allegations involve operating a vehicle in a speed contest or competitive driving event.",

    penalties: [
      "Criminal charges",
      "Vehicle impoundment",
      "Heavy fines",
      "License suspension"
    ],

    defenses: [
      "Lack of evidence",
      "Misidentification",
      "Officer observation issues",
      "No racing activity occurred"
    ],

    faq: [
      {
        question: "Can my vehicle be impounded?",
        answer:
          "In some cases, racing allegations may result in vehicle impoundment."
      }
    ]
  },

  {
    slug: "reckless-driving",
    title: "Reckless Driving",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
    shortDescription:
      "Reckless driving allegations should be reviewed immediately.",

    overview:
      "Reckless driving generally involves operating a vehicle with willful disregard for safety.",

    penalties: [
      "Criminal fines",
      "License suspension",
      "Probation",
      "Possible jail sentence"
    ],

    defenses: [
      "Insufficient evidence",
      "Officer error",
      "Road conditions",
      "Emergency circumstances"
    ],

    faq: [
      {
        question: "Is reckless driving a criminal offense?",
        answer:
          "Many jurisdictions classify reckless driving as a criminal traffic offense."
      }
    ]
  },

  {
    slug: "unlawful-use-of-insurance-card",
    title: "Unlawful Use Of Insurance Card",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    shortDescription:
      "Fraudulent use of insurance documents may result in criminal charges.",

    overview:
      "Presenting altered, forged, or fraudulent insurance documentation can result in serious criminal allegations.",

    penalties: [
      "Fraud-related charges",
      "Court fines",
      "Probation",
      "Possible incarceration"
    ],

    defenses: [
      "Lack of intent",
      "Documentation errors",
      "Mistaken identity",
      "Insufficient proof"
    ],

    faq: [
      {
        question: "Is insurance card fraud a criminal matter?",
        answer:
          "Yes. Fraud-related offenses are typically treated seriously by courts."
      }
    ]
  },

  {
    slug: "unlawful-use-of-license",
    title: "Unlawful Use Of License",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    shortDescription:
      "Improper use of a driver's license may carry criminal penalties.",

    overview:
      "Using, altering, lending, or misrepresenting a driver's license can lead to criminal prosecution.",

    penalties: [
      "Criminal charges",
      "License suspension",
      "Court fines",
      "Permanent record implications"
    ],

    defenses: [
      "No fraudulent intent",
      "Identity confusion",
      "Insufficient evidence",
      "Clerical mistakes"
    ],

    faq: [
      {
        question: "Can unlawful license use affect future licensing?",
        answer:
          "Yes. Certain convictions may impact future driving privileges."
      }
    ]
  }
];

//   {
//     slug: "dui",
//     title: "DUI",
//     image: "/images/violations/dui.webp",
//     shortDescription:
//       "DUI charges require immediate attorney review.",
//   },

//   {
//     slug: "driving-while-license-suspended-knowingly",
//     title: "Driving While License Suspended Knowingly",
//     image: "/images/violations/license-suspended-knowingly.webp",
//     shortDescription:
//       "Knowingly driving with a suspended license may result in criminal penalties.",
//   },

//   {
//     slug: "expired-driver-license-more-than-6-months",
//     title: "Expired Driver License (6+ Months)",
//     image: "/images/violations/expired-license-criminal.webp",
//     shortDescription:
//       "Long-expired licenses can result in criminal traffic charges.",
//   },

//   {
//     slug: "expired-registration-more-than-6-months",
//     title: "Expired Registration (6+ Months)",
//     image: "/images/violations/expired-registration-criminal.webp",
//     shortDescription:
//       "Extended registration violations may carry serious penalties.",
//   },

//   {
//     slug: "fleeing-and-eluding",
//     title: "Fleeing And Eluding",
//     image: "/images/violations/fleeing.webp",
//     shortDescription:
//       "Fleeing law enforcement can result in severe criminal penalties.",
//   },

//   {
//     slug: "leaving-children-unattended",
//     title: "Leaving Children Unattended",
//     image: "/images/violations/children-unattended.webp",
//     shortDescription:
//       "Leaving children unattended in a vehicle may lead to criminal charges.",
//   },

//   {
//     slug: "leaving-scene-of-accident",
//     title: "Leaving The Scene Of An Accident",
//     image: "/images/violations/leave-scene.webp",
//     shortDescription:
//       "Leaving an accident scene may lead to criminal consequences.",
//   },

//   {
//     slug: "no-valid-driver-license",
//     title: "No Valid Driver License",
//     image: "/images/violations/no-valid-license.webp",
//     shortDescription:
//       "Driving without a valid license may result in criminal charges.",
//   },

//   {
//     slug: "racing",
//     title: "Racing",
//     image: "/images/violations/racing.webp",
//     shortDescription:
//       "Street racing offenses can carry significant legal consequences.",
//   },

//   {
//     slug: "reckless-driving",
//     title: "Reckless Driving",
//     image: "/images/violations/reckless-driving.webp",
//     shortDescription:
//       "Reckless driving allegations should be reviewed immediately.",
//   },

//   {
//     slug: "unlawful-use-of-insurance-card",
//     title: "Unlawful Use Of Insurance Card",
//     image: "/images/violations/insurance-card.webp",
//     shortDescription:
//       "Fraudulent use of insurance documents may result in criminal charges.",
//   },

//   {
//     slug: "unlawful-use-of-license",
//     title: "Unlawful Use Of License",
//     image: "/images/violations/license-fraud.webp",
//     shortDescription:
//       "Improper use of a driver's license may carry criminal penalties.",
//   },
// ];