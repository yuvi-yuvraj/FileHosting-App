
const About = () => {
  return (
    <div className="min-h-screen bg-black text-white p-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About File Hosting</h2>
          <p className="text-lg text-gray-400">
            Share and host files securely, quickly, and effortlessly.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">What is File Hosting?</h3>
            <p className="text-gray-400 mb-4">
              File Hosting is a simple and powerful platform that helps you upload, host, and share files with anyone across the web. Whether it's images, PDFs, code files, or videos, you can manage your files securely and access them anytime.
            </p>
            <p className="text-gray-400">
              With an easy-to-use interface and blazing fast performance, we make file sharing easy and reliable.
            </p>
          </div>

          {/* Image/Illustration */}
          <div>
            <img
              src="uv.png"
              alt="File Sharing"
              className="rounded-2xl border border-orange-200 shadow-lg h-[490px]"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-6">Why You'll Love It</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { title: "Fast Uploads", desc: "No delays, just drag and drop." },
              { title: "Secure Hosting", desc: "Files are encrypted and protected." },
              { title: "No Account Needed", desc: "Use instantly without signing up." },
              { title: "Free Forever", desc: "No hidden charges or plans." },
            ].map((f, i) => (
              <div key={i} className="bg-[#1e1e1e] p-5 rounded-xl shadow hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-orange-300 mb-2">{f.title}</h4>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h4 className="text-xl font-medium mb-10">Start sharing your files in seconds</h4>
          <a
            href="/upload"
            className="py-3 px-6 btn-glow-gradient mx-auto"
          >
            Upload Now
          </a>
        </div>
      </div>
      <div className="mt-20 text-center">
  <h4 className="text-2xl font-semibold text-white mb-4">
    Want full control of the platform?
  </h4>
  <p className="text-gray-400 mb-6">
    Upgrade to an Admin Plan and manage website settings, user permissions, file limits, and more.
  </p>
  <a
    href="/adminpanel" 
    className="inline-block py-3 px-6 btn-glow-gradient"
  >
    Buy Admin Plan
  </a>
</div>
    </div>
  );
};

export default About;
