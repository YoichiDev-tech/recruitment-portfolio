import profile_pic1 from '../../assets/images/profile_pic1.jpg'

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-gray-800">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center cursor-default">

                {/* Left side — Text */}
                <div>
                    <h1 className="text-5xl font-bold mb-6 leading-tight">
                        Building Real Products With Precision
                    </h1>

                    <p className="text-lg text-gray-600 mb-6">
                        I'm Francesco Cole — a frontend heavy web developer focused on creating fast,
                        responsive, and production-ready applications using React,
                        TypeScript, Tailwind, and Supabase.
                    </p>

                    <p className="text-lg text-gray-600">
                        My goal is to build real-world tools, SaaS products, and
                        automation systems that solve real problems.
                    </p>
                </div>

                {/* Right side — Image */}
                <div className="flex justify-center md:justify-end">
                    <img src={profile_pic1} 
                        alt="Cole profile" 
                        className='w-125 h-75 object-cover rounded-xl shadow-lg'
                    />
                </div>
            </div>
        </div>
    );
}