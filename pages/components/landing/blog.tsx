import BlogCarousel from './BlogCarousel';

const posts = [
  {
    title: 'Post 1',
    image: 'https://www.theclickcommunity.com/blog/wp-content/uploads/2013/07/Melissa-Stottmann-Journaling-08.jpg',
    description: 'Description of post 1.',
  },
  {
    title: 'Post 2',
    image: 'https://www.theclickcommunity.com/blog/wp-content/uploads/2013/07/Melissa-Stottmann-Journaling-08.jpg',
    description: 'Description of post 2.',
  },
  {
    title: 'Post 1',
    image: 'https://www.theclickcommunity.com/blog/wp-content/uploads/2013/07/Melissa-Stottmann-Journaling-08.jpg',
    description: 'Description of post 1.',
  },
  {
    title: 'Post 2',
    image: 'https://www.theclickcommunity.com/blog/wp-content/uploads/2013/07/Melissa-Stottmann-Journaling-08.jpg',
    description: 'Description of post 2.',
  },
  {
    title: 'Post 1',
    image: 'https://www.theclickcommunity.com/blog/wp-content/uploads/2013/07/Melissa-Stottmann-Journaling-08.jpg',
    description: 'Description of post 1.',
  },
  {
    title: 'Post 2',
    image: 'https://www.theclickcommunity.com/blog/wp-content/uploads/2013/07/Melissa-Stottmann-Journaling-08.jpg',
    description: 'Description of post 2.',
  },
];

export default function Blog() {
    return (
        <div className="w-full py-10 text-center">
            <h2 className="mb-10">Check out our blog for more meditation, sleep, stress, and mental health resources.</h2>
            <BlogCarousel posts={posts} />
        </div>
    )
}