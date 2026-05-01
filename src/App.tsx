import { useState, useEffect, useRef } from 'react'
import { Search, ShoppingCart, Menu, Play, Star, Share2, Clock } from 'lucide-react'

/* ============================================================
   ORAL-B 2.0 WIREFRAME — Amazon Brand Store
   Greyscale clickable wireframe. No design, just function & flow.
   Brand Store max-width: 1500px (Amazon standard)
   Content max-width: ~970px (Brand Store content area)
   ============================================================ */

// ─── AMAZON HEADER ─────────────────────────────────────────────
function AmazonHeader() {
  return (
    <header>
      {/* Main nav */}
      <div className="bg-[#131921] text-white">
        <div className="max-w-[1500px] mx-auto px-4 h-[60px] flex items-center gap-4">
          <div className="border border-gray-500 rounded px-2 py-1 text-sm font-bold tracking-tight shrink-0">
            amazon<span className="text-[10px]">.com.au</span>
          </div>
          <div className="flex flex-col text-xs shrink-0">
            <span className="text-gray-400">Deliver to</span>
            <span className="font-bold text-sm">Australia</span>
          </div>
          <div className="flex-1 flex h-[40px]">
            <div className="bg-gray-200 text-gray-600 text-xs px-3 flex items-center rounded-l border-r border-gray-300 shrink-0">All</div>
            <div className="flex-1 bg-white flex items-center px-3">
              <span className="text-gray-400 text-sm">Search Amazon.com.au</span>
            </div>
            <div className="bg-[#febd69] w-[45px] flex items-center justify-center rounded-r shrink-0">
              <Search size={18} className="text-[#131921]" />
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-sm">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Hello, Sign in</span>
              <span className="font-bold text-sm">Account & Lists</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Returns</span>
              <span className="font-bold text-sm">& Orders</span>
            </div>
            <div className="flex items-center gap-1">
              <ShoppingCart size={22} />
              <span className="font-bold">Cart</span>
            </div>
          </div>
        </div>
      </div>
      {/* Sub nav */}
      <div className="bg-[#232f3e] text-white text-sm">
        <div className="max-w-[1500px] mx-auto px-4 h-[39px] flex items-center gap-4">
          <span className="font-bold shrink-0 flex items-center gap-1"><Menu size={16} /> All</span>
          <span className="text-gray-300">Today's Deals</span>
          <span className="text-gray-300">Customer Service</span>
          <span className="text-gray-300">Gift Cards</span>
          <span className="text-gray-300">Registry</span>
          <span className="text-gray-300">Sell</span>
        </div>
      </div>
      {/* Brand Store nav bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[970px] mx-auto px-4 h-[50px] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-xs font-bold">[Oral-B Logo]</div>
            <nav className="flex items-center gap-4 text-sm text-gray-600">
              <span className="font-bold text-gray-900 border-b-2 border-gray-900 pb-1">Do More With Brush Time</span>
              <span>Power Brushes</span>
              <span>Brush Heads</span>
              <span>Kids</span>
              <span>Deals</span>
            </nav>
          </div>
          <div className="text-xs text-gray-400">Follow +</div>
        </div>
      </div>
    </header>
  )
}

// ─── AMAZON FOOTER ─────────────────────────────────────────────
function AmazonFooter() {
  return (
    <footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-[#37475a] hover:bg-[#485769] text-white text-sm py-3 text-center transition-colors"
      >
        Back to top
      </button>
      <div className="bg-[#232f3e] text-white">
        <div className="max-w-[970px] mx-auto px-4 py-10">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-sm mb-3">Get to Know Us</h4>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li>About Us</li><li>Careers</li><li>Corporate Information</li><li>Press Releases</li><li>Amazon Science</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Make Money with Us</h4>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li>Sell products on Amazon</li><li>Sell on Amazon Business</li><li>Independently Publish with Us</li><li>Fulfilment by Amazon</li><li>Supply to Amazon</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Amazon Payment</h4>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li>Shop with Points</li><li>Reload Your Balance</li><li>Amazon Currency Converter</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Let Us Help You</h4>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li>Your Account</li><li>Your Orders</li><li>Shipping Rates & Policies</li><li>Returns & Replacements</li><li>Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#131921] text-white">
        <div className="max-w-[970px] mx-auto px-4 py-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="border border-gray-500 rounded px-2 py-1 text-sm font-bold tracking-tight">amazon<span className="text-[10px]">.com.au</span></div>
            <span className="text-xs text-gray-400">Australia</span>
          </div>
          <div className="text-[10px] text-gray-500">
            Conditions of Use & Sale &nbsp;|&nbsp; Privacy Notice &nbsp;|&nbsp; Cookies & Internet Advertising
          </div>
          <div className="text-[10px] text-gray-600">&copy; 1996-2026, Amazon.com, Inc. or its affiliates</div>
        </div>
      </div>
    </footer>
  )
}

// ─── STAR RATING ───────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <Star key={s} size={12} className={s <= Math.floor(rating) ? 'text-gray-700 fill-gray-700' : 'text-gray-300'} />
      ))}
    </div>
  )
}

// ─── FEATURE ICON ──────────────────────────────────────────────
function FeatureIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center w-[80px]">
      <div className="w-11 h-11 rounded-full bg-gray-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
        {icon}
      </div>
      <span className="text-[10px] text-gray-700 font-medium leading-tight whitespace-pre-line text-center mt-1.5">{label}</span>
    </div>
  )
}

// ─── ASIN PRODUCT CARD ────────────────────────────────────────
interface ProductData {
  id: string
  name: string
  variant: string
  price: string
  rating: number
  reviews: number
}

function ASINCard({ product }: { product: ProductData }) {
  return (
    <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="aspect-square bg-gray-50 flex items-center justify-center p-2 border-b border-gray-100">
        <div className="w-6 h-14 border border-gray-300 rounded-full mx-auto flex items-center justify-center">
          <span className="text-[6px] text-gray-300">IMG</span>
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-bold text-gray-900 text-[10px] leading-tight mb-0.5 line-clamp-2">{product.name}</h3>
        <p className="text-[9px] text-gray-400 mb-1">{product.variant}</p>
        <div className="flex items-center gap-0.5 mb-1">
          <StarRating rating={product.rating} />
          <span className="text-[9px] text-gray-400">{product.reviews.toLocaleString()}</span>
        </div>
        <div className="text-sm font-black text-gray-900 mb-1.5">{product.price}</div>
        <div className="text-[8px] text-gray-300 font-mono mb-1.5">ASIN: {product.id}</div>
        <button className="w-full py-1.5 bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 text-[10px] font-bold rounded-full transition-colors border border-[#fcd200]">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

// ─── HERO + STICKY TIMER ─────────────────────────────────────────
function HeroTimerSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [showStickyTimer, setShowStickyTimer] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setShowStickyTimer(!entry.isIntersecting) },
      { threshold: 0, rootMargin: '-100px 0px 0px 0px' }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Full Hero Banner */}
      <section ref={heroRef} className="border-b border-gray-200 relative">
        <div className="bg-gray-100 border border-gray-200">
          <div className="grid grid-cols-2 min-h-[320px]">
            {/* Left — Copy (50%) */}
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block border border-gray-400 bg-gray-50 px-3 py-1.5 text-xs font-bold mb-4 self-start">
                [Oral-B iO Logo]
              </div>
              <p className="text-sm text-gray-500 mb-1">Stop the clock on exactly 2 mins to</p>
              <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
                WIN $10 off an Oral-B iO2<br/>Electric Toothbrush!
              </h1>

              {/* Rotating info banners */}
              <div className="border border-dashed border-gray-400 rounded-lg p-3 bg-white mb-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  </div>
                  <span className="text-[8px] text-gray-400 uppercase">Rotating — auto-advances</span>
                </div>
                <p className="text-xs font-bold text-gray-800">NEW: Kids iO2 Range</p>
                <p className="text-[10px] text-gray-500">Powerful cavity protection for little smiles</p>
              </div>
              <div className="flex gap-1.5 text-[8px] text-gray-400">
                <span className="border border-gray-300 rounded px-1.5 py-0.5 bg-gray-100">1. Kids Range</span>
                <span className="border border-gray-300 rounded px-1.5 py-0.5">2. Replacement Heads</span>
                <span className="border border-gray-300 rounded px-1.5 py-0.5">3. Prize Info</span>
              </div>
              <p className="text-[10px] text-gray-400 mt-3">[Secondary prize offer — details TBC]</p>
            </div>

            {/* Right — Timer (50%) */}
            <div className="bg-gray-200 border-l border-gray-300 p-8 flex flex-col items-center justify-center">
              <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Timer Component</div>
              <div className="w-56 h-56 border-3 border-gray-400 rounded-2xl bg-white flex flex-col items-center justify-center gap-2 shadow-sm">
                <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                </div>
                <div className="text-5xl font-mono font-black text-gray-800 tracking-tight">0:11<span className="text-3xl">.51</span></div>
                <div className="text-[10px] text-gray-400">(Timer UX + clock mechanic)</div>
              </div>
              <button className="mt-6 bg-gray-800 text-white px-10 py-3 rounded-lg font-bold text-sm">
                Stop Clock
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded">HERO — TIMER GAME</div>
      </section>

      {/* ─── STICKY COLLAPSED TIMER BAR ─── */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showStickyTimer ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="bg-gray-900 text-white shadow-lg">
          {/* Desktop */}
          <div className="hidden md:block">
            <div className="max-w-[970px] mx-auto px-6 py-3">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2.5 shrink-0">
                  <Clock size={14} className="text-gray-400" />
                  <div className="text-2xl font-mono font-black tracking-tight leading-none">0:11<span className="text-base">.51</span></div>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <p className="text-xs text-gray-300 flex-1">
                  Stop the clock on exactly 2 mins to <span className="text-white font-semibold">WIN $10 off an Oral-B iO2!</span>
                </p>
                <button className="bg-white text-gray-900 px-6 py-2 rounded font-bold text-xs shrink-0">Stop Clock</button>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="md:hidden">
            <div className="px-4 py-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-gray-400" />
                  <div className="text-xl font-mono font-black tracking-tight leading-none">0:11<span className="text-sm">.51</span></div>
                </div>
                <button className="bg-white text-gray-900 px-4 py-1.5 rounded font-bold text-[11px]">Stop Clock</button>
              </div>
              <p className="text-[10px] text-gray-400 mt-1.5">Stop the clock to <span className="text-gray-200 font-semibold">WIN $10 off!</span></p>
            </div>
          </div>
        </div>
        <div className="max-w-[970px] mx-auto px-6">
          <div className="flex items-center gap-1.5 py-1">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-[8px] text-gray-400">STICKY — Always visible while scrolling</span>
          </div>
        </div>
      </div>
    </>
  )
}

// ─── MAIN APP ──────────────────────────────────────────────────
function App() {
  return (
    <div className="min-h-screen bg-[#e3e6e6]">
      <AmazonHeader />

      <div className="max-w-[970px] mx-auto bg-white">
        <main>
          {/* ═══ HERO SECTION ═══ */}
          <HeroTimerSection />

          {/* ═══ COPY SECTION ═══ */}
          <section className="border-b border-gray-200 relative">
            <div className="max-w-[700px] mx-auto px-6 py-10 text-center space-y-3">
              <h2 className="text-xl font-black text-gray-900">Do more with brush time</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                The average person spends 2 hours a day scrolling. But when it comes to
                brushing their teeth, most are struggling to hit that 2-minute mark!
              </p>
              <p className="text-sm text-gray-800 font-semibold">
                Do more with brush time. Switch to an Oral-B electric toothbrush today.
              </p>
            </div>
            <div className="absolute top-2 right-2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded">COPY SECTION</div>
          </section>

          {/* ═══ MEET YOUR ORAL-B BRUSH ═══ */}
          <section className="border-b border-gray-200 relative">
            <div className="px-6 py-12">
              {/* Desktop */}
              <div className="hidden md:block">
                {/* Model Tabs */}
                <div className="flex items-center justify-center gap-3 mb-10">
                  {['iO7', 'iO5', 'iO3', 'iO2', 'Kids'].map((model, i) => (
                    <button
                      key={model}
                      className={`px-7 py-2.5 rounded-full text-sm font-bold transition-colors ${
                        i === 0
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-100 text-gray-500 border border-gray-300'
                      }`}
                    >
                      {model}
                    </button>
                  ))}
                </div>

                {/* Layout: Copy left | Brush center | Features flanking */}
                <div className="relative min-h-[480px]">
                  {/* Copy — left aligned, vertically centered */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[260px] text-center space-y-4">
                    <h2 className="text-3xl font-black text-gray-900 leading-tight">Meet your<br/>Oral-B Brush</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Oral-B electric toothbrush removes up to 100% more plaque and help maintain healthier gums vs. a manual toothbrush
                    </p>
                    <p className="text-xs text-gray-500 italic">Tap to explore features</p>
                    <div>
                      <button className="border-2 border-gray-800 text-gray-800 px-6 py-2.5 rounded text-sm font-bold">
                        Shop Brushes
                      </button>
                    </div>
                  </div>

                  {/* Brush — center, angled */}
                  <div className="absolute left-[52%] top-[50%] -translate-x-1/2 -translate-y-1/2 rotate-[15deg]">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-16 bg-gray-300 border-2 border-gray-400 rounded-full relative">
                        <div className="absolute inset-2 rounded-full border border-gray-400"></div>
                      </div>
                      <div className="w-3 h-4 bg-gray-250 border-x border-gray-300"></div>
                      <div className="w-11 h-[320px] bg-gradient-to-b from-gray-200 to-gray-300 border-2 border-gray-300 rounded-[20px] relative">
                        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-gray-400 bg-white"></div>
                        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-gray-400 bg-white"></div>
                        <div className="absolute top-[110px] left-1/2 -translate-x-1/2 w-6 h-8 rounded border border-gray-400 bg-gray-100"></div>
                      </div>
                    </div>
                  </div>

                  {/* Features — Left side (staggered) */}
                  <div className="absolute left-[300px] top-[40px]"><FeatureIcon icon="5x" label={"5 Brushing\nModes"} /></div>
                  <div className="absolute left-[285px] top-[200px]"><FeatureIcon icon="AI" label={"A.I. Cleaning\nCoaching"} /></div>
                  <div className="absolute left-[270px] top-[370px]"><FeatureIcon icon="zap" label={"Magnetic Fast\nCharging"} /></div>

                  {/* Features — Right side (staggered) */}
                  <div className="absolute right-[50px] top-[40px]"><FeatureIcon icon="2m" label={"2 Minute\nTimer"} /></div>
                  <div className="absolute right-[30px] top-[200px]"><FeatureIcon icon="P" label={"Smart Pressure\nSensor"} /></div>
                  <div className="absolute right-[50px] top-[370px]"><FeatureIcon icon="D" label={"Interactive\nDisplay"} /></div>
                </div>
              </div>

              {/* Mobile */}
              <div className="md:hidden">
                {/* Screen A: Selection */}
                <div className="border border-gray-200 rounded-lg p-5 mb-6">
                  <div className="text-[9px] text-gray-400 uppercase tracking-wide mb-3">MEET-YOUR-BRUSH_A</div>
                  <div className="text-center space-y-3">
                    <h2 className="text-2xl font-black text-gray-900 leading-tight">Meet your<br/>Oral-B Brush</h2>
                    <p className="text-xs text-gray-600 leading-relaxed max-w-[280px] mx-auto">
                      Oral-B electric toothbrush removes up to 100% more plaque and help maintain healthier gums vs. a manual toothbrush.
                    </p>
                    <p className="text-sm font-bold text-gray-900">Select a toothbrush</p>
                  </div>
                  <div className="flex items-end justify-center gap-3 mt-6 pb-2">
                    {['iO3', 'iO5', 'iO5', 'iO7'].map((model, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className={`w-5 bg-gray-200 border border-gray-300 rounded-full ${i === 3 ? 'h-[120px] border-gray-500 bg-gray-300' : 'h-[100px]'}`}></div>
                        {i === 3 && <span className="text-[8px] text-gray-500 mt-1 font-bold">{model}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screen C: Feature reveal */}
                <div className="border-2 border-blue-300 rounded-lg p-5 bg-gray-50">
                  <div className="text-[9px] text-blue-500 uppercase tracking-wide mb-3">MEET-YOUR-BRUSH_C</div>
                  <div className="text-center space-y-2 mb-6">
                    <h3 className="text-xl font-black text-gray-900">Meet the<br/>Oral-B iO7</h3>
                    <p className="text-xs text-gray-500">Tap to reveal features</p>
                  </div>
                  <div className="grid grid-cols-[1fr_50px_1fr] gap-3 items-center">
                    <div className="space-y-5">
                      <FeatureIcon icon="5x" label={"5 Brushing\nModes"} />
                      <FeatureIcon icon="P" label={"Smart Pressure\nSensor"} />
                      <FeatureIcon icon="AI" label={"A.I. Cleaning\nCoaching"} />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-5 h-8 bg-gray-300 border border-gray-400 rounded-full"></div>
                      <div className="w-7 h-[180px] bg-gray-200 border border-gray-300 rounded-full mt-[-2px]"></div>
                    </div>
                    <div className="space-y-5">
                      <FeatureIcon icon="2m" label={"2 Minute\nTimer"} />
                      <FeatureIcon icon="D" label={"Interactive\nDisplay"} />
                      <FeatureIcon icon="zap" label={"Magnetic Fast\nCharging"} />
                    </div>
                  </div>
                  <div className="text-center mt-6 space-y-2">
                    <button className="bg-gray-800 text-white px-8 py-2.5 rounded text-sm font-bold w-full max-w-[200px]">Shop Brushes</button>
                    <p className="text-xs text-gray-500 underline">Back</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded">MEET YOUR BRUSH — INTERACTIVE</div>
          </section>

          {/* ═══ KIDS RANGE — Dedicated Section (NEW 2.0) ═══ */}
          <section className="border-b border-gray-200 relative">
            <div className="bg-gray-50">
              {/* Kids Hero Banner */}
              <div className="relative overflow-hidden">
                <div className="px-6 py-10">
                  <div className="grid grid-cols-2 gap-8 items-center">
                    {/* Left — Lifestyle image placeholder */}
                    <div className="aspect-[4/3] bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center relative">
                      <div className="text-center space-y-2">
                        <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full border-2 border-gray-400 flex items-center justify-center">
                          <span className="text-[10px] text-gray-500 text-center">Parent +<br/>Child<br/>brushing</span>
                        </div>
                        <p className="text-[9px] text-gray-400">[Lifestyle imagery — kid brushing with parent]</p>
                      </div>
                      <div className="absolute bottom-2 left-2 text-[8px] text-gray-400">^with regular brushing using Oral-B fluoride toothpaste</div>
                    </div>

                    {/* Right — Kids messaging */}
                    <div className="text-center space-y-4">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Powerful Cavity</p>
                      <h2 className="text-3xl font-black text-gray-900 leading-tight">PROTECTION<br/>starts with</h2>
                      <div className="inline-block border-2 border-gray-800 rounded-full px-5 py-2 text-sm font-black">Oral-B</div>
                      
                      {/* Disney character badge */}
                      <div className="flex justify-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <span className="text-[8px] text-gray-500 text-center">Disney<br/>Stitch</span>
                        </div>
                      </div>

                      {/* Kids product features */}
                      <div className="space-y-2 text-left max-w-[240px] mx-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400 flex items-center justify-center text-[7px]">✓</div>
                          <span className="text-xs text-gray-700">Designed for ages 3+</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400 flex items-center justify-center text-[7px]">✓</div>
                          <span className="text-xs text-gray-700">Extra soft bristles for gentle cleaning</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400 flex items-center justify-center text-[7px]">✓</div>
                          <span className="text-xs text-gray-700">Fun Disney characters kids love</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400 flex items-center justify-center text-[7px]">✓</div>
                          <span className="text-xs text-gray-700">2-minute timer with fun stickers</span>
                        </div>
                      </div>

                      <button className="border-2 border-gray-800 text-gray-800 px-6 py-2.5 rounded text-sm font-bold mt-2">
                        Shop Kids Range
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kids product cards */}
              <div className="px-6 pb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4">
                    <div className="w-14 h-24 bg-gray-200 border border-gray-300 rounded-lg shrink-0 flex items-center justify-center">
                      <span className="text-[7px] text-gray-400 text-center">Kids<br/>Brush</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Oral-B Kids Electric Toothbrush</p>
                      <p className="text-[10px] text-gray-500">featuring Disney's Stitch</p>
                      <p className="text-[9px] text-gray-400 mt-1">ASIN: B0D5LJ7NM6</p>
                      <p className="text-xs font-bold text-gray-800 mt-1">Ages 3+ | $49.00</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4">
                    <div className="w-14 h-24 bg-gray-200 border border-gray-300 rounded-lg shrink-0 flex items-center justify-center">
                      <span className="text-[7px] text-gray-400 text-center">Kids<br/>Brush</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Oral-B Stages Power Kids</p>
                      <p className="text-[10px] text-gray-500">featuring Disney's Frozen</p>
                      <p className="text-[9px] text-gray-400 mt-1">ASIN: B076FPMFPM</p>
                      <p className="text-xs font-bold text-gray-800 mt-1">Battery Powered | $29.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded">KIDS RANGE — NEW 2.0</div>
          </section>

          {/* ═══ VIDEO SECTION ═══ */}
          <section className="bg-gray-50 border-b border-gray-200 relative">
            <div className="px-6 py-8">
              <div className="aspect-video bg-gray-200 border border-gray-300 rounded flex items-center justify-center relative">
                <div className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center">
                  <Play size={24} className="text-white ml-0.5" />
                </div>
                <div className="absolute top-3 left-3 text-[10px] text-gray-500 font-bold uppercase">Video Player</div>
                <div className="absolute bottom-3 left-3 text-[10px] text-gray-400">"Circles Around Cavities" — Brand Video</div>
                <div className="absolute top-3 right-3 border border-gray-300 bg-white px-2 py-0.5 text-[9px] font-bold">[Oral-B]</div>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded">VIDEO SECTION</div>
          </section>

          {/* ═══ PRODUCT GRID — 2 rows of 4 ═══ */}
          <section className="border-b border-gray-200 relative">
            <div className="px-6 py-10">
              <div className="text-center mb-6">
                <h2 className="text-lg font-black text-gray-900">Shop your favourites</h2>
              </div>

              {/* Row 1: 4 products */}
              <div className="grid grid-cols-4 gap-3 mb-3">
                {[
                  { id: 'B0D5LH42R6', name: 'Oral-B iO Series 4', variant: 'Black', price: '$129.00', rating: 4.5, reviews: 2341 },
                  { id: 'B0D5LJ8K2M', name: 'Oral-B iO Series 5', variant: 'Black', price: '$179.00', rating: 4.6, reviews: 1892 },
                  { id: 'B0D5LL2Q4R', name: 'Oral-B iO Series 7', variant: 'White', price: '$299.00', rating: 4.7, reviews: 3456 },
                  { id: 'B0D5LM5T5S', name: 'Oral-B iO Series 2', variant: 'White', price: '$89.00', rating: 4.4, reviews: 5678 },
                ].map((product) => (
                  <ASINCard key={product.id} product={product} />
                ))}
              </div>

              {/* Row 2: 4 products (kids + brush heads) */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { id: 'B0D5LJ7NM6', name: 'Oral-B Kids Electric (Stitch)', variant: 'Ages 3+', price: '$49.00', rating: 4.3, reviews: 987 },
                  { id: 'B076FPMFPM', name: 'Oral-B Stages Power Kids', variant: 'Frozen', price: '$29.00', rating: 4.2, reviews: 1543 },
                  { id: 'B0D5LQ4A8W', name: 'Oral-B iO Replacement Heads', variant: '4 Pack', price: '$49.00', rating: 4.6, reviews: 4521 },
                  { id: 'B0D5LR7D9X', name: 'Oral-B iO Gentle Care Heads', variant: '2 Pack', price: '$29.00', rating: 4.5, reviews: 3210 },
                ].map((product) => (
                  <ASINCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded">PRODUCT GRID — ASIN CARDS</div>
          </section>

          {/* ═══ BRAND BANNER ═══ */}
          <section className="border-b border-gray-200 relative">
            <div className="px-6 py-10 bg-gray-100">
              <div className="flex items-center justify-center gap-6">
                <span className="text-lg font-bold text-gray-700">Do more with brush time</span>
                <div className="border border-gray-400 bg-white px-4 py-2 text-xs font-bold">[Oral-B iO Logo]</div>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded">BRAND BANNER</div>
          </section>

          {/* ═══ SHARE SECTION ═══ */}
          <section className="border-b border-gray-200 relative">
            <div className="px-6 py-6 text-center">
              <button className="inline-flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-xs text-gray-600">
                <Share2 size={14} /> Share
              </button>
              <p className="text-[10px] text-gray-400 mt-2">Share this page with your friends</p>
            </div>
            <div className="absolute top-2 right-2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded">SHARE</div>
          </section>
        </main>
      </div>

      <AmazonFooter />
      <div className="text-center py-2 text-[9px] text-gray-500 bg-[#e3e6e6]">
        [Wireframe — This is a prototype, not a live Amazon page]
      </div>
    </div>
  )
}

export default App
