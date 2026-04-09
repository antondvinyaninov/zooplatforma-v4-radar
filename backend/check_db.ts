import { prisma } from './src/shared/db';

async function main() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    include: { author: true }
  });
  console.log("✅ Посты из базы данных:");
  console.dir(posts, { depth: null, colors: true });
}

main().catch(console.error).finally(async () => {
  await prisma.$disconnect();
});
