// Complete OTT Platform Seed Script
// Creates dummy data for Series, Episodes, Categories, Subscription Plans, and Users

const { PrismaClient } = require("./generated/prisma/index.js");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 OTT Platform Seed Started...");

  // Check if data already exists
  const existingSeries = await prisma.series.count();
  if (existingSeries > 0) {
    console.log("ℹ️  Data already exists, skipping seed");
    return;
  }

  // Create Subscription Plans
  console.log("📦 Creating subscription plans...");
  const freePlan = await prisma.subscriptionPlan.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Free",
      description: "Basic access with ads",
      type: "FREE",
      price: 0,
      currency: "INR",
      durationDays: 365,
      features: JSON.stringify([
        "Limited content access",
        "Ads included",
        "Standard quality",
      ]),
      isActive: true,
    },
  });

  const monthlyPlan = await prisma.subscriptionPlan.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Monthly Premium",
      description: "Full access for one month",
      type: "MONTHLY",
      price: 299,
      currency: "INR",
      durationDays: 30,
      features: JSON.stringify([
        "Full content access",
        "No ads",
        "HD quality",
        "4 devices",
        "Download for offline",
      ]),
      isActive: true,
    },
  });

  const yearlyPlan = await prisma.subscriptionPlan.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "Yearly Premium",
      description: "Full access for one year - Save 50%",
      type: "YEARLY",
      price: 2999,
      currency: "INR",
      durationDays: 365,
      features: JSON.stringify([
        "Full content access",
        "No ads",
        "4K quality",
        "4 devices",
        "Download for offline",
        "Early access",
      ]),
      isActive: true,
    },
  });

  console.log("✅ Created subscription plans:", {
    free: freePlan.name,
    monthly: monthlyPlan.name,
    yearly: yearlyPlan.name,
  });

  // Create Categories
  console.log("🏷️  Creating categories...");
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Top Picks",
        slug: "top-picks",
        type: "TOP_PICKS",
        description: "Our highest rated and most watched content",
        isActive: true,
        order: 1,
        iconUrl: "🔥",
      },
    }),
    prisma.category.create({
      data: {
        name: "Recommended",
        slug: "recommended",
        type: "RECOMMENDED",
        description: "Personalized recommendations for you",
        isActive: true,
        order: 2,
        iconUrl: "⭐",
      },
    }),
    prisma.category.create({
      data: {
        name: "New Releases",
        slug: "new-releases",
        type: "NEW_RELEASES",
        description: "Fresh content just released",
        isActive: true,
        order: 3,
        iconUrl: "🆕",
      },
    }),
    prisma.category.create({
      data: {
        name: "Upcoming",
        slug: "upcoming",
        type: "UPCOMING",
        description: "Coming soon to our platform",
        isActive: true,
        order: 4,
        iconUrl: "🎬",
      },
    }),
    prisma.category.create({
      data: {
        name: "Trending",
        slug: "trending",
        type: "TRENDING",
        description: "What everyone is watching right now",
        isActive: true,
        order: 5,
        iconUrl: "📈",
      },
    }),
    prisma.category.create({
      data: {
        name: "Action & Adventure",
        slug: "action-adventure",
        type: "CUSTOM",
        description: "Exciting action and adventure content",
        isActive: true,
        order: 6,
        iconUrl: "💥",
      },
    }),
    prisma.category.create({
      data: {
        name: "Drama",
        slug: "drama",
        type: "CUSTOM",
        description: "Emotional and dramatic storytelling",
        isActive: true,
        order: 7,
        iconUrl: "🎭",
      },
    }),
    prisma.category.create({
      data: {
        name: "Comedy",
        slug: "comedy",
        type: "CUSTOM",
        description: "Light-hearted and funny content",
        isActive: true,
        order: 8,
        iconUrl: "😂",
      },
    }),
  ]);

  console.log(`✅ Created ${categories.length} categories`);

  // Create Series
  console.log("📺 Creating series...");
  const seriesData = [
    {
      title: "Midnight Detective",
      slug: "midnight-detective",
      description:
        "A brilliant detective solves complex crimes in the dark underbelly of the city, uncovering corruption and conspiracies that reach the highest levels of power.",
      bannerUrl:
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
      backdropUrl:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=600&fit=crop",
      trailerUrl: "https://example.com/trailers/midnight-detective.mp4",
      releaseDate: new Date("2024-01-15"),
      status: "PUBLISHED",
      type: "SERIES",
      language: "English",
      duration: 45,
      rating: 4.8,
      ratingCount: 1250,
      genres: JSON.stringify(["Crime", "Mystery", "Thriller"]),
      tags: JSON.stringify(["Detective", "Crime", "Suspense"]),
      cast: JSON.stringify(["John Doe", "Jane Smith", "Michael Brown"]),
      crew: JSON.stringify([
        "Director: Robert Wilson",
        "Writer: Sarah Johnson",
      ]),
      metadata: JSON.stringify({
        network: "HBO",
        productionCompany: "Warner Bros",
      }),
      ageRating: "TV-MA",
      isPremium: true,
      isFeatured: true,
    },
    {
      title: "The Last Kingdom",
      slug: "the-last-kingdom",
      description:
        "Set in the 9th century, this epic series follows the adventures of Uhtred of Bebbanburg, a Saxon noble who is captured and raised by Vikings.",
      bannerUrl:
        "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop",
      backdropUrl:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=1200&h=600&fit=crop",
      trailerUrl: "https://example.com/trailers/last-kingdom.mp4",
      releaseDate: new Date("2024-02-20"),
      status: "PUBLISHED",
      type: "SERIES",
      language: "English",
      duration: 50,
      rating: 4.9,
      ratingCount: 2100,
      genres: JSON.stringify(["Action", "Drama", "History"]),
      tags: JSON.stringify(["Medieval", "Vikings", "War", "Kingdom"]),
      cast: JSON.stringify(["Alexander Dreymon", "Emily Cox", "David Dawson"]),
      crew: JSON.stringify([
        "Director: Nigel Marchant",
        "Writer: Stephen Butchard",
      ]),
      metadata: JSON.stringify({
        network: "Netflix",
        productionCompany: "BBC",
      }),
      ageRating: "TV-14",
      isPremium: true,
      isFeatured: true,
    },
    {
      title: "Cosmic Horizons",
      slug: "cosmic-horizons",
      description:
        "A stunning documentary series exploring the mysteries of the universe, from black holes to distant galaxies and the search for extraterrestrial life.",
      bannerUrl:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop",
      backdropUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      trailerUrl: "https://example.com/trailers/cosmic-horizons.mp4",
      releaseDate: new Date("2024-03-10"),
      status: "PUBLISHED",
      type: "DOCUMENTARY",
      language: "English",
      duration: 60,
      rating: 4.7,
      ratingCount: 890,
      genres: JSON.stringify(["Documentary", "Science", "Space"]),
      tags: JSON.stringify(["Space", "Science", "Universe", "Documentary"]),
      cast: JSON.stringify(["Neil deGrasse Tyson"]),
      crew: JSON.stringify(["Director: Ann Druyan", "Writer: Steven Soter"]),
      metadata: JSON.stringify({
        network: "National Geographic",
        productionCompany: "Cosmos Studios",
      }),
      ageRating: "TV-PG",
      isPremium: false,
      isFeatured: false,
    },
    {
      title: "City Lights",
      slug: "city-lights",
      description:
        "A heartwarming romantic comedy about two strangers who meet in a bustling city and discover that love can bloom in the most unexpected places.",
      bannerUrl:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=600&fit=crop",
      backdropUrl:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=600&fit=crop",
      trailerUrl: "https://example.com/trailers/city-lights.mp4",
      releaseDate: new Date("2024-04-05"),
      status: "PUBLISHED",
      type: "SERIES",
      language: "English",
      duration: 30,
      rating: 4.5,
      ratingCount: 650,
      genres: JSON.stringify(["Comedy", "Romance", "Drama"]),
      tags: JSON.stringify(["Romance", "Comedy", "City Life", "Love"]),
      cast: JSON.stringify(["Emma Stone", "Ryan Gosling"]),
      crew: JSON.stringify([
        "Director: Damien Chazelle",
        "Writer: Emma Thompson",
      ]),
      metadata: JSON.stringify({
        network: "HBO Max",
        productionCompany: "Warner Bros",
      }),
      ageRating: "TV-PG",
      isPremium: false,
      isFeatured: false,
    },
    {
      title: "Shadow Protocol",
      slug: "shadow-protocol",
      description:
        "A high-tech thriller about a cyber-security expert who uncovers a global conspiracy while investigating a series of mysterious data breaches.",
      bannerUrl:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
      backdropUrl:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
      trailerUrl: "https://example.com/trailers/shadow-protocol.mp4",
      releaseDate: new Date("2024-05-15"),
      status: "PUBLISHED",
      type: "SERIES",
      language: "English",
      duration: 42,
      rating: 4.6,
      ratingCount: 980,
      genres: JSON.stringify(["Thriller", "Sci-Fi", "Action"]),
      tags: JSON.stringify([
        "Cybersecurity",
        "Conspiracy",
        "Technology",
        "Thriller",
      ]),
      cast: JSON.stringify(["Keanu Reeves", "Carrie-Anne Moss"]),
      crew: JSON.stringify([
        "Director: Lana Wachowski",
        "Writer: Jonathan Nolan",
      ]),
      metadata: JSON.stringify({
        network: "Amazon Prime",
        productionCompany: "Warner Bros",
      }),
      ageRating: "TV-MA",
      isPremium: true,
      isFeatured: true,
    },
  ];

  const createdSeries = await Promise.all(
    seriesData.map((series) => prisma.series.create({ data: series })),
  );

  console.log(`✅ Created ${createdSeries.length} series`);

  // Create Episodes for each series
  console.log("🎬 Creating episodes...");
  const episodes = [];

  for (const series of createdSeries) {
    const episodeCount = series.type === "DOCUMENTARY" ? 6 : 10;
    const episodeDuration = series.duration || 45;

    for (let i = 1; i <= episodeCount; i++) {
      const episode = await prisma.episode.create({
        data: {
          seriesId: series.id,
          season: 1,
          episodeNumber: i,
          title: `Episode ${i}: ${getEpisodeTitle(series.title, i)}`,
          description: `In this episode of ${series.title}, the story continues with unexpected twists and turns that will keep you on the edge of your seat.`,
          duration: episodeDuration + Math.floor(Math.random() * 10),
          thumbnailUrl: `https://images.unsplash.com/photo-${getRandomImageId()}/?w=400&h=225&fit=crop`,
          videoUrl: `https://example.com/videos/${series.slug}/s01e${i.toString().padStart(2, "0")}.mp4`,
          videoType: "HLS",
          status: i <= 3 ? "PUBLISHED" : "DRAFT",
          releaseDate: new Date(
            series.releaseDate.getTime() + (i - 1) * 7 * 24 * 60 * 60 * 1000,
          ),
        },
      });
      episodes.push(episode);
    }
  }

  console.log(`✅ Created ${episodes.length} episodes`);

  // Assign categories to series
  console.log("🔗 Assigning categories to series...");
  const categoryAssignments = [];

  // Assign Top Picks to highly rated series
  const topPicksCategory = categories.find((c) => c.type === "TOP_PICKS");
  const highlyRatedSeries = createdSeries.filter((s) => s.rating >= 4.7);
  for (const series of highlyRatedSeries) {
    await prisma.seriesCategory.create({
      data: {
        seriesId: series.id,
        categoryId: topPicksCategory.id,
        order: categoryAssignments.length,
      },
    });
    categoryAssignments.push({
      series: series.title,
      category: topPicksCategory.name,
    });
  }

  // Assign New Releases to recent series
  const newReleasesCategory = categories.find((c) => c.type === "NEW_RELEASES");
  const recentSeries = createdSeries.filter(
    (s) => s.releaseDate >= new Date("2024-04-01"),
  );
  for (const series of recentSeries) {
    await prisma.seriesCategory.create({
      data: {
        seriesId: series.id,
        categoryId: newReleasesCategory.id,
        order: categoryAssignments.length,
      },
    });
    categoryAssignments.push({
      series: series.title,
      category: newReleasesCategory.name,
    });
  }

  // Assign Upcoming to a series (simulated)
  const upcomingCategory = categories.find((c) => c.type === "UPCOMING");
  await prisma.seriesCategory.create({
    data: {
      seriesId: createdSeries[createdSeries.length - 1].id,
      categoryId: upcomingCategory.id,
      order: 0,
    },
  });
  categoryAssignments.push({
    series: createdSeries[createdSeries.length - 1].title,
    category: upcomingCategory.name,
  });

  // Assign other categories randomly
  const otherCategories = categories.filter(
    (c) => ["TOP_PICKS", "NEW_RELEASES", "UPCOMING"].includes(c.type) === false,
  );

  for (const series of createdSeries) {
    const randomCategories = otherCategories
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 3) + 1);

    for (const category of randomCategories) {
      await prisma.seriesCategory.create({
        data: {
          seriesId: series.id,
          categoryId: category.id,
          order: Math.floor(Math.random() * 10),
        },
      });
      categoryAssignments.push({
        series: series.title,
        category: category.name,
      });
    }
  }

  console.log(`✅ Created ${categoryAssignments.length} category assignments`);

  // Create test users
  console.log("👤 Creating test users...");
  const bcrypt = require("bcryptjs");
  const hashedPassword = await bcrypt.hash("user123", 10);

  const testUsers = await Promise.all([
    prisma.user.create({
      data: {
        email: "test@user.com",
        password: hashedPassword,
        role: "USER",
        isActive: true,
        emailVerified: true,
        profile: {
          create: {
            firstName: "Test",
            lastName: "User",
            displayName: "Test User",
            language: "en",
            country: "US",
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        email: "premium@user.com",
        password: hashedPassword,
        role: "USER",
        isActive: true,
        emailVerified: true,
        subscription: {
          create: {
            planId: monthlyPlan.id,
            status: "ACTIVE",
            startDate: new Date(),
            endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            amount: 299,
            currency: "INR",
            autoRenew: true,
          },
        },
        profile: {
          create: {
            firstName: "Premium",
            lastName: "User",
            displayName: "Premium User",
            language: "en",
            country: "IN",
          },
        },
      },
    }),
  ]);

  console.log(`✅ Created ${testUsers.length} test users`);
  console.log("   Test User: test@user.com / user123");
  console.log("   Premium User: premium@user.com / user123");

  // Create watch history for test users
  console.log("📺 Creating watch history...");
  const watchHistory = [];

  for (const user of testUsers) {
    const randomEpisodes = episodes.sort(() => Math.random() - 0.5).slice(0, 5);
    for (const episode of randomEpisodes) {
      await prisma.watchHistory.create({
        data: {
          userId: user.id,
          seriesId: episode.seriesId,
          episodeId: episode.id,
          watchDuration: Math.floor(Math.random() * episode.duration * 60),
          completed: Math.random() > 0.7,
        },
      });
      watchHistory.push({ user: user.email, episode: episode.title });
    }
  }

  console.log(`✅ Created ${watchHistory.length} watch history entries`);

  console.log("🎉 OTT Platform Seed Completed Successfully!");
  console.log("\n📊 Summary:");
  console.log(`   Series: ${createdSeries.length}`);
  console.log(`   Episodes: ${episodes.length}`);
  console.log(`   Categories: ${categories.length}`);
  console.log(`   Category Assignments: ${categoryAssignments.length}`);
  console.log(`   Subscription Plans: 3`);
  console.log(`   Users: ${testUsers.length}`);
  console.log(`   Watch History: ${watchHistory.length}`);
}

function getEpisodeTitle(seriesTitle, episodeNumber) {
  const titles = {
    "Midnight Detective": [
      "The Beginning",
      "Dark Secrets",
      "Undercover",
      "The Reveal",
      "Betrayal",
      "Conspiracy",
      "The Chase",
      "Truth and Consequences",
      "Final Justice",
      "New Beginning",
    ],
    "The Last Kingdom": [
      "The Last Kingdom",
      "The First King",
      "Warriors",
      "Inheritance",
      "War of the Gods",
      "The Burning Land",
      "The Empty Throne",
      "War of the Wolf",
      "Sword of Kings",
      "War Lord",
    ],
    "Cosmic Horizons": [
      "The Universe Begins",
      "Black Holes",
      "Galaxies",
      "Stars",
      "Exoplanets",
      "The Search for Life",
    ],
    "City Lights": [
      "First Encounter",
      "Coffee Shop",
      "Unexpected Date",
      "Misunderstandings",
      "The Office",
      "Weekend Getaway",
      "Family Matters",
      "The Big Fight",
      "Making Up",
      "Forever After",
    ],
    "Shadow Protocol": [
      "The Breach",
      "Digital Shadows",
      "Code Red",
      "Zero Day",
      "Phantom Network",
      "Data Heist",
      "Firewall",
      "System Failure",
      "Total Recall",
      "Reboot",
    ],
  };

  return titles[seriesTitle]?.[episodeNumber - 1] || `Chapter ${episodeNumber}`;
}

function getRandomImageId() {
  const imageIds = [
    "1517457373958-b7bdd4587205",
    "1542204165-65bf26472b9b",
    "1478720568477-152d9b164e26",
    "1533488765986-dfa2a9939acd",
    "1451187580459-43490279c0fa",
    "1519501025264-65ba15a82390",
    "1489599848419-07a663ef29b1",
    "1536440136628-849c177e76a1",
  ];
  return imageIds[Math.floor(Math.random() * imageIds.length)];
}

main()
  .catch((e) => {
    console.error("❌ Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
