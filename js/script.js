function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    const pages = [
        { name: 'C', url: 'languages/c.html' },
        { name: 'C++', url: 'languages/c++.html' },
        { name: 'Java', url: 'languages/java.html' },
        { name: 'Exercises', url: 'exercises/exer.html' },
        { name: 'Others', url: 'other.html' }
    ];

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query) {
            const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));
            if (filteredPages.length > 0) {
                filteredPages.forEach(page => {
                    const resultItem = document.createElement('a');
                    resultItem.href = page.url;
                    resultItem.textContent = page.name;
                    searchResults.appendChild(resultItem);
                });
                searchResults.classList.remove('hidden');
            } else {
                searchResults.classList.add('hidden');
            }
        } else {
            searchResults.classList.add('hidden');
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target !== searchInput && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });
});

