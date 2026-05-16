// Comprehensive OTT Platform Seed Script
import { PrismaClient } from './generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:ott_db_pass@localhost:5432/ott_platform_db';

const adapter = new PrismaPg({
  connectionString,
  max: 10,
  connectionTimeoutMillis: 30000,
});

const prisma = new PrismaClient({ adapter });

async function seedAll() {
  console.log('🎬 Starting comprehensive OTT platform seed...');

  try {
    // 1. Seed Admin
    await seedAdmin();

    // 2. Seed Subscription Plans
    await seedPlans();

    // 3. Seed Categories
    await seedCategories();

    // 4. Seed Users
    await seedUsers();

    // 5. Seed Series
    await seedSeries();

    // 6. Seed Episodes
    await seedEpisodes();

    // 7. Seed Payments
    await seedPayments();

    // 8. Seed Watch Data
    await seedWatchData();

    console.log('🎉 Comprehensive seed completed successfully!');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

async function seedAdmin() {
  console.log('🔧 Seeding admin...');
  const hashedPassword = await bcrypt.hash('admin123', 10);

  await prisma.admin.upsert({
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

  await prisma.admin.upsert({
    where: { email: 'editor@ottplatform.com' },
    update: {},
    create: {
      email: 'editor@ottplatform.com',
      password: hashedPassword,
      firstName: 'Content',
      lastName: 'Editor',
      role: 'ADMIN',
      isActive: true,
    },
  });

  console.log('✅ Admin users seeded');
}

async function seedPlans() {
  console.log('💰 Seeding subscription plans...');

  const plans = [
    {
      name: 'Free',
      slug: 'free',
      priceInPaise: 0,
      durationDays: 30,
      features: ['Limited content access', 'Ads included', 'SD quality only'],
    },
    {
      name: 'Monthly',
      slug: 'monthly',
      priceInPaise: 19900,
      durationDays: 30,
      features: ['Unlimited HD content', 'All Series & Movies', 'No ads', '2 devices'],
    },
    {
      name: 'Quarterly',
      slug: 'quarterly',
      priceInPaise: 49900,
      durationDays: 90,
      features: ['Unlimited HD content', 'All Series & Movies', 'No ads', '4 devices', 'Downloads'],
    },
    {
      name: 'Annual',
      slug: 'annual',
      priceInPaise: 149900,
      durationDays: 365,
      features: ['Unlimited 4K content', 'All Series & Movies', 'No ads', '6 devices', 'Downloads', 'Family sharing'],
    },
  ];

  for (const plan of plans) {
    await prisma.subscriptionPlan.upsert({
      where: { slug: plan.slug },
      update: {},
      create: plan,
    });
  }

  console.log('✅ Subscription plans seeded');
}

async function seedCategories() {
  console.log('🏷️  Seeding categories...');

  const categories = [
    { name: 'Top Picks', slug: 'top-picks', description: 'Hand-picked best content', displayOrder: 1, isActive: true },
    { name: 'Recommended', slug: 'recommended', description: 'Personalized recommendations', displayOrder: 2, isActive: true },
    { name: 'New Releases', slug: 'new-releases', description: 'Latest additions to the platform', displayOrder: 3, isActive: true },
    { name: 'Upcoming', slug: 'upcoming', description: 'Coming soon releases', displayOrder: 4, isActive: true },
    { name: 'Trending', slug: 'trending', description: 'Popular right now', displayOrder: 5, isActive: true },
    { name: 'Action', slug: 'action', description: 'High-octane action content', displayOrder: 6, isActive: true },
    { name: 'Drama', slug: 'drama', description: 'Emotional and dramatic stories', displayOrder: 7, isActive: true },
    { name: 'Comedy', slug: 'comedy', description: 'Laugh-out-loud entertainment', displayOrder: 8, isActive: true },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  console.log('✅ Categories seeded');
}

async function seedUsers() {
  console.log('👥 Seeding users...');

  const sampleUsers = [
    {
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      phone: '+919876543210',
      country: 'India',
      language: 'en',
    },
    {
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      phone: '+919876543211',
      country: 'India',
      language: 'en',
    },
    {
      email: 'mike.johnson@example.com',
      firstName: 'Mike',
      lastName: 'Johnson',
      phone: '+919876543212',
      country: 'India',
      language: 'en',
    },
    {
      email: 'sarah.williams@example.com',
      firstName: 'Sarah',
      lastName: 'Williams',
      phone: '+919876543213',
      country: 'India',
      language: 'en',
    },
    {
      email: 'david.brown@example.com',
      firstName: 'David',
      lastName: 'Brown',
      phone: '+919876543214',
      country: 'India',
      language: 'en',
    },
  ];

  const hashedPassword = await bcrypt.hash('user123', 10);

  for (const user of sampleUsers) {
    const createdUser = await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        passwordHash: hashedPassword,
        phone: user.phone,
        role: 'USER',
        isActive: true,
        emailVerified: true,
        lastLoginAt: new Date(),
      },
    });

    // Create user profile
    await prisma.userProfile.upsert({
      where: { userId: createdUser.id },
      update: {},
      create: {
        userId: createdUser.id,
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: `${user.firstName} ${user.lastName}`,
        country: user.country,
        language: user.language,
      },
    });

    // Create subscription for some users
    if (user.email === 'john.doe@example.com') {
      const annualPlan = await prisma.subscriptionPlan.findUnique({ where: { slug: 'annual' } });
      if (annualPlan) {
        await prisma.userSubscription.upsert({
          where: { userId: createdUser.id },
          update: {},
          create: {
            userId: createdUser.id,
            planId: annualPlan.id,
            status: 'ACTIVE',
            startDate: new Date(),
            endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
          },
        });
      }
    } else if (user.email === 'jane.smith@example.com') {
      const monthlyPlan = await prisma.subscriptionPlan.findUnique({ where: { slug: 'monthly' } });
      if (monthlyPlan) {
        await prisma.userSubscription.upsert({
          where: { userId: createdUser.id },
          update: {},
          create: {
            userId: createdUser.id,
            planId: monthlyPlan.id,
            status: 'ACTIVE',
            startDate: new Date(),
            endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          },
        });
      }
    }
  }

  console.log('✅ Users seeded');
}

async function seedSeries() {
  console.log('🎬 Seeding series...');

  const seriesData = [
    {
      title: 'Crime Patrol',
      slug: 'crime-patrol',
      description: 'India\'s most watched crime reality show that brings to the audience the stories of real life crimes.',
      genres: ['Crime', 'Reality', 'Drama'],
      status: 'ACTIVE',
      releaseDate: new Date('2024-01-01'),
      isFeatured: true,
      viewCount: 150000,
      thumbnailUrl: 'https://example.com/thumbnails/crime-patrol.jpg',
      bannerUrl: 'https://example.com/banners/crime-patrol.jpg',
    },
    {
      title: 'Mahabharat',
      slug: 'mahabharat',
      description: 'The epic tale of the Kurukshetra War and the fates of the Kaurava and the Pandava princes.',
      genres: ['Mythology', 'Drama', 'History'],
      status: 'ACTIVE',
      releaseDate: new Date('2024-02-01'),
      isFeatured: true,
      viewCount: 250000,
      thumbnailUrl: 'https://example.com/thumbnails/mahabharat.jpg',
      bannerUrl: 'https://example.com/banners/mahabharat.jpg',
    },
    {
      title: 'Naagin',
      slug: 'naagin',
      description: 'A supernatural thriller series about a shape-shifting serpent woman seeking revenge.',
      genres: ['Supernatural', 'Thriller', 'Romance'],
      status: 'ACTIVE',
      releaseDate: new Date('2024-03-01'),
      isFeatured: true,
      viewCount: 300000,
      thumbnailUrl: 'https://example.com/thumbnails/naagin.jpg',
      bannerUrl: 'https://example.com/banners/naagin.jpg',
    },
    {
      title: 'Yeh Rishta Kya Kehlata Hai',
      slug: 'yeh-rishta-kya-kehlata-hai',
      description: 'A family drama that explores relationships, traditions, and modern values in Indian households.',
      genres: ['Drama', 'Family', 'Romance'],
      status: 'ACTIVE',
      releaseDate: new Date('2024-04-01'),
      isFeatured: false,
      viewCount: 200000,
      thumbnailUrl: 'https://example.com/thumbnails/yeh-rishta.jpg',
      bannerUrl: 'https://example.com/banners/yeh-rishta.jpg',
    },
    {
      title: 'Bigg Boss',
      slug: 'bigg-boss',
      description: 'India\'s most controversial reality show where celebrities live together and compete for the title.',
      genres: ['Reality', 'Drama', 'Entertainment'],
      status: 'ACTIVE',
      releaseDate: new Date('2024-05-01'),
      isFeatured: true,
      viewCount: 400000,
      thumbnailUrl: 'https://example.com/thumbnails/bigg-boss.jpg',
      bannerUrl: 'https://example.com/banners/bigg-boss.jpg',
    },
    {
      title: 'Kundali Bhagya',
      slug: 'kundali-bhagya',
      description: 'A romantic drama series about destiny, love, and family bonds.',
      genres: ['Romance', 'Drama', 'Family'],
      status: 'ACTIVE',
      releaseDate: new Date('2024-06-01'),
      isFeatured: false,
      viewCount: 180000,
      thumbnailUrl: 'https://example.com/thumbnails/kundali-bhagya.jpg',
      bannerUrl: 'https://example.com/banners/kundali-bhagya.jpg',
    },
    {
      title: 'Taarak Mehta Ka Ooltah Chashmah',
      slug: 'taarak-mehta-ka-ooltah-chashmah',
      description: 'India\'s longest running comedy show about the daily lives of residents in Gokuldham Society.',
      genres: ['Comedy', 'Family', 'Entertainment'],
      status: 'ACTIVE',
      releaseDate: new Date('2024-07-01'),
      isFeatured: true,
      viewCount: 350000,
      thumbnailUrl: 'https://example.com/thumbnails/taarak-mehta.jpg',
      bannerUrl: 'https://example.com/banners/taarak-mehta.jpg',
    },
    {
      title: 'The Kapil Sharma Show',
      slug: 'the-kapil-sharma-show',
      description: 'A comedy talk show featuring celebrity interviews, stand-up comedy, and entertaining performances.',
      genres: ['Comedy', 'Entertainment', 'Talk Show'],
      status: 'ACTIVE',
      releaseDate: new Date('2024-08-01'),
      isFeatured: false,
      viewCount: 280000,
      thumbnailUrl: 'https://example.com/thumbnails/kapil-sharma.jpg',
      bannerUrl: 'https://example.com/banners/kapil-sharma.jpg',
    },
    {
      title: 'Indian Idol',
      slug: 'indian-idol',
      description: 'India\'s most popular singing competition where talented singers compete for the title.',
      genres: ['Reality', 'Music', 'Competition'],
      status: 'ACTIVE',
      releaseDate: new Date('2024-09-01'),
      isFeatured: false,
      viewCount: 220000,
      thumbnailUrl: 'https://example.com/thumbnails/indian-idol.jpg',
      bannerUrl: 'https://example.com/banners/indian-idol.jpg',
    },
    {
      title: 'Roadies',
      slug: 'roadies',
      description: 'An adventure reality show where contestants compete in extreme physical and mental challenges.',
      genres: ['Reality', 'Adventure', 'Competition'],
      status: 'ACTIVE',
      releaseDate: new Date('2024-10-01'),
      isFeatured: false,
      viewCount: 190000,
      thumbnailUrl: 'https://example.com/thumbnails/roadies.jpg',
      bannerUrl: 'https://example.com/banners/roadies.jpg',
    },
  ];

  for (const series of seriesData) {
    const created = await prisma.series.upsert({
      where: { slug: series.slug },
      update: {},
      create: series,
    });

    // Add to categories
    const categories = await prisma.category.findMany();
    const topPicks = categories.find(c => c.slug === 'top-picks');
    const trending = categories.find(c => c.slug === 'trending');
    const newReleases = categories.find(c => c.slug === 'new-releases');
    const action = categories.find(c => c.slug === 'action');
    const drama = categories.find(c => c.slug === 'drama');
    const comedy = categories.find(c => c.slug === 'comedy');

    if (series.isFeatured && topPicks) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: created.id,
          categoryId: topPicks.id,
          displayOrder: 1,
        },
      });
    }

    if (series.viewCount > 300000 && trending) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: created.id,
          categoryId: trending.id,
          displayOrder: 1,
        },
      });
    }

    if (newReleases) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: created.id,
          categoryId: newReleases.id,
          displayOrder: 1,
        },
      });
    }

    if (series.genres.includes('Crime') && action) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: created.id,
          categoryId: action.id,
          displayOrder: 1,
        },
      });
    }

    if (series.genres.includes('Drama') && drama) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: created.id,
          categoryId: drama.id,
          displayOrder: 1,
        },
      });
    }

    if (series.genres.includes('Comedy') && comedy) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: created.id,
          categoryId: comedy.id,
          displayOrder: 1,
        },
      });
    }

    console.log(`  ✅ ${series.title} created`);
  }

  console.log('✅ Series seeded');
}

