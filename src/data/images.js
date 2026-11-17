// ---------------------------------------------------------------------------
// CENTRAL IMAGE REGISTRY  -  all photographs are the foundation's own,
// stored in /public/images/work  (full size = <name>.webp, thumbnail = <name>-sm.webp)
// ---------------------------------------------------------------------------

const W = '/images/work/'
export const full = (n) => `${W}${n}.webp`
export const thumb = (n) => `${W}${n}-sm.webp`

export const IMG = {
  // HERO / HEADERS
  hero: full('health-camp-tent-2'),
  heroArch: full('health-camp-tent-1'),
  heroCircle: full('seminar-hall'),

  // ABOUT & MISSION
  about1: full('health-camp-checkup'),
  about2: full('seminar-hall'),
  mission: full('water-day-pledge'),

  // FOCUS AREAS
  education: full('seminar-hall'),
  healthcare: full('health-camp-tent-1'),
  women: full('hospital-gift-handover'),
  environment: full('water-day-pledge'),
  rural: full('health-camp-tent-2'),
  welfare: full('health-camp-checkup'),

  // OTHER SECTIONS
  csr: full('hospital-gift-handover'),
  donate: full('health-camp-tent-1'),
  contact: full('seminar-hall'),

  // NEWS
  news1: thumb('republic-day-honour'),
  news2: thumb('doctors-day-tribute'),
  news3: thumb('vriksh-daan-newspaper'),

  // VOLUNTEERS & HIGHLIGHTS
  volunteer: full('health-camp-checkup'),
  story1: full('water-day-pledge'),
  story2: full('health-camp-checkup'),
  story3: full('hospital-gift-handover'),
}

// ---------------------------------------------------------------------------
// GALLERY   (w/h = size of the full image, so the grid keeps the real aspect ratio)
// ---------------------------------------------------------------------------
const g = (id, name, cat, title, w, h) => ({ id, cat, type: 'image', title, src: full(name), thumb: thumb(name), w, h })

export const GALLERY = [
  g(1, 'health-camp-tent-2', 'Healthcare', 'Free health camp under the tent', 1600, 1200),
  g(2, 'water-day-pledge', 'Environment', 'World Water Day - pledge to conserve water', 1552, 1600),
  g(3, 'seminar-hall', 'Education', 'Seminar with students and guests', 1600, 1067),
  g(4, 'health-camp-checkup', 'Healthcare', 'Villagers receiving basic care and medicines', 1200, 1600),
  g(5, 'hospital-gift-handover', 'Environment', 'Sapling handed over at Marudhar Hospital, Bap', 1280, 960),
  g(6, 'health-camp-tent-1', 'Healthcare', 'Volunteers at the health camp', 1600, 1200),
  g(7, 'health-camp-guests', 'Events', 'Guests at the community health camp event', 1201, 1600),
  g(8, 'pmsma-sonography-camp', 'Women & Child', 'Sonography under the PMSMA scheme', 1036, 1469),
  g(9, 'girl-child-plant-gift', 'Women & Child', 'A sapling gifted to families on the birth of a girl', 1036, 1286),
  g(10, 'national-girl-child-day', 'Women & Child', 'National Girl Child Day at Bap college', 983, 1600),
  g(11, 'youth-day-career-seminar', 'Education', 'National Youth Day - career counselling seminar', 1038, 1070),
  g(12, 'doctors-day-tribute', 'Healthcare', "Doctors' Day - honouring our doctors", 1408, 1600),
  g(13, 'labour-day-health-awareness', 'Healthcare', 'Labour Day health awareness - Help for Health Movement', 1040, 924),
  g(14, 'vriksh-daan-pahal-poster', 'Environment', 'Vriksh Daan Pahal - donate a tree', 1220, 1600),
  g(15, 'three-year-journey-vriksh-daan', 'Environment', 'Three-year journey and the Vriksh Daan Pahal launch', 1218, 1600),
  g(16, 'republic-day-honour', 'Events', 'Honoured by the sub-division administration on Republic Day', 1600, 1190),
  g(17, 'water-day-newspaper', 'Media', 'In the news: World Water Day pledge', 1262, 1600),
  g(18, 'vriksh-daan-newspaper', 'Media', 'In the news: Vriksh Daan Abhiyan begins', 1038, 1387),
  g(19, 'plantation-near-gaushala-news', 'Media', 'In the news: plantation near the gaushala', 1197, 1600),
]

export const GALLERY_CATS = ['All', 'Healthcare', 'Environment', 'Education', 'Women & Child', 'Events', 'Media']

// Newspaper clippings used by the "In the news" strip
export const PRESS = [
  { name: 'republic-day-honour', title: 'Honoured by the sub-division administration on Republic Day' },
  { name: 'water-day-newspaper', title: 'World Water Day - girls pledge to conserve water' },
  { name: 'vriksh-daan-newspaper', title: 'Foundation begins the Vriksh Daan Abhiyan' },
  { name: 'plantation-near-gaushala-news', title: 'Donated trees planted near the gaushala' },
  { name: 'labour-day-health-awareness', title: 'Labourers made aware about health' },
].map((p) => ({ ...p, src: full(p.name), thumb: thumb(p.name) }))
