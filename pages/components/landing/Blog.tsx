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
        <div className="w-full py-10">
            <div className="w-full">
                <h3 className="w-2/3 text-center mb-10 mx-auto">Check out our blog for more mental health resources.</h3>
            </div>
            <BlogCarousel posts={posts} />
        </div>
    )
}