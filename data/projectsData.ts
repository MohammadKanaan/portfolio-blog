import { Project } from 'types'

const projectsData: Project[] = [
  {
    title: 'Echo',
    description: `A full-featured social media app created with Next 15 and TypeScript. Join to share your thoughts and connect with others through posts, comments, likes, and real-time chat.`,
    imgSrc: '/static/images/projects/echo.png',
    href: 'https://social.mohammadkanaan.tech',
    techStack: ['NextJS', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma'],
  },
  {
    title: 'PocketChat',
    description: `A real-time chat application made with React Native and Pocketbase.`,
    imgSrc: '/static/images/projects/pocketchat.png',
    href: '/blog/pocketchat',
    techStack: ['React Native', 'Pocketbase', 'TypeScript'],
  },
  {
    title: 'Shop.io',
    description: `An e-commerce app made with NextJS and Laravel. Browse and filter through different products, add them to your cart, and place an order. Manage your inventory and orders as an admin.`,
    imgSrc: '/static/images/projects/shopio.png',
    // href: '/blog/pocketchat',
    techStack: ['NextJS', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel'],
  },
  {
    title: 'Meals',
    description: `A menu app made with Flutter. Browse through different categories of meals and their recipes.`,
    imgSrc: '/static/images/projects/meals.png',
    href: 'https://github.com/MohammadKanaan/flutter_meals',
    techStack: ['Flutter', 'Dart'],
  },
] as const

export default projectsData
