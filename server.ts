import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', { name, email, message });
    // In a real app, you'd save to DB or send email
    res.status(200).json({ success: true, message: 'Thank you for reaching out! We will get back to you soon.' });
  });

  app.get('/api/menu', (req, res) => {
    const menu = {
      breakfast: [
        { id: 1, name: 'Classic Avocado Toast', price: '$12', description: 'Freshly artisan sourdough, smashed organic avocado, organic chili flakes, poached eggs, heirloom cherry tomatoes, and microgreens.', image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400' },
        { id: 2, name: 'Berry Blast Pancakes', price: '$10', description: 'Fluffy organic buttermilk pancakes topped with fresh forest berries, powdered sugar, and warm pure Vermont maple syrup.', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=400' },
        { id: 3, name: 'Belgian Waffle Delight', price: '$11', description: 'Crispy sweet golden waffle served with whipped vanilla mascarpone, sliced fresh strawberries, and dark Belgian chocolate drizzle.', image: 'https://images.unsplash.com/photo-1562376502-6f769499c886?auto=format&fit=crop&q=80&w=400' },
        { id: 4, name: 'Acai Berry Superfood Bowl', price: '$12', description: 'Organic acai berry blend, organic gluten-free granola, sliced bananas, hemp seeds, shaved coconut, and local wildflower honey.', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=400' },
        { id: 5, name: 'Smoked Salmon Bagel', price: '$14', description: 'Toasted local artisanal sesame bagel with cream cheese, wild-caught smoked salmon, capers, pickled red onions, and fresh dill.', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=400' },
        { id: 6, name: 'The Garden Omelette', price: '$13', description: 'Three organic egg omelette stuffed with fresh baby spinach, wild field mushrooms, bell peppers, goat cheese, and a side of hand-cut herb potatoes.', image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400' }
      ],
      lunch: [
        { id: 7, name: 'FreshBite Signature Burger', price: '$15', description: 'Premium Angus beef, sharp white cheddar, toasted brioche bun, sweet caramelized onions, crisp organic butter lettuce, and house secret sauce.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400' },
        { id: 8, name: 'Garden Harvest Salad', price: '$13', description: 'Mixed field greens, roasted seasonal squash, crumbed organic goat cheese, candied walnuts, and a sweet house balsamic-fig glaze.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400' },
        { id: 9, name: 'Tuscan Pesto Chicken Panini', price: '$14', description: 'Grilled herb chicken breast, focaccia, rich basil-walnut pesto, melted fresh buffalo mozzarella, and vine-ripened tomatoes.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=400' },
        { id: 10, name: 'Quinoa & Avocado Power Bowl', price: '$14', description: 'Warm organic tri-color quinoa, sliced ripe avocado, crispy roasted spiced chickpeas, shredded organic kale, fresh cucumber, and lemon-tahini drizzle.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400' },
        { id: 11, name: 'Creamy Wild Mushroom Pasta', price: '$16', description: 'Artisanal taglioni tossed in a rich truffle cream sauce with hand-picked sautéed wild forest mushrooms and aged parmigiano-reggiano.', image: 'https://images.unsplash.com/photo-1621996346565-e3bb64e819b1?auto=format&fit=crop&q=80&w=400' },
        { id: 12, name: 'Spicy Cauliflower Tacos', price: '$13', description: 'Warm fresh corn tortillas filled with crispy roasted chipotle cauliflower, cool avocado crema, pickled purple cabbage, fresh cilantro, and lime.', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=400' }
      ],
      beverages: [
        { id: 13, name: 'Artisan Latte', price: '$5.00', description: 'Smooth double-shot of our ethically sourced signature espresso with velvety textured milk and classic hand-poured latte art.', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400' },
        { id: 14, name: 'Cold Brew Coffee', price: '$6.00', description: 'Our custom blend slowly cold-steeped in-house for 16 hours, served crisp over handcrafted clear ice.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400' },
        { id: 15, name: 'Matcha Green Tea Latte', price: '$5.50', description: 'Premium ceremonial-grade stone-ground Uji matcha whisked with warm organic oat milk and a touch of wild agave.', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=400' },
        { id: 16, name: 'Hibiscus Rose Iced Tea', price: '$4.50', description: 'House-brewed refreshing organic sweet hibiscus herbal tea with organic rose petals, cold-pressed lemon juice, and crushed ice.', image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=400' },
        { id: 17, name: 'Tropical Sunshine Smoothie', price: '$7.50', description: 'Fresh golden mango, sweet pineapple, organic passion fruit puree, electrolyte-rich coconut water, and a fresh hint of spicy ginger.', image: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?auto=format&fit=crop&q=80&w=400' },
        { id: 18, name: 'Classic Pour-Over V60', price: '$5.00', description: 'Carefully hand-crafted single-origin light-roast coffee brewed to order to maximize subtle floral and citrus notes.', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400' }
      ]
    };
    res.json(menu);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
