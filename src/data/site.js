import {
  GraduationCap, HeartPulse, Users, TreePine, Tractor, HandHeart, CalendarHeart, LayoutGrid, BadgeCheck,
} from 'lucide-react'
import { IMG, full, thumb } from './images.js'

// ---------------- OFFICIAL INFORMATION (supplied by the client) ----------------
export const ORG = {
  name: 'Shree Marudhar Welfare Foundation',
  short: 'Marudhar Welfare Foundation',
  cin: 'U85300RJ2022NPL082507',
  section8: '136801',
  csr: '00042532',
  tax: '12A & 80G',
  iso: 'ISO 9001:2015',
  email: 'marudharwelfarefoundation@gmail.com',
  phone: '+91 8209541883',
  phoneRaw: '918209541883',
  address: 'Plot No. 27, Kisan Colony, Kanasar Chouraha, Bap – 342307, Rajasthan, India.',
  founder: 'Suresh Paliwal',
  established: 2022,
  // ---- Fill these in when the foundation supplies them -------------------
  // Social links: full URLs. Icons appear on the site automatically once a URL is set.
  social: { facebook: '', instagram: '', twitter: '', youtube: '', linkedin: '' },
  // Donation: UPI ID (e.g. 'name@bank') and QR image placed in /public/images/ (e.g. '/images/donate-qr.png')
  upi: '',
  upiName: 'Shree Marudhar Welfare Foundation',
  qr: '',
  // Google Maps: paste the "Share > Copy link" URL as mapUrl and the "Embed a map" src URL as mapEmbed for the exact pin.
  mapUrl: '',
  mapEmbed: '',
}

export const mapLink = () =>
  ORG.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Kanasar Chouraha, Bap, Rajasthan 342307')}`

export const ENV = {
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || ORG.phoneRaw,
  paymentKey: import.meta.env.VITE_PAYMENT_KEY || '',
}

// ---------------- FOCUS AREAS ----------------
export const FOCUS = [
  {
    slug: 'education', title: 'Education', icon: GraduationCap, img: IMG.education, cardImg: thumb('seminar-hall'),
    short: 'Learning opportunities, school support and digital literacy for children and youth.',
    intro: 'Education is the strongest foundation for lasting change. Our education focus area is about helping children and young people access learning, stay in school and build skills for the future.',
    points: ['Learning support and school-readiness activities', 'Educational material and stationery support', 'Digital literacy and career awareness sessions', 'Scholarship and mentoring initiatives'],
  },
  {
    slug: 'healthcare', title: 'Healthcare', icon: HeartPulse, img: IMG.healthcare, cardImg: thumb('health-camp-tent-1'),
    short: 'Health camps, awareness drives and access to basic care for rural families.',
    intro: 'Good health should not depend on where a family lives. We work towards bringing basic healthcare information and services closer to remote and under-served communities.',
    points: ['Medical and health check-up camps', 'Health, hygiene and nutrition awareness', 'Support for referrals to hospitals and specialists', 'Blood donation and wellness drives'],
  },
  {
    slug: 'women-child-development', title: 'Women & Child Development', icon: Users, img: IMG.women, cardImg: thumb('hospital-gift-handover'),
    short: 'Skill building, livelihood support and safe growth for women and children.',
    intro: 'Empowered women build stronger families and communities. We focus on skill development, self-reliance and the wellbeing of children, so that every child can grow safely and confidently.',
    points: ['Skill training and self-help group support', 'Livelihood and entrepreneurship guidance', 'Child nutrition and early-care awareness', 'Awareness on rights, safety and schemes'],
  },
  {
    slug: 'environment', title: 'Environmental Protection', icon: TreePine, img: IMG.environment, cardImg: thumb('water-day-pledge'),
    short: 'Tree plantation, water conservation and climate awareness in desert communities.',
    intro: 'In the Thar region, every tree and every drop of water matters. Our environment focus supports greener, more resilient villages through community participation.',
    points: ['Tree plantation and care drives', 'Water conservation awareness', 'Cleanliness and waste-management campaigns', 'Environmental education in schools'],
  },
  {
    slug: 'rural-development', title: 'Rural Development', icon: Tractor, img: IMG.rural, cardImg: thumb('health-camp-tent-2'),
    short: 'Village infrastructure, livelihoods and awareness of government schemes.',
    intro: 'Strong villages make a strong nation. We support rural communities with practical development activities, linkages to schemes and livelihood opportunities.',
    points: ['Awareness and access to government schemes', 'Farmer and livelihood support activities', 'Community infrastructure support', 'Village-level capacity building'],
  },
  {
    slug: 'social-welfare', title: 'Social Welfare', icon: HandHeart, img: IMG.welfare, cardImg: thumb('health-camp-checkup'),
    short: 'Support for the elderly, families in need and vulnerable communities.',
    intro: 'Compassion in action: we stand beside people who need support the most, from families facing hardship to elders and the differently-abled.',
    points: ['Essential relief and support for families in need', 'Care and companionship for the elderly', 'Community awareness campaigns', 'Support during emergencies and disasters'],
  },
]

