import { Project } from 'types'

const projectsData: Project[] = [
  {
    title: 'Echo',
    description: `A full-featured social media app created with Next 15 and TypeScript. Join to share your thoughts and connect with others through posts, comments, likes, and real-time chat.`,
    imgSrc: '/static/images/projects/echo.png',
    href: 'https://social.mohammadkanaan.tech',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Meals',
    description: `A menu app made with Flutter. Browse through different categories of meals and their recipes.`,
    imgSrc: '/static/images/projects/meals.png',
    href: 'https://github.com/MohammadKanaan/flutter_meals',
    techStack: ['Flutter', 'Dart'],
  },
  {
    title: 'PocketChat',
    description: `A real-time chat application made with React Native and Pocketbase.`,
    imgSrc: '/static/images/projects/pocketchat.png',
    href: '/blog/pocketchat',
    techStack: ['React Native', 'Pocketbase', 'TypeScript'],
  },
] as const

export default projectsData
