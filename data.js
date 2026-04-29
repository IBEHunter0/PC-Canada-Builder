// Canadian Retailers Database
const canadianRetailers = [
    { name: 'Canada Computers', url: 'https://www.canadacomputers.com' },
    { name: 'Memory Express', url: 'https://www.memoryexpress.com' },
    { name: 'Best Buy Canada', url: 'https://www.bestbuycanada.ca' },
    { name: 'Newegg Canada', url: 'https://www.newegg.ca' },
    { name: 'Amazon.ca', url: 'https://www.amazon.ca' },
];

// PC Components Database (CAD Pricing)
const componentsData = {
    cpu: [
        { id: 1, name: 'Intel Core i9-13900K', specs: '24C/36T, 3.0-5.8GHz', price: 749.99, retailer: 'Canada Computers' },
        { id: 2, name: 'Intel Core i7-13700K', specs: '16C/24T, 3.4-5.4GHz', price: 469.99, retailer: 'Memory Express' },
        { id: 3, name: 'Intel Core i5-13600K', specs: '14C/20T, 3.5-5.1GHz', price: 349.99, retailer: 'Best Buy Canada' },
        { id: 4, name: 'AMD Ryzen 9 7950X', specs: '16C/32T, 4.5-5.7GHz', price: 699.99, retailer: 'Newegg Canada' },
        { id: 5, name: 'AMD Ryzen 7 7700X', specs: '8C/16T, 4.5-5.4GHz', price: 459.99, retailer: 'Amazon.ca' },
        { id: 6, name: 'AMD Ryzen 5 7600X', specs: '6C/12T, 4.7-5.3GHz', price: 319.99, retailer: 'Canada Computers' },
        { id: 7, name: 'Intel Core i9-12900K', specs: '16C/24T, 3.2-5.2GHz', price: 599.99, retailer: 'Memory Express' },
        { id: 8, name: 'AMD Ryzen 9 5950X', specs: '16C/32T, 3.4-4.9GHz', price: 449.99, retailer: 'Best Buy Canada' }
    ],
    
    motherboard: [
        { id: 11, name: 'ASUS ROG STRIX Z790-E', specs: 'LGA1700, ATX, PCIe 5.0', price: 549.99, retailer: 'Memory Express' },
        { id: 12, name: 'MSI MPG Z790 EDGE WiFi', specs: 'LGA1700, ATX, DDR5', price: 449.99, retailer: 'Canada Computers' },
        { id: 13, name: 'Gigabyte Z790 AORUS Master', specs: 'LGA1700, ATX, PCIe 5.0', price: 499.99, retailer: 'Newegg Canada' },
        { id: 14, name: 'ASUS TUF GAMING X870-E', specs: 'AM5, ATX, DDR5', price: 429.99, retailer: 'Amazon.ca' },
        { id: 15, name: 'MSI MPG B850E EDGE WiFi', specs: 'AM5, ATX, DDR5', price: 349.99, retailer: 'Best Buy Canada' },
        { id: 16, name: 'Gigabyte X870-E AORUS Master', specs: 'AM5, ATX, PCIe 5.0', price: 479.99, retailer: 'Canada Computers' },
        { id: 17, name: 'ASRock B550 Phantom Gaming', specs: 'AM4, ATX, PCIe 4.0', price: 249.99, retailer: 'Memory Express' },
        { id: 18, name: 'ASUS Prime B450-Plus', specs: 'AM4, ATX, Budget', price: 149.99, retailer: 'Newegg Canada' }
    ],
    
    gpu: [
        { id: 21, name: 'NVIDIA RTX 4090', specs: '24GB GDDR6X, 10752 CUDA', price: 2299.99, retailer: 'Canada Computers' },
        { id: 22, name: 'NVIDIA RTX 4080', specs: '16GB GDDR6X, 9728 CUDA', price: 1499.99, retailer: 'Memory Express' },
        { id: 23, name: 'NVIDIA RTX 4070 Ti', specs: '12GB GDDR6X, 7680 CUDA', price: 999.99, retailer: 'Best Buy Canada' },
        { id: 24, name: 'NVIDIA RTX 4070', specs: '12GB GDDR6, 5888 CUDA', price: 749.99, retailer: 'Newegg Canada' },
        { id: 25, name: 'NVIDIA RTX 4060 Ti', specs: '8GB GDDR6, 4352 CUDA', price: 499.99, retailer: 'Amazon.ca' },
        { id: 26, name: 'AMD Radeon RX 7900 XTX', specs: '24GB GDDR6, 5376 SP', price: 1299.99, retailer: 'Canada Computers' },
        { id: 27, name: 'AMD Radeon RX 7900 XT', specs: '20GB GDDR6, 5120 SP', price: 899.99, retailer: 'Memory Express' },
        { id: 28, name: 'Intel Arc A770', specs: '8/16GB GDDR6, 32 XE', price: 449.99, retailer: 'Best Buy Canada' }
    ],
    
    ram: [
        { id: 31, name: 'Corsair Dominator RGB 32GB DDR5 6000', specs: '32GB (2x16), DDR5, 6000MHz', price: 349.99, retailer: 'Memory Express' },
        { id: 32, name: 'G.Skill Trident Z5 32GB DDR5 6000', specs: '32GB (2x16), DDR5, 6000MHz', price: 319.99, retailer: 'Canada Computers' },
        { id: 33, name: 'Kingston Fury Beast 32GB DDR5 5200', specs: '32GB (2x16), DDR5, 5200MHz', price: 279.99, retailer: 'Newegg Canada' },
        { id: 34, name: 'Corsair Vengeance RGB 64GB DDR5', specs: '64GB (2x32), DDR5, 5600MHz', price: 579.99, retailer: 'Amazon.ca' },
        { id: 35, name: 'Crucial Ballistix 32GB DDR4 3600', specs: '32GB (2x16), DDR4, 3600MHz', price: 199.99, retailer: 'Best Buy Canada' },
        { id: 36, name: 'G.Skill Ripjaws V 64GB DDR4 3600', specs: '64GB (2x32), DDR4, 3600MHz', price: 349.99, retailer: 'Canada Computers' },
        { id: 37, name: 'Kingston HyperX 32GB DDR4 3200', specs: '32GB (2x16), DDR4, 3200MHz', price: 179.99, retailer: 'Memory Express' },
        { id: 38, name: 'Corsair Dominator 16GB DDR4 3600', specs: '16GB (2x8), DDR4, 3600MHz', price: 99.99, retailer: 'Best Buy Canada' }
    ],
    
    storage: [
        { id: 41, name: 'Samsung 990 Pro 4TB NVMe', specs: '4TB, PCIe 4.0, 7100MB/s', price: 599.99, retailer: 'Canada Computers' },
        { id: 42, name: 'WD Black SN850X 2TB NVMe', specs: '2TB, PCIe 4.0, 7100MB/s', price: 279.99, retailer: 'Memory Express' },
        { id: 43, name: 'Crucial P5 Plus 1TB NVMe', specs: '1TB, PCIe 4.0, 6600MB/s', price: 129.99, retailer: 'Best Buy Canada' },
        { id: 44, name: 'Sabrent Rocket 4 Plus 2TB', specs: '2TB, PCIe 4.0, 7000MB/s', price: 249.99, retailer: 'Newegg Canada' },
        { id: 45, name: 'Kingston A3000 1TB NVMe', specs: '1TB, PCIe 3.0, 3500MB/s', price: 89.99, retailer: 'Amazon.ca' },
        { id: 46, name: 'Seagate Barracuda 2TB HDD', specs: '2TB, 7200RPM, 256MB', price: 69.99, retailer: 'Canada Computers' },
        { id: 47, name: 'WD Red Pro 4TB NAS', specs: '4TB, 7200RPM, NAS', price: 149.99, retailer: 'Memory Express' },
        { id: 48, name: 'Samsung 870 QVO 1TB SSD', specs: '1TB, SATA, 560MB/s', price: 99.99, retailer: 'Best Buy Canada' }
    ],
    
    psu: [
        { id: 51, name: 'Corsair HX1500i 1500W', specs: '1500W, 80+ Platinum, Modular', price: 449.99, retailer: 'Memory Express' },
        { id: 52, name: 'EVGA SuperNOVA 1000 G6', specs: '1000W, 80+ Gold, Modular', price: 299.99, retailer: 'Canada Computers' },
        { id: 53, name: 'Seasonic Focus Plus 850W', specs: '850W, 80+ Gold, Modular', price: 279.99, retailer: 'Newegg Canada' },
        { id: 54, name: 'Corsair RM850x 850W', specs: '850W, 80+ Gold, Semi-Mod', price: 249.99, retailer: 'Amazon.ca' },
        { id: 55, name: 'Be Quiet Dark Power 1000W', specs: '1000W, 80+ Platinum, Fanless', price: 399.99, retailer: 'Best Buy Canada' },
        { id: 56, name: 'MSI MPG A1000G 1000W', specs: '1000W, 80+ Gold, Modular', price: 319.99, retailer: 'Canada Computers' },
        { id: 57, name: 'Thermaltake Toughpower 850W', specs: '850W, 80+ Gold, RGB', price: 269.99, retailer: 'Memory Express' },
        { id: 58, name: 'Corsair CV650 650W', specs: '650W, 80+ Bronze, Budget', price: 119.99, retailer: 'Best Buy Canada' }
    ],
    
    case: [
        { id: 61, name: 'Lian Li O11 Dynamic XL ROG', specs: 'Full Tower, Tempered Glass', price: 299.99, retailer: 'Canada Computers' },
        { id: 62, name: 'NZXT H7 Flow RGB', specs: 'Mid Tower, Mesh, RGB', price: 199.99, retailer: 'Memory Express' },
        { id: 63, name: 'Phanteks Eclipse P400A Digital', specs: 'Mid Tower, Mesh, RGB', price: 179.99, retailer: 'Best Buy Canada' },
        { id: 64, name: 'Corsair Carbide Series 275R', specs: 'Mid Tower, Tempered Glass', price: 149.99, retailer: 'Newegg Canada' },
        { id: 65, name: 'Fractal Design North', specs: 'Mid Tower, Scandinavian Design', price: 189.99, retailer: 'Amazon.ca' },
        { id: 66, name: 'Thermaltake Core P3', specs: 'Mid Tower, Open Frame', price: 139.99, retailer: 'Canada Computers' },
        { id: 67, name: 'Cooler Master Halo 240', specs: 'Compact, AIO Ready', price: 159.99, retailer: 'Memory Express' },
        { id: 68, name: 'NZXT H500 Flow Compact', specs: 'Compact, Minimalist', price: 119.99, retailer: 'Best Buy Canada' }
    ],
    
    cooling: [
        { id: 71, name: 'NZXT Kraken X73 RGB 360mm', specs: '360mm AIO, Display, RGB', price: 349.99, retailer: 'Memory Express' },
        { id: 72, name: 'Corsair H170i RGB Platinum 420mm', specs: '420mm AIO, LCD Screen', price: 399.99, retailer: 'Canada Computers' },
        { id: 73, name: 'EVGA CLC 360mm', specs: '360mm AIO, RGB', price: 279.99, retailer: 'Newegg Canada' },
        { id: 74, name: 'Noctua NH-D15 Chromax', specs: 'Air, Dual Tower, Silent', price: 189.99, retailer: 'Amazon.ca' },
        { id: 75, name: 'be quiet! Dark Rock Pro 4', specs: 'Air, Dual Tower, Silent', price: 179.99, retailer: 'Best Buy Canada' },
        { id: 76, name: 'Scythe Fuma 2 Rev. B', specs: 'Air, Dual Tower, Performance', price: 169.99, retailer: 'Canada Computers' },
        { id: 77, name: 'Lian Li Galahad 360 AIO', specs: '360mm AIO, Stealth', price: 259.99, retailer: 'Memory Express' },
        { id: 78, name: 'Arctic Liquid Freezer II 280mm', specs: '280mm AIO, High Performance', price: 199.99, retailer: 'Best Buy Canada' }
    ],
    
    peripherals: [
        { id: 91, name: 'Corsair K95 Platinum XT', specs: 'Mech Keyboard, Cherry MX, RGB', price: 229.99, retailer: 'Canada Computers' },
        { id: 92, name: 'Logitech G Pro X 2 Superlight', specs: 'Gaming Mouse, Wireless, 60g', price: 169.99, retailer: 'Memory Express' },
        { id: 93, name: 'HyperX Cloud II Headset', specs: '7.1 Surround, Noise Cancel', price: 149.99, retailer: 'Best Buy Canada' },
        { id: 94, name: 'ASUS PA247CV 24\" Monitor', specs: '1080p, IPS, 99% sRGB', price: 349.99, retailer: 'Newegg Canada' },
        { id: 95, name: 'Dell S2721DGF 27\" Monitor', specs: '1440p, 165Hz, 1ms', price: 429.99, retailer: 'Amazon.ca' },
        { id: 96, name: 'SteelSeries Rival 5 Mouse', specs: 'Gaming Mouse, 18K DPI', price: 79.99, retailer: 'Canada Computers' },
        { id: 97, name: 'Razer DeathAdder V3', specs: 'Wireless, 30K DPI, Lightweight', price: 129.99, retailer: 'Memory Express' },
        { id: 98, name: 'Audio-Technica AT2020USB Mic', specs: 'Condenser, USB, Studio', price: 199.99, retailer: 'Best Buy Canada' }
    ],
    
    fans: [
        { id: 81, name: 'Corsair ML120 Pro RGB 3-Pack', specs: '120mm, Magnetic, RGB', price: 149.99, retailer: 'Canada Computers' },
        { id: 82, name: 'NZXT Aer Flow 120mm 3-Pack', specs: '120mm, High Airflow, RGB', price: 129.99, retailer: 'Memory Express' },
        { id: 83, name: 'Phanteks PH-F120SK 3-Pack', specs: '120mm, Quiet', price: 89.99, retailer: 'Best Buy Canada' },
        { id: 84, name: 'Corsair AF140 Pro RGB 2-Pack', specs: '140mm, Airflow, RGB', price: 99.99, retailer: 'Newegg Canada' },
        { id: 85, name: 'be quiet! Pure Wings 3 120mm', specs: '120mm, Silent, PWM', price: 34.99, retailer: 'Amazon.ca' },
        { id: 86, name: 'Arctic P12 PWM PST 5-Pack', specs: '120mm, Budget, Chainable', price: 59.99, retailer: 'Canada Computers' },
        { id: 87, name: 'Lian Li Uni SL120 RGB 3-Pack', specs: '120mm, Dual Ring, RGB', price: 119.99, retailer: 'Memory Express' },
        { id: 88, name: 'Thermaltake Riing Plus 120mm', specs: '120mm, Quiet, RGB', price: 109.99, retailer: 'Best Buy Canada' }
    ]
};
