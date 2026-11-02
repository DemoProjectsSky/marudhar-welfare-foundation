// ---------------------------------------------------------------------------
// CENTRAL IMAGE REGISTRY
// Every photograph on the site is referenced from here. To use the NGO's real
// photographs, drop files into /public/images/ and replace the URL, e.g.
//   hero: '/images/hero.jpg'
// If any image fails to load, the <SmartImg> component shows a branded
// placeholder instead of a broken icon.
// ---------------------------------------------------------------------------
const u = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMG = {
  hero: u('photo-1488521787991-ed7bbaae773c', 2000),
  heroArch: u('photo-1503676260728-1c00da094a0b', 900),
  heroCircle: u('photo-1559027615-cd4628902d4a', 600),

  about1: u('photo-1593113598332-cd288d649433', 1000),
  about2: u('photo-1509099836639-18ba1795216d', 800),
  mission: u('photo-1469571486292-0ba58a3f068b', 1200),

  education: u('photo-1497633762265-9d179a990aa6', 1200),
  healthcare: u('photo-1532629345422-7515f3d16bb6', 1200),
  women: u('photo-1594708767771-a7502209ff51', 1200),
  environment: u('photo-1542601906990-b4d3fb778b09', 1200),
  rural: u('photo-1500382017468-9049fed747ef', 1200),
  welfare: u('photo-1559027615-cd4628902d4a', 1200),

  csr: u('photo-1521737604893-d14cc237f11d', 1200),
  donate: u('photo-1488521787991-ed7bbaae773c', 1400),
  contact: u('photo-1423666639041-f56000c27a9a', 1200),
  news1: u('photo-1529390079861-591de354faf5', 900),
  news2: u('photo-1517486808906-6ca8b3f04846', 900),
  news3: u('photo-1576091160399-112ba8d25d1d', 900),
  volunteer: u('photo-1593113598332-cd288d649433', 1200),
  story1: u('photo-1509099836639-18ba1795216d', 900),
  story2: u('photo-1594708767771-a7502209ff51', 900),
  story3: u('photo-1500382017468-9049fed747ef', 900),
}

export const GALLERY = [
  { id: 1, cat: 'Education', type: 'image', src: u('photo-1503676260728-1c00da094a0b', 900), title: 'Classroom learning', h: 'tall' },
  { id: 2, cat: 'Healthcare', type: 'image', src: u('photo-1532629345422-7515f3d16bb6', 900), title: 'Health check-up camp', h: 'short' },
  { id: 3, cat: 'Environment', type: 'image', src: u('photo-1542601906990-b4d3fb778b09', 900), title: 'Tree plantation drive', h: 'tall' },
  { id: 4, cat: 'Women & Child', type: 'image', src: u('photo-1594708767771-a7502209ff51', 900), title: 'Women skill circle', h: 'short' },
  { id: 5, cat: 'Rural Development', type: 'image', src: u('photo-1500382017468-9049fed747ef', 900), title: 'Village development', h: 'short' },
  { id: 6, cat: 'Social Welfare', type: 'image', src: u('photo-1559027615-cd4628902d4a', 900), title: 'Community support', h: 'tall' },
  { id: 7, cat: 'Education', type: 'video', src: u('photo-1497633762265-9d179a990aa6', 900), title: 'Education programme (video placeholder)', h: 'short', url: '' },
  { id: 8, cat: 'Events', type: 'image', src: u('photo-1529390079861-591de354faf5', 900), title: 'Awareness campaign', h: 'tall' },
  { id: 9, cat: 'Environment', type: 'video', src: u('photo-1469571486292-0ba58a3f068b', 900), title: 'Green drive (video placeholder)', h: 'short', url: '' },
  { id: 10, cat: 'Events', type: 'image', src: u('photo-1517486808906-6ca8b3f04846', 900), title: 'Volunteer meet', h: 'short' },
  { id: 11, cat: 'Healthcare', type: 'image', src: u('photo-1576091160399-112ba8d25d1d', 900), title: 'Medical outreach', h: 'tall' },
  { id: 12, cat: 'Social Welfare', type: 'image', src: u('photo-1593113598332-cd288d649433', 900), title: 'Volunteers helping', h: 'short' },
]

export const GALLERY_CATS = ['All', 'Education', 'Healthcare', 'Women & Child', 'Environment', 'Rural Development', 'Social Welfare', 'Events']