async function seedEpisodes() {
  console.log('📹 Seeding episodes...');

  const allSeries = await prisma.series.findMany();

  for (const series of allSeries) {
    const episodeCount = Math.floor(Math.random() * 10) + 5; // 5-15 episodes

    for (let i = 1; i <= episodeCount; i++) {
      const isFree = i <= 2; // First 2 episodes are free
      const duration = Math.floor(Math.random() * 30) + 20; // 20-50 minutes

      await prisma.episode.create({
        data: {
          seriesId: series.id,
          episodeNumber: i,
          title: `${series.title} - Episode ${i}`,
          description: `Exciting episode ${i} of ${series.title}. ${isFree ? 'This episode is available for free preview.' : 'Subscribe to watch this episode.'}`,
          thumbnailUrl: `https://example.com/thumbnails/${series.slug}-ep${i}.jpg`,
          durationSeconds: duration * 60,
          isFree: isFree,
          viewCount: Math.floor(Math.random() * 50000) + 10000,
          status: 'READY',
        },
      });
    }

    // Update series episode count
    await prisma.series.update({
      where: { id: series.id },
      data: { totalEpisodes: episodeCount },
    });

    console.log(`  ✅ ${series.title} - ${episodeCount} episodes`);
  }

  console.log('✅ Episodes seeded');
}

