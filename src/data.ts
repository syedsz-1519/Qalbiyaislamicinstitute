import { Course } from './types';
import cinematicQuranRehal from './assets/images/cinematic_quran_rehal_1785071840478.jpg';
import cinematicWomenStudy from './assets/images/cinematic_women_study_1785071864678.jpg';
import cinematicKidsTarbiyah from './assets/images/cinematic_kids_tarbiyah_1785071899107.jpg';
import onlineLearningSetup from './assets/images/online_learning_setup_1784025332504.jpg';
import heroLearningSetup from './assets/images/hero_learning_setup_1784226560154.jpg';
import onlineLearningTablet from './assets/images/online_learning_tablet_1784039716228.jpg';
import quranRehalWindow from './assets/images/quran_rehal_arched_window_1784016809949.jpg';
import sacredLearningApproach from './assets/images/sacred_learning_approach_1784016791330.jpg';
import womensOnlineStudy from './assets/images/womens_online_study_1784048690815.jpg';
import tabletOnlineClass from './assets/images/tablet_online_class_1784047721074.jpg';
import kidsOnlineStudy from './assets/images/kids_online_study_1784048706942.jpg';

export const coursesData: Course[] = [
  {
    slug: 'seerahCourse',
    category: 'women',
    title: 'Seerah of Prophet ﷺ Course',
    badge: 'Popular · Joined by 50+ students',
    hook: 'Let his character reshape yours.',
    sub: 'A deep, reflective journey into the beautiful character, mercy, and daily life of the Prophet ﷺ to inspire your personal spiritual transformation.',
    duration: '2 Months',
    price: 'Rs. 299',
    priceDetail: 'full course',
    syllabus: [
      'Introduction to Seerah and why we study it',
      'Pre Islamic Arabia and his childhood',
      'The Year of Sadness and Mi\'raj lessons',
      'Character traits of the Prophet ﷺ as a husband, father, and leader',
      'Developing deep love and connection with the Prophet ﷺ'
    ],
    whatYouGet: [
      '📄 Structured lesson summaries & reflection worksheets',
      '💬 Weekly live Q&A sessions',
      '👥 Private community support group',
      '🎓 Course Completion Certificate'
    ],
    outcome: 'By the end of this course, you will have a deep, heart centered understanding of the Prophet\'s life and character, with practical habits to emulate his beautiful example in your modern life.',
    courseDetails: {
      'Format': 'Group Interactive Sessions',
      'Platform': 'Google Meet',
      'Duration': '2 Months',
      'Classes': '2 classes/week, 1hr each',
      'Fee': 'Rs. 299/month or Rs. 500 one time'
    },
    teacherNote: 'Studying the Seerah is not about learning historical dates; it\'s about letting the light of his character illuminate your heart.',
    whoThisIsFor: [
      'Sisters seeking a heart centered reconnection with the Prophet ﷺ',
      'Sisters looking to improve their character and akhlaq',
      'Beginners and intermediate students alike'
    ],
    faqs: [
      {
        q: 'Is any prior knowledge required?',
        a: 'No, this course is open to all sisters regardless of their level of knowledge.'
      },
      {
        q: 'Are classes live or recorded?',
        a: 'Classes are live on Google Meet, and recorded sessions are provided for revision.'
      },
      {
        q: 'What are the class timings?',
        a: 'Class timings are shared upon registration, with multiple batches designed to fit different schedules.'
      }
    ],
    image: womensOnlineStudy
  },
  {
    slug: 'tajweed1on1',
    category: 'women',
    title: 'Tajweed 1 on 1 Classes',
    badge: 'Popular',
    hook: 'Every ayah, focused solely on you.',
    sub: 'One on one Tajweed classes designed around your pace, your pronunciation, and your journey to reciting the Qur\'an with confidence and correctness.',
    duration: '5 Months',
    price: 'Rs. 800',
    priceDetail: 'per month',
    syllabus: [
      'Correct Makharij (Arabic articulation points)',
      'Sifaat (Attributes of the letters)',
      'Complete rules of Tajweed (basic to advanced)',
      'Targeted correction of recurring individual pronunciation mistakes',
      'Practical recitation guidance of selected Surahs'
    ],
    whatYouGet: [
      '📓 Personalized notes/PDFs tailored to your progress',
      '📝 Custom personal mistake tracking list',
      '💬 Dedicated WhatsApp support for daily audio corrections',
      '🎓 Course Completion Certificate'
    ],
    outcome: 'By the end of this course, you\'ll recite the Qur\'an fluently, correctly, and with confidence, not guessing, not hesitating, but reciting the way it was meant to be recited.',
    advantages: [
      {
        title: 'Dedicated Time, Just for You',
        description: 'Class timing built entirely around your schedule'
      },
      {
        title: 'Personalized Correction',
        description: 'Every mistake, mispronunciation, and question addressed exclusively for you'
      },
      {
        title: 'Your Pace, Your Way',
        description: 'Move faster or slower, whatever you need'
      },
      {
        title: 'Weekly Progress Tracking',
        description: 'See exactly how you\'re improving, week by week'
      }
    ],
    courseDetails: {
      'Format': '1 on 1 Personalized Session',
      'Platform': 'Google Meet',
      'Duration': '5 Months',
      'Classes': '3 classes/week, 1hr each',
      'Fee': 'Rs. 800/month'
    },
    teacherNote: 'I\'ve seen how much confidence a woman gains once her recitation finally feels right — not rushed, not unsure, just correct. That\'s what I want for you in this class: not just knowledge of the rules, but a recitation you feel proud of.',
    whoThisIsFor: [
      'Sisters starting from scratch who want personalized, gentle guidance',
      'Sisters who have been reciting for years but want to refine long standing pronunciation errors',
      'Anyone looking to develop a slow, correct, beautiful recitation'
    ],
    faqs: [
      {
        q: 'Do I need any prior Tajweed knowledge?',
        a: 'No — the only requirement is that you already know how to read the Qur\'an. This course starts from correcting your foundation and builds from there.'
      },
      {
        q: 'What if I miss a class?',
        a: 'Since this is a 1-on-1 class (not a group class), scheduling is flexible and built around you. If a specific class is missed, the topic planned for that day is simply covered in the next class — nothing is lost.'
      },
      {
        q: 'Is this online or in-person?',
        a: 'Fully online, conducted via Google Meet.'
      },
      {
        q: 'How is the class time decided?',
        a: 'Class timing is set based on your schedule and availability.'
      },
      {
        q: 'Will I get a certificate?',
        a: 'Yes — you\'ll receive a certificate upon completing the course.'
      },
      {
        q: 'Is a trial class available?',
        a: 'Yes — a trial class is available before you commit, so you can experience the teaching style firsthand.'
      }
    ],
    image: onlineLearningTablet
  },
  {
    slug: 'nooraniQaida',
    category: 'women',
    title: 'Noorani Qaida Course',
    badge: 'Popular · Joined by 200+ students',
    hook: 'Where your Qur\'an journey begins.',
    sub: 'Learn the Arabic letters and Noorani Qaida with proper foundational Tajweed rules, the essential first step to reading the Qur\'an with confidence.',
    duration: '2 Months',
    price: 'Rs. 299',
    priceDetail: 'per month',
    syllabus: [
      'Arabic letter recognition and correct pronunciation',
      'Complete Noorani Qaida reading practices',
      'Foundational Tajweed rules (Harakaat, Madd, Tanween)',
      'Gentle correction of common beginner reading mistakes',
      'Basic joint letter formation rules'
    ],
    whatYouGet: [
      '📓 Daily homework shared in the class private group',
      '💬 Instant WhatsApp support for audio recording reviews',
      '📝 Final comprehensive exam (written and oral)',
      '🎓 Course Completion Certificate'
    ],
    outcome: 'By the end of this course, you\'ll take your very first real step into the Qur\'an, reading it, not just recognizing it, with correct articulation of each letter.',
    courseDetails: {
      'Format': 'Group Sessions or 1 on 1 (Student\'s choice)',
      'Platform': 'Google Meet',
      'Duration': '2 Months',
      'Classes': '4 classes/week',
      'Fee': 'Rs. 299/month, or Rs. 500 one time for the full course'
    },
    teacherNote: 'This page must feel especially welcoming and welcoming because we know how much courage it takes for an adult sister to start learning from the beginning.',
    whoThisIsFor: [
      'Absolute beginners with zero prior experience in Arabic reading',
      'Sisters who can read but struggle with letter recognition and foundational pronunciation',
      'Sisters preparing themselves to learn Tajweed rules'
    ],
    faqs: [
      {
        q: 'Is there any prior knowledge required?',
        a: 'Absolutely none. This course is designed specifically for complete beginners starting from the very first letter.'
      },
      {
        q: 'What is the difference between Group and 1 on 1 options?',
        a: 'Group classes allow learning with a supportive circle of sister peers, while 1 on 1 sessions focus entirely on your personal pace and articulation.'
      },
      {
        q: 'Are there exams and homework?',
        a: 'Yes, daily short practice homework is assigned. There is a gentle final oral and written review to ensure your fundamentals are perfectly set.'
      }
    ],
    image: sacredLearningApproach
  },
  {
    slug: 'preDiplomaDeeniyat',
    category: 'women',
    title: 'Pre Diploma in Deeniyat',
    badge: 'Popular',
    hook: 'Your complete foundation in Deen.',
    sub: 'A structured, six month journey covering everything from correcting your recitation to understanding your beliefs, so you don\'t just follow Islam, you understand it, live it, and feel closer to Allah.',
    duration: '6 Months',
    price: 'Rs. 499',
    priceDetail: 'per month',
    syllabus: [
      'Makhraj and Foundational Tajweed',
      'Hifz e Hadith (Memorization and explanation of crucial Hadiths)',
      'Daily Duas and Sunnah (Integrating Prophet\'s practices into routine)',
      'Aqaid (Clarifying fundamental Islamic beliefs and creed)',
      'Akhlaq and Tarbiyah (Character development based on Seerah)',
      'Namaz and Masail (Fiqh of purification and daily prayers)',
      'Asma ul Husna (Diving deep into Allah\'s Beautiful Names)'
    ],
    whatYouGet: [
      '📚 Comprehensive lecture notes for each module',
      '🧠 Weekly reflective quizzes to reinforce understanding',
      '📅 Monthly self assessments and progress reviews',
      '💬 Dedicated direct WhatsApp support line',
      '🎓 Foundation Pre Diploma Certificate'
    ],
    outcome: 'This course builds your foundation in Deen, helping you correct your recitation, understand your beliefs, and practice Islam with clarity in daily life. By the end, you won\'t just follow Islam, you\'ll understand it, live it, and feel closer to Allah.',
    courseDetails: {
      'Format': 'Group Interactive Sessions or Personal (1 on 1)',
      'Platform': 'Google Meet',
      'Duration': '6 Months',
      'Group Fee': 'Rs. 499/month',
      'Personal Fee': 'Rs. 699/month'
    },
    teacherNote: 'This course exists for the woman I once was, someone who wanted to actually understand her deen, not just perform its daily rituals without feeling their spiritual weight.',
    whoThisIsFor: [
      'Sisters tired of learning their deen in scattered fragments and wanting a structured, cohesive path',
      'Sisters wanting to ground their purification, prayers, and beliefs in authentic knowledge',
      'Busy mothers or professionals looking to bring real sacred routine back into their weekly lives'
    ],
    faqs: [
      {
        q: 'Do I need prior Arabic reading skills?',
        a: 'We recommend being able to read basic Arabic script, as we will be reciting daily Duas and short verses, though we support beginners fully.'
      },
      {
        q: 'What is the main difference between the Group and Personal paths?',
        a: 'The Group path provides a beautiful sisterhood environment. The Personal path allows a dedicated teacher to work 1 on 1 with you, adapting the schedule completely to your lifestyle.'
      },
      {
        q: 'Is there an exam at the end?',
        a: 'Yes, we conduct a gentle written and oral assessment at the end of the 6 months to celebrate your growth and award your Pre Diploma.'
      }
    ],
    image: heroLearningSetup
  },
  {
    slug: 'juniorsDeeniyatMastercourse',
    category: 'kids',
    title: 'Juniors Deeniyat Mastercourse',
    badge: 'Popular',
    hook: 'A complete Islamic foundation, built to last a lifetime.',
    sub: 'A structured, age appropriate program for children ages 6 to 12, covering Qur\'an, Seerah, Sahaba, daily sunnah, and akhlaq, so your child doesn\'t just learn Islam, they grow up loving it.',
    duration: '1.5 to 2 Years',
    price: 'Rs. 600',
    priceDetail: 'per month (Group) / Rs. 1,000 (Private)',
    syllabus: [
      'Tajweed and Makharij',
      'Asma ul Husna',
      'Prophet Stories',
      'Sahaba Stories',
      'Seerat un Nabi صلى الله عليه وسلم',
      'Daily Masnoon Duas',
      'Daily Sunnah and Hadith',
      'Aqaid',
      'Namaz and Masail',
      'Islamic Tarbiyah (character and values development)'
    ],
    whatYouGet: [
      '🎮 Interactive lessons with games and attractive visuals designed to hold a child\'s attention',
      '🧩 Regular quizzes made fun, not stressful, built to reinforce learning through play',
      '📝 Regular tests to track your child\'s progress',
      '💬 WhatsApp support for parents outside class hours',
      '🎓 Certificate on completion'
    ],
    outcome: 'Your child won\'t just learn about Islam, they\'ll grow up loving it. By the end, they\'ll read Qur\'an with correct tajweed, know the stories of the Prophets and Sahaba by heart, practice their daily sunnah with ease, and carry akhlaq rooted in the seerah, a strong Islamic foundation built to last a lifetime.',
    howLearn: 'Every class is designed to feel calm, warm, and genuinely enjoyable, never rushed, never pressured. Lessons come alive through attractive visuals, interactive games, and playful quizzes, so children stay engaged and actually look forward to class. Correction is always gentle, encouragement is constant, and every child learns at a pace that feels right for them.',
    courseDetails: {
      'Age Group': 'Ages 6 to 12 years',
      'Format': 'Private (1 on 1) or Group',
      'Platform': 'Google Meet',
      'Duration': '1.5 to 2 years (varies by child\'s pace)',
      'Fee (Private)': 'Rs. 1,000/month',
      'Fee (Group)': 'Rs. 600/month'
    },
    teacherNote: 'As someone who has taught children in this age group, I know a class only truly works when a child feels safe, engaged, and loved, not just taught. Every lesson I build is calm, gentle, and genuinely fun, with visuals, games, and quizzes that make learning feel like discovery, not pressure. I teach every child the way I\'d want my own child taught, with patience, warmth, and real care.\nMs. Mustara, Founder of Qalbiya Institute',
    whoThisIsFor: [
      'For parents who want more than scattered Islamic lessons, who want their child to build one complete, lasting foundation in Deen, taught with structure and care.'
    ],
    faqs: [
      {
        q: 'Do we have to commit to the full 1.5 to 2 years right away?',
        a: 'Not at all. Many parents start with just one month to see how their child responds. Once you see the change in your child\'s understanding, confidence, and love for their deen, most families choose to continue the full journey, but the choice is always yours.'
      },
      {
        q: 'What age group is this course for?',
        a: 'Children ages 6 to 12. Pacing is adjusted based on each child\'s age and learning speed.'
      },
      {
        q: 'How long does the course take?',
        a: 'Typically 1.5 to 2 years, depending on your child\'s individual pace, this is a complete foundation, not a rushed program.'
      },
      {
        q: 'What\'s the difference between private and group classes?',
        a: 'Both follow the same complete syllabus. Private (1 on 1) classes offer individual attention and a schedule built around your child, while group classes follow a set schedule with other children, at a lower monthly fee.'
      },
      {
        q: 'How will I know how my child is progressing?',
        a: 'Regular tests are conducted throughout the course to track your child\'s progress, and parents receive WhatsApp support for any questions outside class hours.'
      },
      {
        q: 'Will my child receive a certificate?',
        a: 'Yes, a certificate is given upon completing the course.'
      },
      {
        q: 'Is this online or in person?',
        a: 'Fully online, conducted via Google Meet.'
      }
    ],
    image: cinematicKidsTarbiyah
  },
  {
    slug: 'nooraniQaidaKids',
    category: 'kids',
    title: 'Noorani Qaida (Kids)',
    badge: 'Foundation Path',
    hook: 'The first step to reading Qur\'an.',
    sub: 'A gentle, structured introduction to the Arabic letters and Noorani Qaida, helping your child begin their Qur\'an journey with a strong, correct foundation.',
    duration: '4 to 5 Months',
    price: 'Rs. 500',
    priceDetail: 'per month',
    syllabus: [
      'Arabic alphabet recognition, reading, and stroke guided writing',
      'Perfecting correct pronunciation of challenging Arabic letters',
      'Completing the classic Noorani Qaida curriculum step by step',
      'Learning foundational Tajweed rules (joining letters, basic vowels)',
      'Patient correction of common beginner vocal mistakes'
    ],
    whatYouGet: [
      '🎮 Fun interactive lessons, digital flashcards and games',
      '🧩 Age appropriate bite sized quizzes',
      '📓 Friendly weekly homework assignments',
      '💬 Dedicated parent teacher WhatsApp support line',
      '🎓 Noorani Qaida Graduation Certificate'
    ],
    outcome: 'By the end of this course, your child will take their very first real step into the Qur\'an, reading it, not just recognizing the letters, with a solid foundation that everything else in their Qur\'an journey will be built on.',
    howLearn: 'Every teacher is chosen and trained to teach children the way they actually learn best: through visual aids, patience, constant encouragement, and gentle correction that builds their confidence.',
    courseDetails: {
      'Age Group': 'Children ages 6 to 12',
      'Format': '1 on 1 Private Sessions',
      'Platform': 'Google Meet',
      'Duration': '4 to 5 Months (varies based on child\'s pace)',
      'Fee': 'Rs. 500/month'
    },
    teacherNote: 'Every teacher at Qalbiya is trained to build a warm connection with your child first. When a child loves their teacher, they naturally grow to love the Deen and the Qur\'an.',
    whoThisIsFor: [
      'Children starting their Qur\'an learning journey with zero prior Arabic knowledge',
      'Children who need a highly encouraging, patient, and personalized 1 on 1 environment to build confidence',
      'Parents seeking to ensure correct pronunciation of Makharij from the absolute beginning'
    ],
    faqs: [
      {
        q: 'What age group is this course for?',
        a: 'This course is designed for children ages 6 to 12. Class pacing and teaching style are adjusted based on each child\'s individual age and learning speed.'
      },
      {
        q: 'Does my child need any prior knowledge?',
        a: 'No prior knowledge is needed. This course is specifically designed for complete beginners starting their Qur\'an journey from the very first letter.'
      },
      {
        q: 'How long does the course take?',
        a: 'Typically 4 to 5 months, though this varies based on your child\'s individual pace. We believe in building a strong, correct foundation rather than rushing through the material.'
      },
      {
        q: 'How long are the classes?',
        a: 'Classes are generally 30 to 45 minutes long, which is the optimal concentration window for children in this age bracket.'
      },
      {
        q: 'Will my child receive a certificate?',
        a: 'Yes, your child will receive a Noorani Qaida Graduation Certificate upon completing the course, celebrating their achievement and new foundation.'
      },
      {
        q: 'Is this online or in-person?',
        a: 'This course is fully online, conducted via Google Meet, making it convenient for your family\'s schedule.'
      },
      {
        q: 'How do you handle homework?',
        a: 'Homework is gentle and highly visual (e.g. practicing a single line or playing a digital matching game). We aim to make it something they look forward to rather than a chore.'
      }
    ],
    image: tabletOnlineClass
  }
];