// ---------------- NAVIGATION ----------------
export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Our Work', to: '/our-work',
    children: [
      { label: 'Education', to: '/our-work/education' },
      { label: 'Healthcare', to: '/our-work/healthcare' },
      { label: 'Women & Child Development', to: '/our-work/women-child-development' },
      { label: 'Environment', to: '/our-work/environment' },
      { label: 'Rural Development', to: '/our-work/rural-development' },
      { label: 'Social Welfare', to: '/our-work/social-welfare' },
    ],
  },
  { label: 'Projects', to: '/projects' },
  { label: 'Our Impact', to: '/impact' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'CSR & Partnerships', to: '/csr' },
  {
    label: 'Resources', to: '/resources',
    children: [
      { label: 'Annual Reports', to: '/resources/annual-reports' },
      { label: 'Financial Reports', to: '/resources/financial-reports' },
      { label: 'Certificates', to: '/resources/certificates' },
      { label: 'Policies', to: '/resources/policies' },
    ],
  },
  { label: 'News & Updates', to: '/news' },
  { label: 'Contact Us', to: '/contact' },
]


// ---------------- IMPACT FIGURES (only figures that can be verified from the foundation's own material) ----------------
export const STATS = [
  { label: 'Years of Service', value: 3, suffix: '+', icon: CalendarHeart },
  { label: 'Focus Areas', value: 6, suffix: '', icon: LayoutGrid },
  { label: 'Trees Donated (Vriksh Daan Pahal)', value: 24, suffix: '+', icon: TreePine },
  { label: 'Registrations & Certifications', value: 5, suffix: '', icon: BadgeCheck },
]
export const STATS_ARE_VERIFIED = true

