document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('.main');

    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'sidebar-toggle';
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';
    sidebar.appendChild(toggleBtn);

    // Create resize handle
    const resizer = document.createElement('div');
    resizer.className = 'sidebar-resizer';
    sidebar.appendChild(resizer);

    // Toggle functionality
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        const icon = sidebar.classList.contains('collapsed')
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';
        toggleBtn.innerHTML = icon;
    });

    // Resize functionality
    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {
        isResizing = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', () => {
            isResizing = false;
            document.removeEventListener('mousemove', handleMouseMove);
        });
    });

    function handleMouseMove(e) {
        if (!isResizing) return;
        const newWidth = e.clientX;
        if (newWidth > 150 && newWidth < 600) {
            document.documentElement.style.setProperty('--sidebar-width', `${newWidth}px`);
        }
    }
});
