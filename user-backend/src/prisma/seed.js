const { PrismaClient } = require('../generated/prisma/index.js');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create Super Admin Account (Admin table)
  const bcrypt = require('bcryptjs');
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
    await prisma.subscriptionPlan.upsert({
      where: { name: plan.name },
      update: {},
      create: plan,
    });
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

  // Create Sample Series
  const sampleSeries = [
    {
      title: 'The Last Frontier',
      slug: 'the-last-frontier',
      description: 'An epic journey through uncharted territories.',
      type: 'SERIES',
      status: 'PUBLISHED',
      language: 'English',
      rating: 8.5,
      ratingCount: 1250,
      genres: JSON.stringify(['Drama', 'Adventure']),
      isPremium: true,
      isFeatured: true,
    },
    {
      title: 'City Lights',
      slug: 'city-lights',
      description: 'A romantic drama set in the bustling city.',
      type: 'SERIES',
      status: 'PUBLISHED',
      language: 'Hindi',
      rating: 7.8,
      ratingCount: 890,
      genres: JSON.stringify(['Romance', 'Drama']),
      isPremium: false,
      isFeatured: true,
    },
    {
      title: 'Mystery Manor',
      slug: 'mystery-manor',
      description: 'Uncover the secrets of the ancient manor.',
      type: 'SERIES',
      status: 'PUBLISHED',
      language: 'English',
      rating: 9.2,
      ratingCount: 2100,
      genres: JSON.stringify(['Thriller', 'Mystery']),
      isPremium: true,
      isFeatured: false,
    },
    {
      title: 'Tech Titans',
      slug: 'tech-titans',
      description: 'The rise and fall of tech giants.',
      type: 'DOCUMENTARY',
      status: 'PUBLISHED',
      language: 'English',
      rating: 8.1,
      ratingCount: 670,
      genres: JSON.stringify(['Documentary', 'Business']),
      isPremium: true,
      isFeatured: false,
    },
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
    for (let i = 1; i <= 3; i++) {
      await prisma.episode.create({
        data: {
          seriesId: series.id,
          season: 1,
          episodeNumber: i,
          title: `Episode ${i}`,
          description: `The exciting episode ${i} of ${series.title}`,
          duration: 1800 + (i * 300), // 30-40 minutes
          status: 'PUBLISHED',
          releaseDate: new Date('2024-01-01'),
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
    await prisma.seriesCategory.create({
      data: {
        seriesId: createdSeries[0].id,
        categoryId: newReleasesCategory.id,
        order: 1,
      },
    });
  }

  if (trendingCategory) {
    for (let i = 0; i < createdSeries.length; i++) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: createdSeries[i].id,
          categoryId: trendingCategory.id,
          order: (i + 1) * 2,
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
