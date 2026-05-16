import { PrismaClient } from './generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

async function seedUsers() {
  console.log('\n📝 Seeding users...');

  const adminPassword = await hashPassword('Admin@123');
  const admin = await prisma.user.upsert({
    where: { email: 'admin@ottadda.demo' },
    update: {},
    create: {
      email: 'admin@ottadda.demo',
      passwordHash: adminPassword,
      name: 'OTT Admin',
      role: 'ADMIN',
      isActive: true,
    },
  });
  console.log('  ✅ Admin user created/updated');

  const subscriberPassword = await hashPassword('User@123');
  const subscriber = await prisma.user.upsert({
    where: { email: 'user@ottadda.demo' },
    update: {},
    create: {
      email: 'user@ottadda.demo',
      passwordHash: subscriberPassword,
      name: 'Demo User',
      role: 'USER',
      isActive: true,
    },
  });
  console.log('  ✅ Subscriber user created/updated');

  const freePassword = await hashPassword('Free@123');
  const freeUser = await prisma.user.upsert({
    where: { email: 'free@ottadda.demo' },
    update: {},
    create: {
      email: 'free@ottadda.demo',
      passwordHash: freePassword,
      name: 'Free User',
      role: 'USER',
      isActive: true,
    },
  });
  console.log('  ✅ Free user created/updated');

  return { admin, subscriber, freeUser };
}

async function seedSubscriptionPlans() {
  console.log('\n💳 Seeding subscription plans...');

  const plans = [
    {
      name: 'Monthly',
      slug: 'monthly',
      priceInPaise: 19900,
      durationDays: 30,
      features: ['Unlimited HD', 'All Series', 'Watch on any device'],
    },
    {
      name: 'Quarterly',
      slug: 'quarterly',
      priceInPaise: 49900,
      durationDays: 90,
      features: ['Unlimited HD', 'All Series', 'Download episodes', 'Priority support'],
    },
    {
      name: 'Annual',
      slug: 'annual',
      priceInPaise: 149900,
      durationDays: 365,
      features: ['Unlimited 4K', 'All Series', 'Offline downloads', 'Family sharing'],
    },
  ];

  const createdPlans = [];
  for (const plan of plans) {
    const created = await prisma.subscriptionPlan.upsert({
      where: { slug: plan.slug },
      update: {},
      create: plan,
    });
    createdPlans.push(created);
    console.log(`  ✅ ${plan.name} plan created/updated`);
  }

  return createdPlans;
}

async function seedUserSubscription(subscriber: any, monthlyPlan: any) {
  console.log('\n📅 Seeding user subscription...');

  const now = new Date();
  const endDate = new Date(now.getTime() + monthlyPlan.durationDays * 24 * 60 * 60 * 1000);

  await prisma.userSubscription.upsert({
    where: { userId: subscriber.id },
    update: {},
    create: {
      userId: subscriber.id,
      planId: monthlyPlan.id,
      status: 'ACTIVE',
      startDate: now,
      endDate: endDate,
    },
  });
  console.log('  ✅ Subscriber added to monthly plan');
}

async function seedCategories() {
  console.log('\n📂 Seeding categories...');

  const categories = [
    { name: 'Top Picks', slug: 'top-picks', displayOrder: 1, isAutomatic: false },
    { name: 'Recommended', slug: 'recommended', displayOrder: 2, isAutomatic: false },
    { name: 'New Releases', slug: 'new-releases', displayOrder: 3, isAutomatic: true },
    { name: 'Upcoming', slug: 'upcoming', displayOrder: 4, isAutomatic: true },
    { name: 'Trending', slug: 'trending', displayOrder: 5, isAutomatic: true },
  ];

  const createdCategories = [];
  for (const cat of categories) {
    const created = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
    createdCategories.push(created);
  }
  console.log(`  ✅ Created ${createdCategories.length} categories`);

  return createdCategories;
}

async function seedSeries() {
  console.log('\n📺 Seeding series...');

  const series = [
    {
      title: 'Love in Mumbai',
      slug: 'love-in-mumbai',
      genres: ['Romance', 'Drama'],
      status: 'ACTIVE' as const,
      releaseDate: new Date('2024-01-15'),
      viewCount: 1240,
      isFeatured: true,
      description: 'A heartwarming love story set in the city of dreams.',
    },
    {
      title: 'The Hidden Truth',
      slug: 'the-hidden-truth',
      genres: ['Thriller', 'Drama'],
      status: 'ACTIVE' as const,
      releaseDate: new Date('2024-02-01'),
      viewCount: 890,
      description: 'Dark secrets unfold in this gripping thriller.',
    },
    {
      title: 'College Diaries',
      slug: 'college-diaries',
      genres: ['Comedy', 'Romance'],
      status: 'ACTIVE' as const,
      releaseDate: new Date('2024-03-10'),
      viewCount: 2100,
      description: 'Fun, love, and chaos — the college years.',
    },
    {
      title: 'Shadows of Power',
      slug: 'shadows-of-power',
      genres: ['Action', 'Thriller'],
      status: 'UPCOMING' as const,
      releaseDate: new Date('2025-08-01'),
      viewCount: 0,
      description: 'Power corrupts. Secrets destroy.',
    },
  ];

  const createdSeries = [];
  for (const s of series) {
    const created = await prisma.series.upsert({
      where: { slug: s.slug },
      update: {},
      create: s,
    });
    createdSeries.push(created);
  }
  console.log(`  ✅ Created ${createdSeries.length} series`);

  return createdSeries;
}

