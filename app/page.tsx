import {
  CheckCircle,
} from "lucide-react";
import {
  GraduationCap,
  Smartphone,
  Building2,
  StoreIcon,
  Truck,
  ShoppingBag,
  ArrowRight,
  MapPin,
  Flag,
  Globe,
} from "lucide-react";

import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-yellow-500">
<div className="flex items-center">
  <Image
    src="/logo.png"
    alt="Kasi QuickShop Logo"
    width={260}
    height={120}
    priority
  />
</div>

        <div className="flex gap-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Ecosystem</a>
          <a href="#">Investors</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-yellow-400 text-black px-5 py-3 rounded-lg font-bold">
          Investor Portal
        </button>
      </nav>

{/* Hero Section */}

<section className="relative h-[580px] overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
style={{
  backgroundImage: "url('/protea-glen-hero.png')",
  backgroundPosition: "center center",
}}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Left Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 h-full">

    <div className="pl-14 pt-20 max-w-3xl">

      <h1 className="text-5xl font-extrabold leading-none">
        BUILDING SOUTH AFRICA'S FIRST
        <br />
        <span className="text-yellow-400">YOUTH-OWNED</span>
        <br />
        RETAIL ECOSYSTEM
      </h1>

      <p className="mt-8 text-xl text-gray-300 max-w-xl">
        Connecting entrepreneurs through technology,
        logistics, training and distribution.
      </p>

    </div>

    {/* Center Buttons */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2">

      <div className="flex gap-4">

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold">
          BECOME A FOUNDER 
        </button>

        <button className="border border-white px-8 py-4 rounded-lg">
          INVESTOR INFORMATION
        </button>

        <button className="border border-white px-8 py-4 rounded-lg">
          JOIN THE MOVEMENT
        </button>

      </div>

    </div>

  </div>

</section>
{/* IMPACT STATISTICS */}

<section className="relative z-20 -mt-12 px-12">

  <div className="grid grid-cols-4 gap-4 bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-2xl">

    <div className="text-center">
      <h3 className="text-yellow-400 text-4xl font-bold">
        R180B+
      </h3>
      <p className="text-white mt-2">
        Township Retail Market
      </p>
    </div>

    <div className="text-center border-l border-zinc-700">
      <h3 className="text-yellow-400 text-4xl font-bold">
        20,000
      </h3>
      <p className="text-white mt-2">
        Target Stores
      </p>
    </div>

    <div className="text-center border-l border-zinc-700">
      <h3 className="text-yellow-400 text-4xl font-bold">
        150,000+
      </h3>
      <p className="text-white mt-2">
        Potential Jobs
      </p>
    </div>

    <div className="text-center border-l border-zinc-700">
      <h3 className="text-yellow-400 text-4xl font-bold">
        9
      </h3>
      <p className="text-white mt-2">
        Provincial Networks
      </p>
    </div>

  </div>

</section>
{/* PROBLEM / SOLUTION SECTION */}

<section className="bg-zinc-100 -mt-12 pt-20 pb-16 px-12 text-black">

  <div className="grid grid-cols-5 gap-6 items-center">

    {/* LEFT IMAGE */}
    <div>
      <Image
        src="/problem-spaza.png"
        alt="Township Spaza Shop"
        width={500}
        height={500}
        className="rounded-lg object-cover w-full h-[350px]"
      />
    </div>

    {/* PROBLEM */}
    <div>

      <h2 className="text-4xl font-extrabold mb-6">
        THE PROBLEM
      </h2>

      <p className="text-gray-700 mb-8">
        Township entrepreneurs face significant challenges
        that limit their growth and profitability.
      </p>

      <div className="grid grid-cols-2 gap-x-8 gap-y-6">

        <div className="flex gap-3">
          <span className="text-red-500 font-bold text-xl">✕</span>
          <span>High purchase prices and low margins</span>
        </div>

        <div className="flex gap-3">
          <span className="text-red-500 font-bold text-xl">✕</span>
          <span>Unreliable supply and distribution</span>
        </div>

        <div className="flex gap-3">
          <span className="text-red-500 font-bold text-xl">✕</span>
          <span>Limited access to capital and funding</span>
        </div>

        <div className="flex gap-3">
          <span className="text-red-500 font-bold text-xl">✕</span>
          <span>Difficult to compete with big retailers</span>
        </div>

        <div className="flex gap-3">
          <span className="text-red-500 font-bold text-xl">✕</span>
          <span>No technology or system integration</span>
        </div>

        <div className="flex gap-3">
          <span className="text-red-500 font-bold text-xl">✕</span>
          <span>Limited business training and support</span>
        </div>

      </div>

    </div>

    {/* CENTER ARROW */}
    <div className="flex justify-center">

      <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-3xl font-bold shadow-lg">
        →
      </div>

    </div>

    {/* SOLUTION */}
    <div>

      <h2 className="text-4xl font-extrabold mb-6">
        THE KASI SOLUTION
      </h2>

      <p className="text-gray-700 mb-8">
        We provide entrepreneurs with everything they need
        to succeed and grow.
      </p>

      <div className="grid grid-cols-2 gap-x-8 gap-y-6">

        <div className="flex gap-3">
          <span className="text-yellow-500 font-bold text-xl">✓</span>
          <span>Better prices through bulk purchasing</span>
        </div>

        <div className="flex gap-3">
          <span className="text-yellow-500 font-bold text-xl">✓</span>
          <span>Reliable supply chain and logistics</span>
        </div>

        <div className="flex gap-3">
          <span className="text-yellow-500 font-bold text-xl">✓</span>
          <span>Access to funding and support</span>
        </div>

        <div className="flex gap-3">
          <span className="text-yellow-500 font-bold text-xl">✓</span>
          <span>Stronger together, we compete better</span>
        </div>

        <div className="flex gap-3">
          <span className="text-yellow-500 font-bold text-xl">✓</span>
          <span>Technology and digital tools</span>
        </div>

        <div className="flex gap-3">
          <span className="text-yellow-500 font-bold text-xl">✓</span>
          <span>Training, mentoring and growth support</span>
        </div>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div>

      <Image
        src="/solution-entrepreneur.png"
        alt="Kasi Entrepreneur"
        width={500}
        height={500}
        className="rounded-lg object-cover w-full h-[350px]"
      />

    </div>

  </div>

</section>
{/* OUR ECOSYSTEM */}

<section className="bg-black text-white pt-6 pb-16 px-8">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-5xl font-extrabold">
        OUR <span className="text-yellow-400">ECOSYSTEM</span>
      </h2>

      <p className="text-gray-400 text-xl mt-6 max-w-4xl mx-auto">
        An integrated ecosystem built to empower entrepreneurs
        and transform township retail across South Africa.
      </p>
    </div>

    {/* Ecosystem Flow */}

    <div className="flex items-start justify-between gap-4">

      {/* Academy */}
      <div className="flex-1 text-center">
        <GraduationCap
          size={60}
          className="text-yellow-400 mx-auto mb-6"
        />

        <h3 className="font-bold text-2xl mb-4">
          KASI ACADEMY
        </h3>

        <p className="text-gray-400">
          Training, mentorship and
          business development for
          entrepreneurs.
        </p>
      </div>

      <ArrowRight
        size={24}
        className="text-yellow-400 mt-4 flex-shrink-0"
      />

      {/* Technology */}
      <div className="flex-1 text-center">
        <Smartphone
          size={60}
          className="text-yellow-400 mx-auto mb-6"
        />

        <h3 className="font-bold text-2xl mb-4">
          KASI TECHNOLOGY
        </h3>

        <p className="text-gray-400">
          Digital ordering,
          inventory management
          and business intelligence.
        </p>
      </div>

      <ArrowRight
        size={24}
        className="text-yellow-400 mt-4 flex-shrink-0"
      />

      {/* Infrastructure */}
      <div className="flex-1 text-center">
        <Building2
          size={60}
          className="text-yellow-400 mx-auto mb-6"
        />

        <h3 className="font-bold text-2xl mb-4">
          KASI INFRASTRUCTURE
        </h3>

        <p className="text-gray-400">
          Store construction,
          warehouses and future
          distribution centres.
        </p>
      </div>

      <ArrowRight
        size={24}
        className="text-yellow-400 mt-4 flex-shrink-0"
      />

      {/* Wholesale */}
      <div className="flex-1 text-center">
        <ShoppingBag
  size={60}
  className="text-yellow-400 mx-auto mb-6"
/>

        <h3 className="font-bold text-2xl mb-4">
          KASI WHOLESALE
        </h3>

        <p className="text-gray-400">
          Bulk purchasing power
          and supplier partnerships.
        </p>
      </div>

      <ArrowRight
        size={24}
        className="text-yellow-400 mt-4 flex-shrink-0"
      />

      {/* Logistics */}
      <div className="flex-1 text-center">
        <Truck
          size={60}
          className="text-yellow-400 mx-auto mb-6"
        />

        <h3 className="font-bold text-2xl mb-4">
          KASI LOGISTICS
        </h3>

        <p className="text-gray-400">
          Reliable stock delivery
          and national distribution.
        </p>
      </div>

      <ArrowRight
        size={24}
        className="text-yellow-400 mt-4 flex-shrink-0"
      />

      {/* Retail */}
      <div className="flex-1 text-center">
        <ShoppingBag
          size={60}
          className="text-yellow-400 mx-auto mb-6"
        />

        <h3 className="font-bold text-2xl mb-4">
          KASI RETAIL
        </h3>

        <p className="text-gray-400">
          Modern branded stores
          owned and operated
          by entrepreneurs.
        </p>
      </div>

    </div>

  </div>

</section>
{/* NATIONAL ROLLOUT PLAN */}

<section className="bg-zinc-100 py-12">

  <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-center gap-12">

      {/* LEFT SIDE - SOUTH AFRICA MAP */}

      <div className="w-[40%] flex justify-start">

        <Image
          src="/south-africa-map.png"
          alt="South Africa Rollout"
          width={600}
          height={600}
          className="object-contain"
        />

      </div>

      {/* RIGHT SIDE */}

      <div className="w-[65%]">

        {/* Heading */}

        <h2 className="text-4xl font-extrabold text-black">
          NATIONAL ROLLOUT PLAN
        </h2>

       <p className="text-zinc-600 text-lg mb-8">
          Living in every home in South Africa and beyond
        </p>

        {/* Timeline */}

        <div className="flex items-center gap-2">

          {/* PHASE 1 */}

          <div className="bg-white rounded-xl shadow-md p-4 w-36 text-center">

            <MapPin
              size={28}
              className="text-yellow-500 mx-auto mb-2"
            />

            <p className="text-yellow-500 font-bold text-[10px]">
              PHASE 1
            </p>

            <h3 className="text-2xl font-bold text-black mt-1">
              PILOT
            </h3>

            <p className="font-semibold text-black">
              Soweto
            </p>

            <p className="text-xs text-zinc-600 mt-3">
              Establish and perfect the model.
            </p>

          </div>

          <ArrowRight
            size={22}
            className="text-yellow-500"
          />

          {/* PHASE 2 */}

          <div className="bg-white rounded-xl shadow-md p-4 w-36 text-center">

            <Building2
              size={28}
              className="text-yellow-500 mx-auto mb-2"
            />

            <p className="text-yellow-500 font-bold text-[10px]">
              PHASE 2
            </p>

            <h3 className="text-2xl font-bold text-black mt-1">
              EXPAND
            </h3>

            <p className="font-semibold text-black">
              Johannesburg
            </p>

            <p className="text-xs text-zinc-600 mt-3">
              Expand entrepreneur hubs.
            </p>

          </div>

          <ArrowRight
            size={22}
            className="text-yellow-500"
          />

          {/* PHASE 3 */}

          <div className="bg-white rounded-xl shadow-md p-4 w-36 text-center">

            <Truck
              size={28}
              className="text-yellow-500 mx-auto mb-2"
            />

            <p className="text-yellow-500 font-bold text-[10px]">
              PHASE 3
            </p>

            <h3 className="text-2xl font-bold text-black mt-1">
              GROW
            </h3>

            <p className="font-semibold text-black">
              Gauteng
            </p>

            <p className="text-xs text-zinc-600 mt-3">
              Province-wide rollout.
            </p>

          </div>

          <ArrowRight
            size={22}
            className="text-yellow-500"
          />

          {/* PHASE 4 */}

          <div className="bg-white rounded-xl shadow-md p-4 w-36 text-center">

            <Flag
              size={28}
              className="text-yellow-500 mx-auto mb-2"
            />

            <p className="text-yellow-500 font-bold text-[10px]">
              PHASE 4
            </p>

            <h3 className="text-2xl font-bold text-black mt-1">
              NATIONAL
            </h3>

            <p className="font-semibold text-black">
              South Africa
            </p>

            <p className="text-xs text-zinc-600 mt-3">
              Expand into all provinces.
            </p>

          </div>

          <ArrowRight
            size={22}
            className="text-yellow-500"
          />

          {/* PHASE 5 */}

          <div className="bg-white rounded-xl shadow-md p-4 w-36 text-center">

            <Globe
              size={28}
              className="text-yellow-500 mx-auto mb-2"
            />

            <p className="text-yellow-500 font-bold text-[10px]">
              PHASE 5
            </p>

            <h3 className="text-2xl font-bold text-black mt-1">
              AFRICA
            </h3>

            <p className="font-semibold text-black">
              The Continent
            </p>

            <p className="text-xs text-zinc-600 mt-3">
              Replicate the model.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* OUR IMPACT */}

