import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, Mail, Instagram } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { getSimpleWhatsAppUrl } from '../utils';

export default function Contact() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      showToast('Please fill in your name and message.', 'error');
      return;
    }
    showToast('Message sent! We will get back to you soon.', 'success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-aqua-100 text-aqua-600 text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="section-title text-white drop-shadow-md mb-4">Get In Touch</h2>
          <p className="text-white/90 drop-shadow-sm text-base sm:text-lg">
            Have questions or want to place an order? Reach out to us and our team will
            be happy to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info + map */}
          <div className="space-y-6 animate-fade-up">
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                value="+91 8200745595"
                href="tel:+918200745595"
                actionLabel="Call Now"
              />
              <InfoCard
                icon={<MessageCircle className="w-6 h-6" />}
                title="WhatsApp"
                value="+91 8200745595"
                href={getSimpleWhatsAppUrl()}
                actionLabel="Chat Now"
                green
              />
              <InfoCard
                icon={<Mail className="w-6 h-6" />}
                title="Email Us"
                value="aquablue6677@gmail.com"
                href="mailto:aquablue6677@gmail.com"
                actionLabel="Send Email"
              />
              <InfoCard
                icon={<Instagram className="w-6 h-6" />}
                title="Instagram"
                value="@aqua_bule_1205"
                href="https://www.instagram.com/aqua_bule_1205/"
                actionLabel="View Profile"
                openInNewTab
              />
            </div>

            {/* Address */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/70 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-aqua-gradient flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900 mb-1">Our Location</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Jothan Village, Near Saroli Sai Mandir,<br />
                    Olpad Road, Surat - 394520.
                  </p>
                  <div className="mt-4 flex flex-col items-start gap-2">
                    <a
                      href="https://maps.app.goo.gl/9KvXkCs98vdhzoqz9?g_st=iw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-aqua-50 px-4 py-2.5 text-sm font-semibold text-aqua-700 transition-colors hover:bg-aqua-100"
                    >
                      <MapPin className="w-4 h-4" />
                      View Location on Google Maps
                    </a>
                    <a
                      href="https://maps.app.goo.gl/9KvXkCs98vdhzoqz9?g_st=iw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-aqua-50 px-4 py-2.5 text-sm font-semibold text-aqua-700 transition-colors hover:bg-aqua-100"
                    >
                      <MapPin className="w-4 h-4" />
                      Second Location / Branch
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/70 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-aqua-100 flex items-center justify-center text-aqua-600 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-navy-900 mb-2">Business Hours</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Monday - Saturday</span>
                      <span className="font-medium">7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Sunday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Delivery hours may vary based on your location.
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-64">
              <iframe
                title="Aqua Blue Location"
                src="https://www.google.com/maps?q=Saroli+Sai+Mandir+Olpad+Road+Surat&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/70 shadow-sm">
              <h3 className="font-display font-bold text-xl text-navy-900 mb-5">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your name"
                      className="input-field pl-11"
                    />
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <Send className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email (optional)</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="input-field pl-11"
                    />
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={5}
                    className="input-field resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
  href,
  actionLabel,
  green,
  openInNewTab,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  actionLabel: string;
  green?: boolean;
  openInNewTab?: boolean;
}) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/70 shadow-sm card-hover">
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 ${
          green ? 'bg-green-500' : 'bg-aqua-gradient'
        }`}
      >
        {icon}
      </div>
      <h3 className="font-display font-bold text-navy-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{value}</p>
      <a
        href={href}
        target={green || openInNewTab ? '_blank' : undefined}
        rel={green || openInNewTab ? 'noopener noreferrer' : undefined}
        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
          green ? 'text-green-600 hover:text-green-700' : 'text-aqua-600 hover:text-aqua-700'
        }`}
      >
        {actionLabel}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
