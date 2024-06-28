document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress').forEach(progress => {
        let width = progress.style.width;
        progress.style.setProperty('--progress-width', width);
        progress.style.width = '0';
        setTimeout(() => {
            progress.style.width = width;
        }, 100);
    });
});
