import { PrismaClient, RoleName } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...\n");

  // ── Create default roles ────────────────────────────────────────────
  const roles = await Promise.all(
    Object.values(RoleName).map((name) =>
      prisma.role.upsert({
        where: { name },
        update: {},
        create: {
          name,
          description: getDefaultRoleDescription(name),
        },
      }),
    ),
  );

  console.log(
    `✅ Created ${roles.length} roles: ${roles.map((r) => r.name).join(", ")}`,
  );

  // ── Create sample organization ──────────────────────────────────────
  const organization = await prisma.organization.upsert({
    where: { id: "00000000-0000-0000-0000-000000000001" },
    update: {},
    create: {
      id: "00000000-0000-0000-0000-000000000001",
      name: "Acme Agency",
      timezone: "Asia/Manila",
      locale: "en",
    },
  });

  console.log(`✅ Created organization: ${organization.name}`);

  // ── Create sample admin user ────────────────────────────────────────
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@acme.com" },
    update: {},
    create: {
      organizationId: organization.id,
      email: "admin@acme.com",
      passwordHash: "$2b$10$placeholder.hash.replace.with.real.hash",
      fullName: "Admin User",
      status: "active",
    },
  });

  console.log(`✅ Created admin user: ${adminUser.email}`);

  // ── Assign SuperAdmin role to admin user ────────────────────────────
  const superAdminRole = roles.find((r) => r.name === RoleName.SuperAdmin);
  if (superAdminRole) {
    await prisma.userRole.upsert({
      where: {
        userId_roleId: {
          userId: adminUser.id,
          roleId: superAdminRole.id,
        },
      },
      update: {},
      create: {
        userId: adminUser.id,
        roleId: superAdminRole.id,
      },
    });

    console.log(`✅ Assigned SuperAdmin role to ${adminUser.email}`);
  }

  console.log("\n🎉 Seeding complete!");
}

function getDefaultRoleDescription(role: RoleName): string {
  const descriptions: Record<RoleName, string> = {
    SuperAdmin:
      "Full system access. Can manage organizations, users, and all settings.",
    Admin:
      "Organization-level admin. Can manage projects, users, and client relationships.",
    TeamMember:
      "Project contributor. Can manage tasks, upload files, and log time.",
    Client:
      "External client access. Can view project progress, approve deliverables, and leave feedback.",
  };
  return descriptions[role];
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