async function seedEpisodes(series: any[]) {
  console.log('\n🎬 Seeding episodes...');

  // Only seed episodes for active series (first 3)
  let episodeCount = 0;
  for (const s of series.slice(0, 3)) {
    const episodes = [
      { episodeNumber: 1, title: 'Pilot', isFree: true, status: 'PROCESSING' as const },
      { episodeNumber: 2, title: 'Rising Tension', isFree: false, status: 'PROCESSING' as const },
      { episodeNumber: 3, title: 'Turning Point', isFree: false, status: 'PROCESSING' as const },
    ];

    for (const ep of episodes) {
      const existing = await prisma.episode.findFirst({
        where: { seriesId: s.id, episodeNumber: ep.episodeNumber },
      });

      if (!existing) {
        await prisma.episode.create({
          data: {
            seriesId: s.id,
            title: `${s.title} - ${ep.title}`,
            episodeNumber: ep.episodeNumber,
            description: `${ep.title} - Episode ${ep.episodeNumber} of ${s.title}`,
            durationSeconds: 0,
            isFree: ep.isFree,
            status: ep.status,
          },
        });
        episodeCount++;
      }
    }
  }
  console.log(`  ✅ Created ${episodeCount} episodes`);
}

async function seedSeriesCategories(series: any[], categories: any[]) {
  console.log('\n🏷️  Seeding series-category mappings...');

  const topPicks = categories.find((c) => c.slug === 'top-picks');
  const recommended = categories.find((c) => c.slug === 'recommended');

  if (topPicks) {
    const loveInMumbai = series.find((s) => s.slug === 'love-in-mumbai');
    const collegeDiaries = series.find((s) => s.slug === 'college-diaries');

    if (loveInMumbai) {
      await prisma.seriesCategory.upsert({
        where: { seriesId_categoryId: { seriesId: loveInMumbai.id, categoryId: topPicks.id } },
        update: {},
        create: { seriesId: loveInMumbai.id, categoryId: topPicks.id, displayOrder: 1 },
      });
    }
    if (collegeDiaries) {
      await prisma.seriesCategory.upsert({
        where: { seriesId_categoryId: { seriesId: collegeDiaries.id, categoryId: topPicks.id } },
        update: {},
        create: { seriesId: collegeDiaries.id, categoryId: topPicks.id, displayOrder: 2 },
      });
    }
  }

  if (recommended) {
    const hiddenTruth = series.find((s) => s.slug === 'the-hidden-truth');
    const collegeDiaries = series.find((s) => s.slug === 'college-diaries');

    if (hiddenTruth) {
      await prisma.seriesCategory.upsert({
        where: { seriesId_categoryId: { seriesId: hiddenTruth.id, categoryId: recommended.id } },
        update: {},
        create: { seriesId: hiddenTruth.id, categoryId: recommended.id, displayOrder: 1 },
      });
    }
    if (collegeDiaries) {
      await prisma.seriesCategory.upsert({
        where: { seriesId_categoryId: { seriesId: collegeDiaries.id, categoryId: recommended.id } },
        update: {},
        create: { seriesId: collegeDiaries.id, categoryId: recommended.id, displayOrder: 2 },
      });
    }
  }
  console.log('  ✅ Series added to categories');
}

async function main() {
  console.log('\n🌱 OTT Platform Seed Started...\n');

  try {
    const { admin, subscriber, freeUser } = await seedUsers();
    const plans = await seedSubscriptionPlans();
    const monthlyPlan = plans.find((p) => p.slug === 'monthly');

    if (monthlyPlan) {
      await seedUserSubscription(subscriber, monthlyPlan);
    }

    const categories = await seedCategories();
    const series = await seedSeries();
    await seedEpisodes(series);
    await seedSeriesCategories(series, categories);

    console.log('\n✅ Seed complete!');
    console.log('Admin: admin@ottadda.demo / Admin@123');
    console.log('Subscriber: user@ottadda.demo / User@123');
    console.log('Free: free@ottadda.demo / Free@123\n');
  } catch (e) {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