<section className="bg-black py-16">

  <div className="max-w-[1600px] mx-auto px-8">

    {/* HEADING */}

    <div className="text-center mb-12">

      <h2 className="text-5xl font-extrabold text-white">
        OUR <span className="text-yellow-400">IMPACT</span>
      </h2>


      <p className="text-zinc-400 text-lg mt-4 text-center">
  Transforming township retail, creating jobs and building sustainable entrepreneurial opportunities across South Africa.
</p>

    </div>

    {/* MAIN CONTENT */}

    <div className="grid lg:grid-cols-12 gap-8 items-start">

      {/* IMAGE */}

      <div className="lg:col-span-5">

        <Image
          src="/impact-community.png"
          alt="Kasi QuickShop Community Impact"
          width={1400}
          height={900}
          className="w-full h-[360px] object-cover rounded-3xl shadow-2xl"
        />

      </div>

      {/* RIGHT SIDE */}

      <div className="lg:col-span-7 flex flex-col justify-start">

        {/* STATS ROW */}

        <div className="grid grid-cols-4 gap-3 mb-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
            <h3 className="text-yellow-400 text-3xl font-bold">
              20K+
            </h3>
            <p className="text-white text-sm mt-2">
              Stores
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
            <h3 className="text-yellow-400 text-3xl font-bold">
              150K+
            </h3>
            <p className="text-white text-sm mt-2">
              Jobs
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
            <h3 className="text-yellow-400 text-3xl font-bold">
              9
            </h3>
            <p className="text-white text-sm mt-2">
              Provinces
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
            <h3 className="text-yellow-400 text-3xl font-bold">
              R180B+
            </h3>
            <p className="text-white text-sm mt-2">
              Market
            </p>
          </div>

        </div>

        {/* BULLETS */}

        <div className="grid grid-cols-2 gap-x-10 gap-y-5">

          <div className="flex items-center gap-3">
            <CheckCircle
              size={20}
              className="text-yellow-400"
            />
            <span>Youth Entrepreneurship</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle
              size={20}
              className="text-yellow-400"
            />
            <span>Local Job Creation</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle
              size={20}
              className="text-yellow-400"
            />
            <span>Township Economic Growth</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle
              size={20}
              className="text-yellow-400"
            />
            <span>Improved Food Accessibility</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle
              size={20}
              className="text-yellow-400"
            />
            <span>Digital Transformation</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle
              size={20}
              className="text-yellow-400"
            />
            <span>Supplier Growth</span>
          </div>

        </div>

      </div>

    </div>

    {/* IMPACT JOURNEY */}

    <div className="mt-12">

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <div className="flex flex-wrap justify-center items-center gap-6">

          <div className="text-center">
            <h3 className="text-yellow-400 text-2xl font-bold">
              Entrepreneur
            </h3>
            <p className="text-zinc-400">
              Opportunity
            </p>
          </div>

          <ArrowRight className="text-yellow-400" />

          <div className="text-center">
            <h3 className="text-yellow-400 text-2xl font-bold">
              Store
            </h3>
            <p className="text-zinc-400">
              Ownership
            </p>
          </div>

          <ArrowRight className="text-yellow-400" />

          <div className="text-center">
            <h3 className="text-yellow-400 text-2xl font-bold">
              Jobs
            </h3>
            <p className="text-zinc-400">
              Created
            </p>
          </div>

          <ArrowRight className="text-yellow-400" />

          <div className="text-center">
            <h3 className="text-yellow-400 text-2xl font-bold">
              Community
            </h3>
            <p className="text-zinc-400">
              Growth
            </p>
          </div>

          <ArrowRight className="text-yellow-400" />

          <div className="text-center">
            <h3 className="text-yellow-400 text-2xl font-bold">
              Prosperity
            </h3>
            <p className="text-zinc-400">
              For All
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* BE PART OF THE MOVEMENT */}

