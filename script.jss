let selectedComponents = {};
let currentSection = 'cpu';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    loadSection('cpu');
    setupSearch();
    setupModal();
    document.getElementById('buy-btn').addEventListener('click', openShoppingModal);
    document.getElementById('reset-btn').addEventListener('click', resetBuild);
});

function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const section = btn.dataset.section;
            loadSection(section);
            document.getElementById('search-input').value = '';
        });
    });
}

function loadSection(section) {
    currentSection = section;
    const title = section.charAt(0).toUpperCase() + section.slice(1);
    document.getElementById('section-title').textContent = title;
    const components = componentsData[section] || [];
    displayComponents(components);
}

function displayComponents(components) {
    const grid = document.getElementById('components-grid');
    grid.innerHTML = '';
    
    if (components.length === 0) {
        grid.innerHTML = '<p class="empty-message">No components found</p>';
        return;
    }
    
    components.forEach(component => {
        const card = createComponentCard(component);
        grid.appendChild(card);
    });
}

function createComponentCard(component) {
    const card = document.createElement('div');
    card.className = 'component-card';
    
    const isSelected = selectedComponents[currentSection] && 
                      selectedComponents[currentSection].id === component.id;
    
    if (isSelected) {
        card.classList.add('selected');
    }
    
    card.innerHTML = `
        <div class="component-name">${component.name}</div>
        <div class="component-specs">${component.specs}</div>
        <div class="component-price">$${component.price.toFixed(2)} CAD</div>
        <div class="component-retailer">📍 ${component.retailer}</div>
        <button class="component-btn ${isSelected ? 'selected' : ''}">
            ${isSelected ? '✓ Selected' : 'Select'}
        </button>
    `;
    
    card.addEventListener('click', () => {
        selectComponent(component);
    });
    
    return card;
}

function selectComponent(component) {
    selectedComponents[currentSection] = component;
    const components = componentsData[currentSection];
    displayComponents(components);
    updateBuildSummary();
}

function updateBuildSummary() {
    const container = document.getElementById('selected-components');
    const selected = Object.entries(selectedComponents);
    
    if (selected.length === 0) {
        container.innerHTML = '<p class="empty-message">No components selected</p>';
        document.getElementById('total-price').textContent = '$0.00';
        return;
    }
    
    container.innerHTML = '';
    let total = 0;
    
    selected.forEach(([section, component]) => {
        const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
        const item = document.createElement('div');
        item.className = 'selected-component-item';
        
        item.innerHTML = `
            <div>
                <strong>${sectionName}</strong><br>
                <small>${component.name}</small><br>
                <span class="component-price-small">$${component.price.toFixed(2)}</span>
            </div>
            <button class="remove-btn" onclick="removeComponent('${section}')" title="Remove">✕</button>
        `;
        
        container.appendChild(item);
        total += component.price;
    });
    
    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}

function removeComponent(section) {
    delete selectedComponents[section];
    if (section === currentSection) {
        const components = componentsData[currentSection];
        displayComponents(components);
    }
    updateBuildSummary();
}

function resetBuild() {
    if (Object.keys(selectedComponents).length === 0) {
        alert('Your build is already empty!');
        return;
    }
    
    if (confirm('Are you sure you want to reset your entire build?')) {
        selectedComponents = {};
        const components = componentsData[currentSection];
        displayComponents(components);
        updateBuildSummary();
    }
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchInput.addEventListener('keyup', performSearch);
    searchBtn.addEventListener('click', performSearch);
}

function performSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const components = componentsData[currentSection] || [];
    
    const filtered = components.filter(comp => 
        comp.name.toLowerCase().includes(searchTerm) ||
        comp.specs.toLowerCase().includes(searchTerm) ||
        comp.retailer.toLowerCase().includes(searchTerm)
    );
    
    displayComponents(filtered);
}

function setupModal() {
    const modal = document.getElementById('shopping-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function openShoppingModal() {
    const selected = Object.entries(selectedComponents);
    
    if (selected.length === 0) {
        alert('Please select at least one component!');
        return;
    }
    
    const modal = document.getElementById('shopping-modal');
    const linksContainer = document.getElementById('shopping-links');
    
    linksContainer.innerHTML = '';
    
    // Group components by retailer
    const retailers = new Set();
    const componentsByRetailer = {};
    
    selected.forEach(([section, component]) => {
        retailers.add(component.retailer);
        if (!componentsByRetailer[component.retailer]) {
            componentsByRetailer[component.retailer] = [];
        }
        componentsByRetailer[component.retailer].push({
            section: section.charAt(0).toUpperCase() + section.slice(1),
            name: component.name,
            price: component.price
        });
    });
    
    // Create retailer links
    retailers.forEach(retailerName => {
        const link = document.createElement('div');
        link.className = 'shopping-link';
        
        const components = componentsByRetailer[retailerName];
        let componentList = components.map(c => 
            `<li>${c.section}: ${c.name} - $${c.price.toFixed(2)}</li>`
        ).join('');
        
        let subtotal = components.reduce((sum, c) => sum + c.price, 0);
        
        const retailerURL = canadianRetailers.find(r => r.name === retailerName)?.url || '#';
        
        link.innerHTML = `
            <h4>🛒 ${retailerName}</h4>
            <p>Available components:</p>
            <ul>
                ${componentList}
            </ul>
            <p style="margin-top: 10px; font-weight: 600;">Subtotal: $${subtotal.toFixed(2)} CAD</p>
            <a href="${retailerURL}" target="_blank">Visit ${retailerName} →</a>
        `;
        
        linksContainer.appendChild(link);
    });
    
    // Add total summary
    const summary = document.createElement('div');
    summary.style.marginTop = '20px';
    summary.style.padding = '15px';
    summary.style.backgroundColor = '#f0f0f0';
    summary.style.borderRadius = '6px';
    
    let grandTotal = selected.reduce((sum, [_, comp]) => sum + comp.price, 0);
    
    summary.innerHTML = `
        <h3 style="color: #667eea; margin-bottom: 10px;">Total Build: $${grandTotal.toFixed(2)} CAD</h3>
        <p style="color: #666; font-size: 0.9em;">
            ℹ️ Prices in CAD. Check retailer websites for current availability.
        </p>
    `;
    
    linksContainer.appendChild(summary);
    modal.style.display = 'block';
}
