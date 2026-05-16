import { PrismaClient } from './generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

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
  console.log('💳 Seeding subscription plans...');
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
    const created = await prisma.subscriptionPlan.upsert({
      where: { slug: plan.slug },
      update: {},
      create: plan,
    });
    console.log(`  ✅ ${plan.name} plan created/updated`);
  }
}

async function main() {
  console.log('🌱 Admin Backend Seed Started...');
  try {
    await seedAdmin();
    await seedPlans();
    console.log('🎉 Admin Backend Seed Completed!');
  } catch (e) {
    console.error('❌ Error during admin seed:', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();