// ---------------- PROJECTS / INITIATIVES (from the foundation's own posters and press clippings) ----------------
export const PROJECTS = [
  {
    slug: 'vriksh-daan-pahal',
    title: 'Vriksh Daan Pahal',
    cat: 'Environment',
    img: thumb('vriksh-daan-pahal-poster'), pos: 'top',
    location: 'Bap, Rajasthan',
    status: 'Ongoing',
    short: 'Donate a tree on a birthday, anniversary or any special day - the foundation plants and cares for it.',
    body: [
      'Vriksh Daan Pahal is the foundation\'s environmental and social campaign, launched to mark its three-year journey. It aims to make planting a tree a tradition on life\'s special occasions - birthdays, weddings, memorial days and anniversaries.',
      'Members, families and institutions are invited to gift a sapling in their own name or in the name of a loved one. Foundation members then plant the saplings at a suitable place and take care of them.',
      'Under this initiative the foundation has so far received 24 donated trees, which are being planted on the cemetery land near the Rishi Gaushala, Bap.',
    ],
    gallery: ['vriksh-daan-pahal-poster', 'three-year-journey-vriksh-daan', 'vriksh-daan-newspaper', 'plantation-near-gaushala-news'],
  },
  {
    slug: 'community-health-camps',
    title: 'Community Health Camps',
    cat: 'Healthcare',
    img: full('health-camp-tent-2'),
    cardImg: thumb('health-camp-tent-2'),
    location: 'Bap, Rajasthan',
    status: 'Ongoing',
    short: 'Open-air health camps bringing basic care and medicines closer to village families.',
    body: [
      'Under the motto "Seva Paramo Dharma", the foundation organises health camps where volunteers provide basic care, first-aid and medicines to villagers who live far from hospitals.',
      'The camps are set up in the community itself, so that families can be seen without travelling long distances.',
    ],
    gallery: ['health-camp-tent-2', 'health-camp-tent-1', 'health-camp-checkup', 'health-camp-guests'],
  },
  {
    slug: 'pmsma-sonography',
    title: 'Sonography under PMSMA',
    cat: 'Women & Child',
    img: thumb('pmsma-sonography-camp'), pos: 'top',
    location: 'Bap, Rajasthan',
    status: 'Ongoing',
    short: 'Sonography support for expectant mothers under the Pradhan Mantri Surakshit Matritva Abhiyan.',
    body: [
      'Together with Marudhar Hospital - a sonography centre and maternity home in Bap - the foundation supports sonography services for women under the Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA).',
      'The programme helps expectant mothers from surrounding villages get a safe, timely check-up close to home.',
    ],
    gallery: ['pmsma-sonography-camp', 'girl-child-plant-gift'],
  },
  {
    slug: 'beti-janm-paudha',
    title: 'A Sapling for Every Girl Child',
    cat: 'Women & Child',
    img: full('hospital-gift-handover'),
    location: 'Marudhar Hospital, Bap',
    status: 'Ongoing',
    short: 'Families are gifted a Shami sapling on the birth of a daughter - and take on the care of the tree.',
    body: [
      'At Marudhar Hospital, Bap, a Shami sapling is presented to the family whenever a girl child is born. The family is also entrusted with planting the sapling and caring for it as it grows.',
      'The idea links the birth of a daughter with celebration, responsibility and the greening of the village.',
    ],
    gallery: ['girl-child-plant-gift', 'hospital-gift-handover', 'national-girl-child-day'],
  },
  {
    slug: 'help-for-health-movement',
    title: 'Help for Health Movement',
    cat: 'Social Welfare',
    img: full('labour-day-health-awareness'),
    location: 'Bap, Rajasthan',
    status: 'Ongoing',
    short: 'Health awareness for workers, run with the Rajasthan Society for Rural Environment & Development.',
    body: [
      'The Help for Health Movement is run by the foundation together with the Rajasthan Society for Rural Environment & Development. On World Labour Day, volunteers met workers to talk about welfare schemes for those in the organised and unorganised sectors.',
      'Workers were also told how rising summer heat can cause dehydration, heat-stroke and skin problems, and how to protect themselves.',
    ],
    gallery: ['labour-day-health-awareness'],
  },
  {
    slug: 'career-counselling-seminar',
    title: 'Career Counselling Seminar',
    cat: 'Education',
    img: full('youth-day-career-seminar'),
    location: 'Govt. College, Bap',
    status: 'Completed',
    short: 'A National Youth Day seminar on Swami Vivekananda Jayanti for college students (12 January 2024).',
    body: [
      'On National Youth Day, marking Swami Vivekananda Jayanti, the foundation held a Career Counselling Seminar for students at the Government College, Bap on Friday, 12 January 2024.',
      'Speakers included Dr. Yogesh Sharma (Assistant Professor), Sant Shri Tyagmurti ji (motivational speaker) and Suresh Paliwal (Sub-Inspector).',
    ],
    gallery: ['youth-day-career-seminar', 'seminar-hall'],
  },
  {
    slug: 'world-water-day-pledge',
    title: 'World Water Day Pledge',
    cat: 'Environment',
    img: full('water-day-pledge'),
    location: 'Bap, Rajasthan',
    status: 'Completed',
    short: 'Young women worshipped the water source and pledged to conserve water on World Water Day.',
    body: [
      'On the initiative of the foundation, girls gathered at a water source on World Water Day, performed a traditional worship and took a pledge to protect and conserve water.',
      'In a desert region, water is life - and the pledge was carried by the local press.',
    ],
    gallery: ['water-day-pledge', 'water-day-newspaper'],
  },
]
export const PROJECT_CATS = ['All', 'Education', 'Healthcare', 'Women & Child', 'Environment', 'Social Welfare']

// ---------------- FIELD HIGHLIGHTS (real moments from the foundation's own photographs) ----------------
export const STORIES = [
  { id: 1, img: IMG.story1, tag: 'Environment', title: 'A pledge to protect every drop', text: 'On World Water Day, girls gathered at the water source, worshipped it and pledged to conserve water - an event covered by the local newspaper.', to: '/projects/world-water-day-pledge' },
  { id: 2, img: IMG.story2, tag: 'Healthcare', title: 'Health care that comes to the village', text: 'Volunteers set up an open-air camp to give basic care and medicines to villagers who live far from the nearest hospital.', to: '/projects/community-health-camps' },
  { id: 3, img: IMG.story3, tag: 'Women & Child', title: 'A sapling to welcome a daughter', text: 'At Marudhar Hospital, Bap, a Shami sapling is gifted to every family on the birth of a girl - with a promise to plant and nurture it.', to: '/projects/beti-janm-paudha' },
]

