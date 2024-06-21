function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function toggleDisplay(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none' || !element.style.display) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function showIntro(topic) {
    const introContents = document.querySelectorAll('.intro-content');
    introContents.forEach(content => {
        content.style.display = 'none';
    });
    if (topic === 'camoes') {
        const camoesContent = document.getElementById('introCamoes');
        if (camoesContent.style.display === 'none' || !camoesContent.style.display) {
            camoesContent.style.display = 'block';
        } else {
            camoesContent.style.display = 'none';
        }
    }
}
