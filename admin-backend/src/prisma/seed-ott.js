// Seed categories for OTT platform
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

async function seedCategories() {
  console.log('🏷️  Seeding categories...');
  const categories = [
    { name: 'Top Picks', slug: 'top-picks', description: 'Hand-picked best content', displayOrder: 1, isActive: true },
    { name: 'Recommended', slug: 'recommended', description: 'Personalized recommendations', displayOrder: 2, isActive: true },
    { name: 'New Releases', slug: 'new-releases', description: 'Latest additions to the platform', displayOrder: 3, isActive: true },
    { name: 'Upcoming', slug: 'upcoming', description: 'Coming soon releases', displayOrder: 4, isActive: true },
    { name: 'Trending', slug: 'trending', description: 'Popular right now', displayOrder: 5, isActive: true },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
    console.log(`  ✅ ${category.name} category created/updated`);
  }
}

async function seedAdmin() {
  console.log('🔧 Checking/creating default super admin...');
  const existingAdmin = await prisma.admin.findUnique({ where: { email: 'admin@ottplatform.com' } });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.admin.create({
      data: {
        email: 'admin@ottplatform.com',
        password: hashedPassword,
        firstName: 'Super',
        lastName: 'Admin',
        role: 'SUPER_ADMIN',
        isActive: true,
      },
    });
    console.log('✅ Created default super admin (admin@ottplatform.com)');
  } else {
    console.log('ℹ️  Super admin already exists, skipping');
  }
}

async function seedPlans() {
  console.log('💰 Seeding subscription plans...');
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

  for (const plan of plans) {
    await prisma.subscriptionPlan.upsert({
      where: { slug: plan.slug },
      update: {},
      create: plan,
    });
    console.log(`  ✅ ${plan.name} plan created/updated`);
  }
}

async function main() {
  console.log('🌱 OTT Platform Seed Started...');
  try {
    await seedAdmin();
    await seedPlans();
    await seedCategories();
    console.log('🎉 OTT Platform Seed Completed!');
  } catch (e) {
    console.error('❌ Error during seed:', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();
