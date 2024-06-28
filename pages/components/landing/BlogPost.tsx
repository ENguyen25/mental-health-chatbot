import Image from 'next/image';

interface BlogPostProps {
  title: string;
  image: string;
  description: string;
}

export default function BlogPost({ title, image, description }: BlogPostProps) {
  return (
    <div className="blog-post mx-2">
      <div className="blog-post-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-post-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
