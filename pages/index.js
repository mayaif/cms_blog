
import Head from 'next/head'
import {PostCard, Categories, PostWidget} from '../components'
import { getPosts } from '../services'
import {FeaturedPosts} from '../sections'


const Home = ({posts}) => {
 
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CodeMind: Guides, Insights and Best Practices for Modern Web Development</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="CodeMind is a blog focused on coding, software development, and technology. Our articles cover a wide range of topics, including programming languages, frameworks, tools, and best practices." />
        <meta name="keywords" content="coding, software development, programming languages, frameworks, tools, best practices" />
        <meta name="author" content="CodeMind" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="CodeMind - A Blog About Coding and Software Development" />
        <meta property="og:description" content="CodeMind is a blog focused on coding, software development, and technology. Our articles cover a wide range of topics, including programming languages, frameworks, tools, and best practices." />
        <meta property="og:url" content="https://www.codemind.tech" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {/* //map over posts */}
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, id) => (
            <PostCard key={id} post={post.node} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='sticky top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts }
  }
}
