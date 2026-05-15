// Admin Backend Seed Script
// This script can be used to seed admin-specific data if needed

const { PrismaClient } = require('./generated/prisma/index.js');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Admin Backend Seed Started...');

  // Check if super admin exists
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: 'admin@ottplatform.com' }
  });

  if (!existingAdmin) {
    console.log('🔧 Creating default super admin...');
    const bcrypt = require('bcryptjs');
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
    console.log('✅ Created default super admin:');
    console.log('   Email: admin@ottplatform.com');
    console.log('   Password: admin123 (CHANGE THIS IN PRODUCTION!)');
  } else {
    console.log('ℹ️  Super admin already exists, skipping creation');
  }

  console.log('🎉 Admin Backend Seed Completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