async function seedPayments() {
  console.log('💳 Seeding payments...');

  const users = await prisma.user.findMany({
    where: { isActive: true },
    include: { subscription: true },
  });

  const plans = await prisma.subscriptionPlan.findMany({
    where: { slug: { in: ['monthly', 'quarterly', 'annual'] } },
  });

  for (const user of users) {
    if (!user.subscription) {
      const randomPlan = plans[Math.floor(Math.random() * plans.length)];

      await prisma.payment.create({
        data: {
          userId: user.id,
          planId: randomPlan.id,
          amountInPaise: randomPlan.priceInPaise,
          currency: 'INR',
          status: 'SUCCESS',
          razorpayOrderId: `order_${Date.now()}_${user.id}`,
          razorpayPaymentId: `pay_${Date.now()}_${user.id}`,
          razorpaySignature: 'signature_' + Math.random().toString(36).substring(7),
          paidAt: new Date(),
        },
      });

      console.log(`  ✅ Payment created for ${user.email}`);
    }
  }

  console.log('✅ Payments seeded');
}

async function seedWatchData() {
  console.log('👁️  Seeding watch data...');

  const users = await prisma.user.findMany({ where: { isActive: true } });
  const episodes = await prisma.episode.findMany({
    include: { series: true },
    take: 20, // Limit to 20 episodes
  });

  for (const user of users) {
    const watchedEpisodes = episodes.slice(0, Math.floor(Math.random() * 10) + 5);

    for (const episode of watchedEpisodes) {
      const isCompleted = Math.random() > 0.3; // 70% chance of being completed
      const duration = episode.durationSeconds || 3000;
      const progress = isCompleted ? duration : Math.floor(Math.random() * duration);

      await prisma.watchHistory.create({
        data: {
          userId: user.id,
          episodeId: episode.id,
          seriesId: episode.seriesId,
          progressSeconds: progress,
          durationSeconds: duration,
          isCompleted: isCompleted,
          watchedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date within last 30 days
        },
      });
    }

    // Add some to watch list
    const watchListSeries = episodes.slice(0, Math.floor(Math.random() * 5) + 3);
    for (const episode of watchListSeries) {
      try {
        await prisma.watchList.create({
          data: {
            userId: user.id,
            seriesId: episode.seriesId,
          },
        });
      } catch (error) {
        // Ignore duplicates
      }
    }

    console.log(`  ✅ Watch data created for ${user.email}`);
  }

  console.log('✅ Watch data seeded');
}

seedAll().catch((error) => {
  console.error(error);
  process.exit(1);
});