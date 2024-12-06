export default function Hero() {
  return <><div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://images.pexels.com/photos/18541774/pexels-photo-18541774/free-photo-of-texture-school-chalk-chalkboard.jpeg)",
  }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Interactify</h1>
      <p className="mb-5">
      Connect, share, and engage with a global community. Experience social networking reimagined for the modern age.
      </p>
      <div className="space-x-3">
      
      <button className="btn btn-primary">Get Started</button>
      <button className="btn btn-outline">Learn more</button>
      
      </div>
    
    </div>
  </div>
</div></>;
}
