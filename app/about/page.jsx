import Head from "next/head"


const authors = [
  { id: 1, name: 'TNP,VNIT', bio: 'The Training and Placement Department of VNIT Nagpur aims to provide students with a platform for using their technical acumen to gain valuable experience by working in the mainstream industry. It also acts as an interface for companies seeking talented young graduates and post-graduates in various disciplines. Necessary guidance is provided to the students for career planning and personality development.', image: 'https://raw.githubusercontent.com/Mayank7225/Diwali_data_Analysis/main/Screenshot%202024-07-01%20085039.png' },
  { id: 2, name: 'Mayank Singh', bio: 'Hey there! 😊 I am an enthusiastic college coder, passionate about Python, JavaScript, and C++! I love web development with React 🌐, exploring AI & machine learning 🤖, and participating in hackathons 🏆. Contributing to open-source projects is my way of giving back to the community! 💻', image: 'https://raw.githubusercontent.com/Mayank7225/Diwali_data_Analysis/main/Screenshot%202024-03-31%20114047.png' },
];

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Authors</title>
      </Head>
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Authors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {authors.map((author) => (
          <div key={author.id} className="bg-white rounded-lg shadow-md p-6">
            <img src={author.image} alt={author.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-center mb-2">{author.name}</h2>
            <p className="text-gray-600 text-center">{author.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
