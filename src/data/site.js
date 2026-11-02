import {
  GraduationCap, HeartPulse, Users, TreePine, Tractor, HandHeart,
} from 'lucide-react'
import { IMG } from './images.js'

// ---------------- OFFICIAL INFORMATION (supplied by the client) ----------------
export const ORG = {
  name: 'Shree Marudhar Welfare Foundation',
  short: 'Marudhar Welfare Foundation',
  cin: 'U85300RJ2022NPL082507',
  section8: '136801',
  csr: '00042532',
  tax: '12A / 80G',
  iso: 'ISO 9001:2015',
  email: 'marudharwelfarefoundation@gmail.com',
  phone: '+91 8209541883',
  phoneRaw: '918209541883',
  address: 'Plot No. 27, Kisan Colony, Kanasar Chouraha, Bap – 342307, Rajasthan, India.',
  // Add real URLs when available
  social: { facebook: '', instagram: '', twitter: '', youtube: '', linkedin: '' },
}

export const ENV = {
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || ORG.phoneRaw,
  paymentKey: import.meta.env.VITE_PAYMENT_KEY || '',
}

// ---------------- FOCUS AREAS ----------------
export const FOCUS = [
  {
    slug: 'education', title: 'Education', icon: GraduationCap, img: IMG.education,
    short: 'Learning opportunities, school support and digital literacy for children and youth.',
    intro: 'Education is the strongest foundation for lasting change. Our education focus area is about helping children and young people access learning, stay in school and build skills for the future.',
    points: ['Learning support and school-readiness activities', 'Educational material and stationery support', 'Digital literacy and career awareness sessions', 'Scholarship and mentoring initiatives'],
  },
  {
    slug: 'healthcare', title: 'Healthcare', icon: HeartPulse, img: IMG.healthcare,
    short: 'Health camps, awareness drives and access to basic care for rural families.',
    intro: 'Good health should not depend on where a family lives. We work towards bringing basic healthcare information and services closer to remote and under-served communities.',
    points: ['Medical and health check-up camps', 'Health, hygiene and nutrition awareness', 'Support for referrals to hospitals and specialists', 'Blood donation and wellness drives'],
  },
  {
    slug: 'women-child-development', title: 'Women & Child Development', icon: Users, img: IMG.women,
    short: 'Skill building, livelihood support and safe growth for women and children.',
    intro: 'Empowered women build stronger families and communities. We focus on skill development, self-reliance and the wellbeing of children, so that every child can grow safely and confidently.',
    points: ['Skill training and self-help group support', 'Livelihood and entrepreneurship guidance', 'Child nutrition and early-care awareness', 'Awareness on rights, safety and schemes'],
  },
  {
    slug: 'environment', title: 'Environmental Protection', icon: TreePine, img: IMG.environment,
    short: 'Tree plantation, water conservation and climate awareness in desert communities.',
    intro: 'In the Thar region, every tree and every drop of water matters. Our environment focus supports greener, more resilient villages through community participation.',
    points: ['Tree plantation and care drives', 'Water conservation awareness', 'Cleanliness and waste-management campaigns', 'Environmental education in schools'],
  },
  {
    slug: 'rural-development', title: 'Rural Development', icon: Tractor, img: IMG.rural,
    short: 'Village infrastructure, livelihoods and awareness of government schemes.',
    intro: 'Strong villages make a strong nation. We support rural communities with practical development activities, linkages to schemes and livelihood opportunities.',
    points: ['Awareness and access to government schemes', 'Farmer and livelihood support activities', 'Community infrastructure support', 'Village-level capacity building'],
  },
  {
    slug: 'social-welfare', title: 'Social Welfare', icon: HandHeart, img: IMG.welfare,
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

// ---------------- STATS (PLACEHOLDER - replace with verified figures) ----------------
export const STATS = [
  { label: 'People Benefited', value: 0, suffix: '+' },
  { label: 'Projects Completed', value: 0, suffix: '' },
  { label: 'Communities Reached', value: 0, suffix: '' },
  { label: 'Years of Service', value: 0, suffix: '' },
]
export const STATS_ARE_VERIFIED = false

// ---------------- PROJECTS (SAMPLE CONTENT - replace) ----------------
export const PROJECTS = [
  { slug: 'learning-for-all', title: 'Learning For All', cat: 'Education', img: IMG.education, location: 'Rajasthan', status: 'Ongoing',
    short: 'A sample education project: learning support, books and digital literacy for village children.',
    body: ['This is an editable sample project description. Replace it with the real objectives, beneficiaries, timeline and outcomes of the project once verified details are available.', 'Typical education projects cover learning-support classes, distribution of educational material and awareness for parents about keeping children in school.'] },
  { slug: 'health-camp-initiative', title: 'Community Health Camps', cat: 'Healthcare', img: IMG.healthcare, location: 'Rajasthan', status: 'Ongoing',
    short: 'A sample healthcare project: periodic medical check-up and awareness camps for remote villages.',
    body: ['This is an editable sample project description. Add the real camp dates, partner doctors and number of beneficiaries here.', 'Health camps bring basic screening, medicine guidance and health education closer to families who live far from hospitals.'] },
  { slug: 'women-skill-circles', title: 'Women Skill Circles', cat: 'Women & Child', img: IMG.women, location: 'Rajasthan', status: 'Planned',
    short: 'A sample women empowerment project: skill training and self-help group formation.',
    body: ['This is an editable sample project description. Replace with real training trades, batches and outcomes.', 'Skill circles help women build income opportunities and confidence while staying close to home.'] },
  { slug: 'green-thar-drive', title: 'Green Thar Plantation Drive', cat: 'Environment', img: IMG.environment, location: 'Rajasthan', status: 'Ongoing',
    short: 'A sample environment project: community tree plantation and care in desert villages.',
    body: ['This is an editable sample project description. Add the number of saplings, species and care plan once verified.', 'Plantation drives work best when the community takes ownership of watering and protecting each sapling.'] },
  { slug: 'village-linkage-programme', title: 'Village Scheme Linkage', cat: 'Rural Development', img: IMG.rural, location: 'Rajasthan', status: 'Planned',
    short: 'A sample rural development project: helping villagers access government schemes and benefits.',
    body: ['This is an editable sample project description. Replace it with real scheme camps, helpdesks and results.', 'Many eligible families miss out on benefits simply for lack of information and documentation support.'] },
  { slug: 'care-and-relief', title: 'Care & Relief Support', cat: 'Social Welfare', img: IMG.welfare, location: 'Rajasthan', status: 'Completed',
    short: 'A sample social welfare project: essential support for families in need and the elderly.',
    body: ['This is an editable sample project description. Replace it with real relief activities and impact details.', 'Timely relief and care can protect dignity and give families space to rebuild.'] },
]
export const PROJECT_CATS = ['All', 'Education', 'Healthcare', 'Women & Child', 'Environment', 'Rural Development', 'Social Welfare']

// ---------------- STORIES (PLACEHOLDERS) ----------------
export const STORIES = [
  { id: 1, img: IMG.story1, tag: 'Education', title: 'A child back in the classroom', text: 'Placeholder story. Replace with a real, consented beneficiary story describing the challenge, the support provided and the change that followed.' },
  { id: 2, img: IMG.story2, tag: 'Women & Child', title: 'A new livelihood begins at home', text: 'Placeholder story. Replace with a real, consented beneficiary story describing the training received and how it changed the family\'s income.' },
  { id: 3, img: IMG.story3, tag: 'Rural Development', title: 'A village connects to its entitlements', text: 'Placeholder story. Replace with a real, consented community story about access to schemes, water or livelihoods.' },
]

// ---------------- TESTIMONIALS (PLACEHOLDERS) ----------------
export const TESTIMONIALS = [
  { id: 1, quote: 'Placeholder testimonial. Replace with a real quote from a beneficiary, volunteer or partner, with their permission.', who: 'Beneficiary (placeholder)' },
  { id: 2, quote: 'Placeholder testimonial. Replace with a real quote from a volunteer, with their permission.', who: 'Volunteer (placeholder)' },
  { id: 3, quote: 'Placeholder testimonial. Replace with a real quote from a CSR or community partner, with their permission.', who: 'Partner (placeholder)' },
]

// ---------------- NEWS (PLACEHOLDERS) ----------------
export const NEWS = [
  { id: 1, img: IMG.news1, cat: 'Announcement', date: 'To be updated', title: 'Foundation website launched', text: 'Placeholder update. Add real announcements, events and activity reports here.' },
  { id: 2, img: IMG.news2, cat: 'Event', date: 'To be updated', title: 'Volunteer orientation', text: 'Placeholder update. Replace with a real event, including date, venue and outcome.' },
  { id: 3, img: IMG.news3, cat: 'Activity', date: 'To be updated', title: 'Community health awareness', text: 'Placeholder update. Replace with a real activity report from the field.' },
]

// ---------------- DOCUMENTS ----------------
// Put files in /public/documents/ and set `file` to e.g. '/documents/12a.pdf'
export const CERTIFICATES = [
  { id: 'cin', title: 'Certificate of Incorporation', detail: `CIN: ${ORG.cin}`, file: '' },
  { id: 's8', title: 'Section 8 Licence', detail: `Licence No: ${ORG.section8}`, file: '' },
  { id: 'csr', title: 'CSR Registration', detail: `CSR Reg. No: ${ORG.csr}`, file: '' },
  { id: '12a', title: '12A Registration', detail: 'Income Tax exemption', file: '' },
  { id: '80g', title: '80G Registration', detail: 'Tax deduction for donors', file: '' },
  { id: 'iso', title: 'ISO Certification', detail: ORG.iso, file: '' },
]
export const ANNUAL_REPORTS = [
  { id: 'ar1', title: 'Annual Report', detail: 'Add year when available', file: '' },
]
export const FINANCIAL_REPORTS = [
  { id: 'fr1', title: 'Audited Financial Statements', detail: 'Add year when available', file: '' },
]
export const POLICIES = [
  { id: 'p1', title: 'Privacy Policy', detail: 'Read on website', route: '/privacy-policy', file: '' },
  { id: 'p2', title: 'Terms & Conditions', detail: 'Read on website', route: '/terms', file: '' },
  { id: 'p3', title: 'Donation / Refund Policy', detail: 'Add document when available', file: '' },
]

export const VALUES = ['Compassion', 'Integrity', 'Inclusion', 'Transparency', 'Sustainability']