<section className="bg-zinc-100 py-10">

  <div className="max-w-7xl mx-auto px-8">

    {/* Heading */}

    <div className="text-center mb-8">

      <h2 className="text-5xl font-extrabold text-black">
        BE PART OF THE MOVEMENT
      </h2>

      <p className="text-zinc-600 text-lg mt-2 max-w-3xl mx-auto">
        Together, we can transform the township economy and build a better future.
      </p>

    </div>

    {/* Cards */}

    <div className="grid md:grid-cols-3 gap-8">

      {/* Entrepreneurs */}

      <div className="bg-white rounded-2xl border border-zinc-200 p-8 text-center shadow-sm hover:shadow-lg transition">

        <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6">
          🏪
        </div>

        <h3 className="text-xl font-bold text-black mb-4">
          ENTREPRENEURS
        </h3>

        <p className="text-zinc-600 mb-6">
          Open your own Kasi QuickShop store and become part of the national retail network.
        </p>

        <button className="text-yellow-500 font-bold hover:text-yellow-600">
          LEARN MORE →
        </button>

      </div>

      {/* Professionals */}

      <div className="bg-white rounded-2xl border border-zinc-200 p-8 text-center shadow-sm hover:shadow-lg transition">

        <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6">
          👥
        </div>

        <h3 className="text-xl font-bold text-black mb-4">
          PROFESSIONALS
        </h3>

        <p className="text-zinc-600 mb-6">
          Join our mission and help build the future of township retail across South Africa.
        </p>

        <button className="text-yellow-500 font-bold hover:text-yellow-600">
          JOIN OUR TEAM →
        </button>

      </div>

      {/* Investors */}

      <div className="bg-white rounded-2xl border border-zinc-200 p-8 text-center shadow-sm hover:shadow-lg transition">

        <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6">
          📈
        </div>

        <h3 className="text-xl font-bold text-black mb-4">
          INVESTORS
        </h3>

        <p className="text-zinc-600 mb-6">
          Partner with us and invest in a high-impact, scalable retail platform built for Africa.
        </p>

        <button className="text-yellow-500 font-bold hover:text-yellow-600">
          VIEW INVESTOR DECK →
        </button>

      </div>

    </div>

  </div>

