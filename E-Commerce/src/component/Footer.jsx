import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, CreditCard, Smartphone, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-purple-100">Get the latest updates on new products and upcoming sales</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg flex-1 md:w-80 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition whitespace-nowrap font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ShopHub
            </h3>
            <p className="text-sm mb-4 text-gray-400">
              Your one-stop destination for quality products at unbeatable prices. We're committed to providing the best shopping experience.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-purple-400" />
                <span>support@shophub.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-purple-400" />
                <span>123 Commerce St, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Shop All Products</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Best Sellers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Special Offers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Shipping Information</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Track Your Order</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Size Guide</a></li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal & Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Refund Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Accessibility</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-3 rounded-lg">
              <CreditCard className="text-white" size={24} />
            </div>
            <div>
              <h5 className="font-semibold text-white">Secure Payment</h5>
              <p className="text-xs text-gray-400">100% secure transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Smartphone className="text-white" size={24} />
            </div>
            <div>
              <h5 className="font-semibold text-white">Mobile Shopping</h5>
              <p className="text-xs text-gray-400">Shop on the go</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-600 p-3 rounded-lg">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h5 className="font-semibold text-white">Buyer Protection</h5>
              <p className="text-xs text-gray-400">Money-back guarantee</p>
            </div>
          </div>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="text-center md:text-left">
              <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-purple-600 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-500 transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="text-center md:text-right">
              <h5 className="text-sm font-semibold text-white mb-3">We Accept</h5>
              <div className="flex gap-2 flex-wrap justify-center md:justify-end">
                <div className="bg-white px-3 py-1.5 rounded text-xs font-bold text-gray-800">VISA</div>
                <div className="bg-white px-3 py-1.5 rounded text-xs font-bold text-gray-800">MASTERCARD</div>
                <div className="bg-white px-3 py-1.5 rounded text-xs font-bold text-blue-600">PAYPAL</div>
                <div className="bg-white px-3 py-1.5 rounded text-xs font-bold text-gray-800">AMEX</div>
                <div className="bg-white px-3 py-1.5 rounded text-xs font-bold text-purple-600">STRIPE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
            <p>© {currentYear} ShopHub. All rights reserved.</p>
            <p>Made with ❤️ for online shoppers everywhere</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