// ---------------- NEWS & UPDATES (from posters and press clippings; dates shown only where printed) ----------------
export const NEWS = [
  { id: 1, img: IMG.news1, cat: 'Recognition', date: 'Republic Day', title: 'Foundation honoured by the sub-division administration', text: 'The Bap sub-division administration honoured Marudhar Foundation on Republic Day for its social work. Founder Suresh Paliwal received the honour.' },
  { id: 2, img: thumb('three-year-journey-vriksh-daan'), pos: 'top', cat: 'Campaign', date: 'Three-year journey', title: 'Vriksh Daan Pahal launched', text: 'To mark three years of service, the foundation launched Vriksh Daan Pahal, inviting people to donate a tree on special occasions.' },
  { id: 3, img: thumb('water-day-pledge'), cat: 'Event', date: 'World Water Day', title: 'Girls pledge to conserve water', text: 'On the foundation\'s initiative, girls worshipped the water source and took a pledge to protect water on World Water Day.' },
  { id: 4, img: thumb('youth-day-career-seminar'), cat: 'Event', date: '12 Jan 2024', title: 'Career counselling seminar on National Youth Day', text: 'A seminar for students at the Government College, Bap, on Swami Vivekananda Jayanti.' },
  { id: 5, img: thumb('labour-day-health-awareness'), cat: 'Activity', date: 'World Labour Day', title: 'Workers made aware about health', text: 'Under the Help for Health Movement, workers learned about welfare schemes and how to stay safe in rising summer heat.' },
  { id: 6, img: thumb('doctors-day-tribute'), pos: 'center', cat: 'Event', date: "Doctors' Day", title: 'Saluting our doctors', text: "On Doctors' Day, the foundation honoured the doctors of Marudhar Hospital for their courage, dedication and compassion." },
  { id: 7, img: thumb('pmsma-sonography-camp'), pos: 'top', cat: 'Healthcare', date: 'PMSMA', title: 'Sonography camp for expectant mothers', text: 'Women from nearby villages received sonography check-ups under the Pradhan Mantri Surakshit Matritva Abhiyan.' },
  { id: 8, img: thumb('national-girl-child-day'), pos: 'top', cat: 'Event', date: 'National Girl Child Day', title: 'Programme at Bap college', text: 'The foundation organised a programme at Bap college on National Girl Child Day.' },
  { id: 9, img: full('health-camp-tent-2'), cat: 'Healthcare', date: 'Aug 2025', title: 'Free health camp', text: 'Volunteers served villagers at an open-air health camp under the motto "Seva Paramo Dharma".' },
]

// ---------------- TEAM ----------------
// Add { name, role, photo } entries. photo = '/images/team/<file>.jpg' (put the file in /public/images/team/).
// Without a photo, an initials avatar is shown automatically.
export const TEAM = [
  { name: 'Suresh Paliwal', role: 'Founder', photo: '' },
]

// ---------------- PARTNERS & ASSOCIATES ----------------
// logo = '/images/partners/<file>.png' (optional). photo = a partnership photo (optional).
export const PARTNERS = [
  { name: 'Rajasthan Society for Rural Environment & Development', kind: 'Programme partner', note: 'Runs the "Help for Health Movement" together with the foundation.', logo: '', photo: thumb('labour-day-health-awareness') },
  { name: 'Marudhar Hospital, Bap', kind: 'Healthcare associate', note: 'Sonography centre and maternity home; venue for the PMSMA sonography and girl-child sapling initiatives.', logo: '', photo: thumb('hospital-gift-handover') },
  { name: 'Shree Nirmal Vidya Foundation Charitable Trust', kind: 'Community associate', note: 'Seen alongside the foundation at its community health camp event.', logo: '', photo: thumb('health-camp-guests') },
  { name: 'Sub-division Administration, Bap (Jodhpur)', kind: 'Government recognition', note: 'Honoured the foundation on Republic Day for its social work.', logo: '', photo: thumb('republic-day-honour') },
]

// ---------------- DOCUMENTS ----------------
// Put files in /public/documents/ and set `file` to e.g. '/documents/12a.pdf'  (optional `thumb` = preview image)
export const CERTIFICATES = [

  { id: 'csr', title: 'CSR Registration', detail: `CSR Reg. No: ${ORG.csr}`, file: '' },
  { id: '12a', title: '12A Registration', detail: 'Income Tax exemption', file: '' },
  { id: '80g', title: '80G Registration', detail: 'Tax deduction for donors', file: '' },
  { id: 'iso', title: 'ISO Certification', detail: ORG.iso, file: '' },
]
export const ANNUAL_REPORTS = [
  { id: 'ar1', title: 'Annual Report', detail: 'Yearly overview of our work', file: '' },
]
export const FINANCIAL_REPORTS = [
  { id: 'fr1', title: 'Audited Financial Statements', detail: 'Audited accounts and fund utilisation', file: '' },
]
export const POLICIES = [
  { id: 'p1', title: 'Privacy Policy', detail: 'Read on website', route: '/privacy-policy', file: '' },
  { id: 'p2', title: 'Terms & Conditions', detail: 'Read on website', route: '/terms', file: '' },
  { id: 'p3', title: 'Donation / Refund Policy', detail: 'Policy document', file: '' },
]

export const VALUES = ['Compassion', 'Integrity', 'Inclusion', 'Transparency', 'Sustainability']