</section>
{/* FOOTER */}

<footer className="bg-black border-t border-zinc-800">

  <div className="max-w-7xl mx-auto px-8 py-12">

    <div className="grid md:grid-cols-4 gap-10">

      {/* Logo */}

      <div>

        <h3 className="text-3xl font-extrabold text-yellow-400">
          KASI QUICKSHOP
        </h3>

        <p className="text-zinc-400 mt-3">
          Convenient. Affordable. Yours.
        </p>

      </div>

      {/* About */}

      <div>

        <h4 className="text-white font-bold mb-4">
          About
        </h4>

        <ul className="space-y-2 text-zinc-400">

          <li>About Us</li>
          <li>Our Ecosystem</li>
          <li>National Rollout</li>
          <li>Impact</li>

        </ul>

      </div>

      {/* Contact */}

      <div>

        <h4 className="text-white font-bold mb-4">
          Contact
        </h4>

        <ul className="space-y-2 text-zinc-400">

          <li>info@kasiquickshop.com</li>
          <li>Johannesburg</li>
          <li>South Africa</li>

        </ul>

      </div>

      {/* Socials */}

      <div>

        <h4 className="text-white font-bold mb-4">
          Follow Us
        </h4>

        <ul className="space-y-2 text-zinc-400">

          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>TikTok</li>

        </ul>

      </div>

    </div>

    <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500 text-sm">
      © 2026 Kasi QuickShop Corporation. All Rights Reserved.
    </div>

  </div>

</footer>
    </main>
  );
}