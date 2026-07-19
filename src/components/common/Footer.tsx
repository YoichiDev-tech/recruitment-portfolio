export default function Footer() {
    return (
        <footer className="w-full border-t py-6 text-gray-700">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Left side */}
                <p className="text-sm">
                    © 2026 Cole — All rights reserved
                </p>

                {/* Right side */}
                <div className="flex items-center gap-6 text-sm">
                    <a 
                        href="https://github.com/YoichiDev-tech" 
                        target="_blank" 
                        className="hover:text-blue-500 transition"
                    >
                        GitHub
                    </a>

                    <a 
                        href="https://linkedin.com/in/YOUR_USERNAME" 
                        target="_blank" 
                        className="hover:text-blue-500 transition"
                    >
                        LinkedIn
                    </a>

                    <a 
                        href="mailto:dereckcole97@gmail.com"
                        className="hover:text-blue-500 transition"
                    >
                        Email
                    </a>
                </div>

            </div>
        </footer>
    );
}