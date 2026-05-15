import prisma from '@/src/lib/prisma.js';
import bcrypt from 'bcryptjs';

async function main() {
  console.log('🌱 Starting database seed...');

  // Create Super Admin Account (Admin table)
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.admin.upsert({
    where: { email: 'admin@ottplatform.com' },
    update: {},
    create: {
      email: 'admin@ottplatform.com',
      password: hashedPassword,
      firstName: 'Super',
      lastName: 'Admin',
      role: 'SUPER_ADMIN',
      isActive: true,
    },
  });
  console.log('✅ Created super admin:', admin.email);
  console.log('   Default password: admin123 (CHANGE THIS IN PRODUCTION!)');

  // Create Subscription Plans
  const plans = [
    {
      name: 'Free',
      type: 'FREE',
      price: 0,
      durationDays: 0,
      features: JSON.stringify(['Limited content access', 'Ads included', 'Standard quality']),
    },
    {
      name: 'Premium Monthly',
      type: 'MONTHLY',
      price: 199,
      durationDays: 30,
      features: JSON.stringify(['All content access', 'No ads', 'HD quality', '4 devices']),
    },
    {
      name: 'Premium Yearly',
      type: 'YEARLY',
      price: 1999,
      durationDays: 365,
      features: JSON.stringify(['All content access', 'No ads', '4K quality', '4 devices', 'Offline downloads']),
    },
  ];

  for (const plan of plans) {
    const existing = await prisma.subscriptionPlan.findFirst({ where: { name: plan.name } });
    if (!existing) {
      await prisma.subscriptionPlan.create({
        data: plan,
      });
    }
  }
  console.log('✅ Created subscription plans');

  // Create Categories
  const categories = [
    { name: 'Top Picks', slug: 'top-picks', type: 'TOP_PICKS', order: 1 },
    { name: 'Recommended', slug: 'recommended', type: 'RECOMMENDED', order: 2 },
    { name: 'New Releases', slug: 'new-releases', type: 'NEW_RELEASES', order: 3 },
    { name: 'Upcoming', slug: 'upcoming', type: 'UPCOMING', order: 4 },
    { name: 'Trending', slug: 'trending', type: 'TRENDING', order: 5 },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }
  console.log('✅ Created categories');

  // Create Sample Series with rich demo data
  const sampleSeries = [
    {
      title: 'The Upside Down',
      slug: 'the-upside-down',
      description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
      type: 'SERIES',
      status: 'PUBLISHED',
      language: 'English',
      rating: 9.5,
      ratingCount: 15420,
      genres: JSON.stringify(['Sci-Fi', 'Thriller', 'Drama']),
      cast: JSON.stringify([{name: 'Jane Doe', role: 'Eleven'}, {name: 'John Smith', role: 'Hopper'}]),
      posterUrl: 'https://images.unsplash.com/photo-1618519764620-7403abdbdf9a?q=80&w=600&auto=format&fit=crop',
      backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
      trailerUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      isPremium: true,
      isFeatured: true,
      ageRating: '16+',
    },
    {
      title: 'Money Plan',
      slug: 'money-plan',
      description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
      type: 'SERIES',
      status: 'PUBLISHED',
      language: 'Spanish',
      rating: 8.9,
      ratingCount: 12050,
      genres: JSON.stringify(['Action', 'Crime', 'Drama']),
      cast: JSON.stringify([{name: 'Alvaro', role: 'The Professor'}, {name: 'Ursula', role: 'Tokyo'}]),
      posterUrl: 'https://images.unsplash.com/photo-1623910279860-252119128509?q=80&w=600&auto=format&fit=crop',
      backdropUrl: 'https://images.unsplash.com/photo-1555864326-5bc32ea2aa49?q=80&w=1200&auto=format&fit=crop',
      trailerUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      isPremium: true,
      isFeatured: true,
      ageRating: '18+',
    },
    {
      title: 'Planet Earth: Unseen',
      slug: 'planet-earth-unseen',
      description: 'Experience the world from the viewpoint of animals themselves. From spectacular sweeping landscapes to the smallest details of animal lives.',
      type: 'DOCUMENTARY',
      status: 'PUBLISHED',
      language: 'English',
      rating: 9.8,
      ratingCount: 8400,
      genres: JSON.stringify(['Documentary', 'Nature']),
      cast: JSON.stringify([{name: 'David', role: 'Narrator'}]),
      posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
      backdropUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop',
      trailerUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      isPremium: false,
      isFeatured: true,
      ageRating: 'All',
    },
    {
      title: 'The Office Space',
      slug: 'the-office-space',
      description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
      type: 'SERIES',
      status: 'PUBLISHED',
      language: 'English',
      rating: 9.0,
      ratingCount: 18500,
      genres: JSON.stringify(['Comedy', 'Sitcom']),
      cast: JSON.stringify([{name: 'Steve', role: 'Michael'}, {name: 'Rainn', role: 'Dwight'}]),
      posterUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop',
      backdropUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
      trailerUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      isPremium: false,
      isFeatured: false,
      ageRating: '13+',
    },
    {
      title: 'Thrones of Power',
      slug: 'thrones-of-power',
      description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
      type: 'SERIES',
      status: 'PUBLISHED',
      language: 'English',
      rating: 9.3,
      ratingCount: 25000,
      genres: JSON.stringify(['Fantasy', 'Action', 'Drama']),
      cast: JSON.stringify([{name: 'Emilia', role: 'Daenerys'}, {name: 'Kit', role: 'Jon'}]),
      posterUrl: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=600&auto=format&fit=crop',
      backdropUrl: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1200&auto=format&fit=crop',
      trailerUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      isPremium: true,
      isFeatured: true,
      ageRating: '18+',
    }
  ];

  const createdSeries = [];
  for (const series of sampleSeries) {
    const created = await prisma.series.create({
      data: series,
    });
    createdSeries.push(created);
  }
  console.log('✅ Created sample series');

  // Create Sample Episodes
  for (const series of createdSeries) {
    for (let i = 1; i <= 5; i++) {
      await prisma.episode.create({
        data: {
          seriesId: series.id,
          season: 1,
          episodeNumber: i,
          title: `${series.title} - Episode ${i}`,
          description: `In this exciting episode ${i} of ${series.title}, the plot thickens as new challenges arise for the main characters.`,
          duration: 2400 + Math.floor(Math.random() * 600), // 40-50 minutes
          status: 'PUBLISHED',
          releaseDate: new Date('2024-01-01'),
          thumbnailUrl: series.posterUrl,
          videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          videoType: 'MP4'
        },
      });
    }
  }
  console.log('✅ Created sample episodes');

  // Add series to categories
  const topPicksCategory = await prisma.category.findUnique({
    where: { slug: 'top-picks' },
  });
  const newReleasesCategory = await prisma.category.findUnique({
    where: { slug: 'new-releases' },
  });
  const trendingCategory = await prisma.category.findUnique({
    where: { slug: 'trending' },
  });
  const recommendedCategory = await prisma.category.findUnique({
    where: { slug: 'recommended' },
  });

  if (topPicksCategory) {
    for (let i = 0; i < createdSeries.length; i++) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: createdSeries[i].id,
          categoryId: topPicksCategory.id,
          order: i + 1,
        },
      });
    }
  }

  if (newReleasesCategory) {
    for (let i = 0; i < 3; i++) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: createdSeries[i].id,
          categoryId: newReleasesCategory.id,
          order: i + 1,
        },
      });
    }
  }

  if (trendingCategory) {
    for (let i = 0; i < createdSeries.length; i++) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: createdSeries[createdSeries.length - 1 - i].id,
          categoryId: trendingCategory.id,
          order: i + 1,
        },
      });
    }
  }

  if (recommendedCategory) {
    for (let i = 0; i < 4; i++) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: createdSeries[i].id,
          categoryId: recommendedCategory.id,
          order: i + 1,
        },
      });
    }
  }
  console.log('✅ Added series to categories');

  console.log('🎉 Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
